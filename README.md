# Donghua Video Studio

Hệ thống Web Studio tự động hóa sản xuất video hoạt hình / tiểu thuyết trọng sinh 2.5D Donghua phong cách retro 1994, tích hợp trình render video Remotion và giọng đọc AI đa nền tảng.

---

## 🌟 Tính Năng Nổi Bật

### 1. Trình Quản Lý Phân Cảnh (Scene Studio)
- Quản lý linh hoạt từng cảnh: tiêu đề, lời dẫn/phụ đề, prompt AI, thời lượng từng cảnh.
- Hỗ trợ đổi ảnh trực tiếp bằng cách click hoặc kéo thả (Drag & Drop).
- Hệ thống góc quay camera điện ảnh 2.5D:
  - `Push In` (Thu phóng tiến)
  - `Pedestal Up` (Nâng góc máy)
  - `Tracking Dolly` (Lia ngang điện ảnh)
  - `Orbital Pan` (Quay vòng quanh tâm)
  - `Macro Tilt` (Nghiêng macro cận cảnh)
  - `Lateral Slider`, `Crane Up`, `Slow Tracking`, `Dutch Angle`, `Zoom Out`...

### 2. Trình Phát Canvas 60 FPS Thời Gian Thực
- Xem trước video mượt mà không cần chờ render MP4.
- Tự động đồng bộ âm thanh đa lớp: Giọng đọc (Voiceover) + Nhạc nền (BGM).
- Tùy chỉnh bật/tắt thẻ tiêu đề góc phải, viền phụ đề bên dưới và thanh tiến trình.
- Hỗ trợ chuyển đổi nhanh giữa **16:9 (Ngang - YouTube)** và **9:16 (Dọc - TikTok/Reels/Shorts)**.

### 3. Tích Hợp Giọng Đọc AI (Text-to-Speech)
- **Microsoft Edge Neural TTS:**
  - `vi-VN-NamMinhNeural`: Giọng nam trầm ấm, đĩnh đạc, chuyên dẫn truyện tiên hiệp, đô thị, trọng sinh.
  - `vi-VN-HoaiMyNeural`: Giọng nữ truyền cảm, nhẹ nhàng.
  - **Miễn phí 100%, không giới hạn ký tự, không cần API Key.**
- **Google Gemini API:**
  - Hỗ trợ kết nối trực tiếp với Google AI Studio qua API Key cá nhân.
  - Tự động lưu key vào file `.env` và trình duyệt, có nút kiểm tra kết nối (ping test) thời gian thực.
  - Tự động ghép nối toàn bộ lời dẫn các cảnh thành file âm thanh hoàn chỉnh chỉ với 1 click.

### 4. Công Cụ Xuất Video Remotion Engine
- Render video MP4 chuẩn codec H.264, âm thanh AAC, tốc độ khung hình 30fps.
- Thanh tiến trình hiển thị phần trăm và nhật ký (logs) render trực tiếp trên web.
- Tự động lưu video vào thư mục `out/` và cung cấp nút xem/tải về máy ngay lập tức.

---

## 🚀 Hướng Dẫn Sử Dụng

### Khởi động Web Studio
Chạy lệnh sau trên terminal:
```bash
npm start
```
Hoặc:
```bash
node server.js
```

Mở trình duyệt và truy cập: **`http://localhost:3001`**

### Các Lệnh Render CLI Bổ Trợ
- **Mở Remotion Studio độc lập:**
  ```bash
  npm run remotion
  ```
- **Xuất video 16:9 ngang bằng dòng lệnh:**
  ```bash
  npm run render
  ```
- **Xuất video 9:16 dọc bằng dòng lệnh:**
  ```bash
  npm run render:vertical
  ```

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
Picket-Social-Studio/
├── src/
│   ├── Root.tsx              # Cấu hình Remotion compositions (16:9 & 9:16)
│   ├── TruongKhacVideo.tsx   # Component chính render video MP4 (KHÔNG XÓA)
│   └── index.ts              # Entry point đăng ký Remotion Root
├── public/
│   ├── index.html            # Giao diện Web Studio chính
│   ├── style.css             # Giao diện Dark Mode điện ảnh cao cấp
│   ├── app.js                # Bộ điều khiển Studio, Player và API calls
│   ├── truong-khac/          # 15 ảnh mẫu nhân vật & bối cảnh 1994
│   ├── uploads/              # Nơi lưu file audio, video, ảnh người dùng tải lên
│   └── project-config.json   # Cấu hình dự án đang làm việc
├── out/                      # Thư mục chứa các file video MP4 đã xuất
├── server.js                 # Máy chủ Express xử lý render, uploads, TTS & API
├── .env                      # Lưu trữ Gemini API Key và biến môi trường
└── package.json              # Khai báo thư viện và script
```

---

## ⚠️ Lưu Ý Quan Trọng Về Các Tệp Tin

1. **`src/TruongKhacVideo.tsx`:** **TUYỆT ĐỐI KHÔNG XÓA.** Đây là component cốt lõi để Remotion vẽ từng khung hình khi xuất video MP4.
2. **`public/truong-khac/`:** Chứa 15 hình ảnh mẫu mặc định của Trương Khác. Nếu xóa, giao diện sẽ mất ảnh demo ban đầu.
3. **`public/uploads/`:** Thư mục lưu trữ file audio giọng đọc AI và ảnh tải lên. **Không xóa thư mục**, nhưng bạn có thể xóa các file test bên trong nếu muốn dọn dẹp dung lượng.
