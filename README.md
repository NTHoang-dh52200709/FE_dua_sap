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

## Tài liệu

## Triển khai tự động bằng Vercel

1. Đăng nhập Vercel bằng GitHub, chọn **Add New → Project** và import repository `NTHoang-dh52200709/FE_dua_sap`.
2. Dùng tên project `fe-dua-sap`, framework **Vite**, Root Directory **./** (thư mục gốc repository).
3. Install Command: `npm ci`; Build Command: `npm run build`; Output Directory: `dist`. Cấu hình này có sẵn trong `vercel.json`.
4. Chọn Node.js **22.x** và nhấn **Deploy**. Dự án hiện tại không yêu cầu biến môi trường.
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
