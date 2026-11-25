import 'dotenv/config'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import { createHash, randomBytes } from 'node:crypto'
import express from 'express'
import mysql from 'mysql2/promise'

const requiredDatabaseSettings = ['DB_HOST', 'DB_USER', 'DB_NAME']
const missingSettings = requiredDatabaseSettings.filter((setting) => !process.env[setting])
const placeholderSettings = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'].filter((setting) => {
  const value = process.env[setting]?.trim()
  return value?.startsWith('<') && value.endsWith('>')
})

if (missingSettings.length > 0) {
  throw new Error(`Missing database configuration: ${missingSettings.join(', ')}`)
}

if (placeholderSettings.length > 0) {
  throw new Error(
    `Database configuration still contains placeholder values: ${placeholderSettings.join(', ')}. ` +
      'Replace them with the real TiDB connection values in backend/.env.',
  )
}

const app = express()
const port = Number(process.env.PORT) || 3000
const sessionCookieName = 'dua_sap_session'
const sessionMaxAgeMs = 30 * 24 * 60 * 60 * 1000
const temporarySessionMaxAgeMs = 12 * 60 * 60 * 1000
const cookieSameSite = (process.env.COOKIE_SAME_SITE || 'lax').toLowerCase()

if (!['lax', 'strict', 'none'].includes(cookieSameSite)) {
  throw new Error('COOKIE_SAME_SITE must be lax, strict, or none.')
}

const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production' || cookieSameSite === 'none',
  sameSite: cookieSameSite,
  path: '/',
}

const databaseOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
}

if (process.env.DB_SSL === 'true') {
  databaseOptions.ssl = { minVersion: 'TLSv1.2' }
}

const pool = mysql.createPool({
  ...databaseOptions,
})

const frontendOrigins = process.env.FRONTEND_ORIGIN
  ? process.env.FRONTEND_ORIGIN.split(',').map((origin) => origin.trim()).filter(Boolean)
  : ['http://localhost:5173', 'http://127.0.0.1:5173']

app.use(cors({ origin: frontendOrigins, credentials: true }))
app.use(express.json({ limit: '10kb' }))

const getSessionToken = (request) => {
  const prefix = `${sessionCookieName}=`
  const cookie = request.headers.cookie
    ?.split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix))
  return cookie ? cookie.slice(prefix.length) : ''
}

const authenticate = async (request, response, next) => {
  const sessionToken = getSessionToken(request)
  if (!sessionToken) {
    response.status(401).json({ message: 'Phiên đăng nhập không hợp lệ hoặc đã hết hạn.' })
    return
  }

  const tokenHash = createHash('sha256').update(sessionToken).digest('hex')

  try {
    const [rows] = await pool.execute(
      `SELECT users.id, users.full_name, users.email
       FROM user_sessions
       INNER JOIN users ON users.id = user_sessions.user_id
       WHERE user_sessions.token_hash = ?
       AND user_sessions.expires_at > UTC_TIMESTAMP()
       LIMIT 1`,
      [tokenHash],
    )

    if (rows.length === 0) {
      response.status(401).json({ message: 'Phiên đăng nhập không hợp lệ hoặc đã hết hạn.' })
      return
    }

    response.locals.user = {
      id: rows[0].id,
      fullName: rows[0].full_name,
      email: rows[0].email,
    }
    next()
  } catch (error) {
    next(error)
  }
}

app.get('/api/health', async (_request, response, next) => {
  try {
    await pool.query('SELECT 1')
    response.json({ status: 'ok' })
  } catch (error) {
    next(error)
  }
})

app.post('/api/register', async (request, response, next) => {
  const { fullName, email, password } = request.body ?? {}
  const normalizedName = typeof fullName === 'string' ? fullName.trim() : ''
  const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''

  if (
    normalizedName.length < 2 ||
    normalizedName.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail) ||
    typeof password !== 'string' ||
    password.length < 8 ||
    Buffer.byteLength(password, 'utf8') > 72
  ) {
    response.status(400).json({
      message: 'Vui lòng nhập họ tên, email hợp lệ và mật khẩu từ 8 ký tự, tối đa 72 byte UTF-8.',
    })
    return
  }

  try {
    const passwordHash = await bcrypt.hash(password, 12)
    const [result] = await pool.execute(
      'INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)',
      [normalizedName, normalizedEmail, passwordHash],
    )

    response.status(201).json({
      message: 'Đăng ký thành công.',
      user: { id: result.insertId, fullName: normalizedName, email: normalizedEmail },
    })
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      response.status(409).json({ message: 'Email này đã được đăng ký.' })
      return
    }

    next(error)
  }
})

app.post('/api/login', async (request, response, next) => {
  const { email, password } = request.body ?? {}
  const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''

  if (typeof password === 'string' && Buffer.byteLength(password, 'utf8') > 72) {
    response.status(400).json({
      message: 'Mật khẩu không được vượt quá 72 byte UTF-8.',
    })
    return
  }

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail) ||
    typeof password !== 'string' ||
    password.length === 0
  ) {
    response.status(400).json({
      message: 'Vui lòng nhập email và mật khẩu.',
    })
    return
  }

  try {
    const [rows] = await pool.execute(
      'SELECT id, full_name, email, password_hash FROM users WHERE email = ? LIMIT 1',
      [normalizedEmail],
    )

    if (rows.length === 0) {
      response.status(401).json({ message: 'Email hoặc mật khẩu không đúng.' })
      return
    }

    const user = rows[0]
    const passwordMatches = await bcrypt.compare(password, user.password_hash)

    if (!passwordMatches) {
      response.status(401).json({ message: 'Email hoặc mật khẩu không đúng.' })
      return
    }

    const remember = request.body?.remember === true
    const maxAge = remember ? sessionMaxAgeMs : temporarySessionMaxAgeMs
    const sessionToken = randomBytes(32).toString('base64url')
    const tokenHash = createHash('sha256').update(sessionToken).digest('hex')
    const expiresAt = new Date(Date.now() + maxAge)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ')

    await pool.execute(
      'DELETE FROM user_sessions WHERE expires_at <= UTC_TIMESTAMP()',
    )
    await pool.execute(
      'INSERT INTO user_sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)',
      [tokenHash, user.id, expiresAt],
    )

    response.cookie(sessionCookieName, sessionToken, {
      ...sessionCookieOptions,
      ...(remember ? { maxAge: sessionMaxAgeMs } : {}),
    })
    response.json({
      message: 'Đăng nhập thành công.',
      user: { id: user.id, fullName: user.full_name, email: user.email },
    })
  } catch (error) {
    next(error)
  }
})

app.get('/api/me', authenticate, (_request, response) => {
  response.json({ user: response.locals.user })
})

app.post('/api/logout', async (request, response, next) => {
  const sessionToken = getSessionToken(request)
  try {
    if (sessionToken) {
      const tokenHash = createHash('sha256').update(sessionToken).digest('hex')
      await pool.execute('DELETE FROM user_sessions WHERE token_hash = ?', [tokenHash])
    }
    response.clearCookie(sessionCookieName, sessionCookieOptions)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

app.use((error, _request, response, _next) => {
  console.error('API request failed:', error)
  const status = error.status === 400 ? 400 : 500
  response.status(status).json({
    message: status === 400 ? 'Dữ liệu JSON không hợp lệ.' : 'Lỗi máy chủ.',
  })
})

const server = app.listen(port, () => {
  console.log(`Dừa Sáp API đang chạy tại http://localhost:${port}`)
})

const shutdown = async () => {
  server.close(async () => {
    await pool.end()
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
