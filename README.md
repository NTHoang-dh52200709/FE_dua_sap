# FE_dua_sap

Website giới thiệu dừa sáp Trà Vinh, xây dựng bằng React và Vite.

## Nội dung

- Đặc điểm dừa sáp, vùng trồng và lịch sử phát triển.
- Khoa học, người nông dân và chỉ dẫn địa lý.
- Món ăn với gợi ý cách làm và video YouTube tham khảo.
- Các nhóm sản phẩm chế biến từ dừa sáp.

## Chạy trên máy

Cài Node.js tương thích với phiên bản Vite trong `package.json`, sau đó chạy:

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Bản build nằm trong `dist/`. Khi triển khai, cấu hình hosting chuyển các đường dẫn của React Router về `index.html`.

## Backend tài khoản

Backend Node.js + Express nằm trong `backend/`. Các API tài khoản:

- `POST http://localhost:3000/api/register`
- `POST http://localhost:3000/api/login`
- `GET http://localhost:3000/api/me` để khôi phục phiên đăng nhập
- `POST http://localhost:3000/api/logout` để thu hồi phiên đăng nhập
- `GET http://localhost:3000/api/health` để kiểm tra trạng thái API và kết nối MySQL

Để chạy trên máy:

1. Tạo cluster MySQL tương thích miễn phí trên TiDB Cloud Starter tại `https://tidbcloud.com/`.
2. Trong TiDB SQL Editor, chạy nội dung `backend/database.sql` để tạo database và hai bảng tài khoản.
3. Chạy `Copy-Item backend\.env.example backend\.env`, rồi tự điền các giá trị kết nối TiDB được cung cấp trong phần **Connect**. Giữ `DB_SSL=true`, `DB_PORT=4000` và không gửi hoặc commit file `.env`.
4. Với frontend/backend đặt ở các domain khác nhau, đặt `COOKIE_SAME_SITE=none`, bật HTTPS và cấu hình `FRONTEND_ORIGIN` thành domain frontend chính xác, phân tách nhiều domain bằng dấu phẩy.
5. Kiểm tra kết nối và khởi động backend:

```sh
cd backend
npm install
npm run check-cloud
npm run dev
```

Mật khẩu được băm trước khi lưu. Phiên đăng nhập dùng cookie `HttpOnly`, token ngẫu nhiên chỉ lưu dạng băm trong MySQL/TiDB. “Ghi nhớ đăng nhập” giữ cookie tối đa 30 ngày; nếu bỏ chọn, cookie chỉ tồn tại trong phiên trình duyệt và phía máy chủ hết hạn sau 12 giờ.

TiDB Cloud Starter có quota miễn phí theo sử dụng; giới hạn và điều kiện có thể thay đổi, hãy kiểm tra giá hiện hành trên TiDB Cloud. Không commit hoặc gửi file `.env`.

## Tài liệu

## Triển khai tự động bằng Vercel

1. Đăng nhập Vercel bằng GitHub, chọn **Add New → Project** và import repository `NTHoang-dh52200709/FE_dua_sap`.
2. Dùng tên project `fe-dua-sap`, framework **Vite**, Root Directory **./** (thư mục gốc repository).
3. Install Command: `npm ci`; Build Command: `npm run build`; Output Directory: `dist`. Cấu hình này có sẵn trong `vercel.json`.
4. Chọn Node.js **22.x** và nhấn **Deploy**. Để dùng tính năng tài khoản, triển khai backend Express riêng, cấu hình các biến môi trường backend và `VITE_API_URL` trỏ đến API đó trước khi build frontend. Cấu hình `FRONTEND_ORIGIN` với domain frontend chính xác. Nếu frontend/API ở hai site khác nhau, cookie cần `COOKIE_SAME_SITE=none` và HTTPS; một số trình duyệt có thể chặn cookie bên thứ ba, nên ưu tiên đặt API và frontend dưới cùng một site.
5. Kiểm tra Production Branch là `main`. Sau khi liên kết GitHub, mỗi lần push vào `main` sẽ kích hoạt build và triển khai production; các nhánh khác tạo bản preview theo cấu hình Vercel.

`vercel.json` có rewrite về `index.html` để các đường dẫn của React Router hoạt động khi mở trực tiếp hoặc tải lại trang. Xem [Vite trên Vercel](https://vercel.com/docs/frameworks/frontend/vite) và [tích hợp Git](https://vercel.com/docs/git).

Ví dụ cập nhật website từ thư mục dự án:

```sh
git add .
git commit -m "Update website content"
git push origin main
```

Vào mục **Deployments** trên Vercel để xem tiến trình và Build Logs khi triển khai thất bại.

## Nguồn nội dung

Nguồn biên tập được ghi trong [CONTENT_SOURCES.md](CONTENT_SOURCES.md). Các công thức trên website là gợi ý tham khảo; ghi chú của từng món phân biệt công thức biên soạn với video liên quan.

Hình ảnh và video tham khảo thuộc các chủ sở hữu tương ứng.

`node_modules/`, `dist/`, ảnh chụp kiểm tra trong `artifacts/` và cấu hình `.env` không được đưa vào Git.
