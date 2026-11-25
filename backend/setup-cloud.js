import 'dotenv/config'
import { readFileSync } from 'node:fs'
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
  console.error(`Không thể khởi tạo TiDB: ${problems.join(', ')}. Hãy cập nhật backend/.env.`)
  process.exit(1)
}

let connection
try {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 4000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL === 'true' ? { minVersion: 'TLSv1.2' } : undefined,
    connectTimeout: 15000,
    multipleStatements: true,
  })

  const sql = readFileSync(new URL('./database.sql', import.meta.url), 'utf8')
  await connection.query(sql)
  console.log(`Đã tạo/kiểm tra database và bảng trong TiDB: ${process.env.DB_NAME}`)
} catch (error) {
  const code = error.code || 'UNKNOWN'
  console.error(
    `Khởi tạo TiDB thất bại (${code}). Hãy kiểm tra DB_HOST, thông tin đăng nhập, cổng và DB_SSL trong backend/.env.`,
  )
  process.exitCode = 1
} finally {
  if (connection) await connection.end()
}
