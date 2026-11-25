import 'dotenv/config'
import mysql from 'mysql2/promise'

const requiredSettings = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME']
const missingSettings = requiredSettings.filter((setting) => !process.env[setting])
const placeholderSettings = requiredSettings.filter((setting) => {
  const value = process.env[setting]?.trim()
  return value?.startsWith('<') && value.endsWith('>')
})

if (missingSettings.length > 0 || placeholderSettings.length > 0) {
  const problems = [
    ...missingSettings.map((setting) => `${setting} chưa được đặt`),
    ...placeholderSettings.map((setting) => `${setting} vẫn là giá trị mẫu`),
  ]
  console.error(`Không thể kiểm tra TiDB: ${problems.join(', ')}. Hãy cập nhật backend/.env.`)
  process.exit(1)
}

let connection
try {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 4000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.DB_SSL === 'true' ? { minVersion: 'TLSv1.2' } : undefined,
    connectTimeout: 15000,
  })

  const [databaseRows] = await connection.query('SELECT DATABASE() AS database_name')
  const [tableRows] = await connection.query(
    `SELECT table_name
     FROM information_schema.tables
     WHERE table_schema = ? AND table_name IN ('users', 'user_sessions')
     ORDER BY table_name`,
    [process.env.DB_NAME],
  )

  console.log(`Kết nối TiDB thành công: ${databaseRows[0]?.database_name || process.env.DB_NAME}`)
  console.log(`Bảng đã thấy: ${tableRows.map((row) => row.table_name).join(', ') || 'chưa có'}`)
  if (tableRows.length !== 2) {
    console.log('Chạy npm run setup-cloud trong thư mục backend để tạo/chỉnh bảng.')
  }
} catch (error) {
  const code = error.code || 'UNKNOWN'
  console.error(
    `Kết nối TiDB thất bại (${code}). Hãy kiểm tra DB_HOST, thông tin đăng nhập, cổng và DB_SSL trong backend/.env.`,
  )
  process.exitCode = 1
} finally {
  if (connection) await connection.end()
}
