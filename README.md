# Itsuki — personal portfolio

Portfolio của Tùng Trịnh, dùng Vite, React và TypeScript. Ngôn ngữ chính là tiếng Việt; giao diện editorial với bảng màu trung tính ấm, serif display và chuyển động có thể giảm theo lựa chọn của người xem.

## Chạy local

Yêu cầu Node.js `20.19+` trong nhánh 20 hoặc `22.12+`, npm.

```sh
npm ci
npm run dev
```

Vite chỉ lắng nghe trên loopback `127.0.0.1` theo mặc định. Mở URL được in trong terminal.

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Cập nhật nội dung

- `src/data/portfolio.ts`: danh tính, email, liên kết, dự án và các mảng chuyên môn.
- `src/App.tsx`: nội dung hero, giới thiệu, liên hệ và thứ tự các section.
- `src/styles.css`: design tokens, bố cục, responsive và motion.
- `public/images/`: hình dùng trong portfolio.
- `docs/design-direction.md`: nguyên tắc thiết kế và phạm vi bản đầu.
- `docs/content-sources.md`: nguồn nội dung, hình ảnh và các quyết định trước khi công khai.
- `docs/validation.md`: bằng chứng kiểm tra của bản triển khai.

Font Manrope và Lora được đóng gói từ Fontsource, gồm Latin, tiếng Việt và italic cho Lora. Trang không gọi dịch vụ font bên ngoài, không có backend, form thu thập dữ liệu hay analytics. Chỉ lưu lựa chọn giảm chuyển động trong `localStorage`.

## Hành vi

Điều hướng bằng anchor, tự đánh dấu khu vực đang đọc. Menu mobile hỗ trợ Escape, chọn một mục và bấm bên ngoài để đóng. Chi tiết dự án dùng phần tử HTML `details` để hỗ trợ bàn phím và cảm ứng. Email dùng `mailto:`; nút sao chép có thông báo thành công hoặc cách khắc phục khi Clipboard API bị chặn.

Chuyển động tôn trọng `prefers-reduced-motion`; lựa chọn ở footer có thể giảm thêm nhưng không ghi đè yêu cầu giảm chuyển động của hệ thống. Nội dung không phụ thuộc vào animation để hiển thị.

## Trước khi công khai

Xem lại email, tên hiển thị, câu chữ giới thiệu và quyền sử dụng hình đã kế thừa từ hồ sơ GitHub. Bổ sung URL chính thức cho canonical và ảnh Open Graph sau khi chọn tên miền. Chỉ thêm CV khi đã chọn bản cho phép công khai. Hình dự án Itsuki no Tabi hiện là bố cục mô tả nội dung, không phải ảnh chụp sản phẩm.

`base: './'` giữ tài nguyên tương đối cho bản dựng tĩnh. Kết quả build nằm ở `dist/`. Chưa cấu hình CI/CD hoặc đẩy bản dựng lên dịch vụ hosting; publish/deploy là công việc riêng cần người dùng yêu cầu.
