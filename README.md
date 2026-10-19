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

Nguồn biên tập được ghi trong [CONTENT_SOURCES.md](CONTENT_SOURCES.md). Các công thức trên website là gợi ý tham khảo; ghi chú của từng món phân biệt công thức biên soạn với video liên quan.

Hình ảnh và video tham khảo thuộc các chủ sở hữu tương ứng.

`node_modules/`, `dist/`, ảnh chụp kiểm tra trong `artifacts/` và cấu hình `.env` không được đưa vào Git.
