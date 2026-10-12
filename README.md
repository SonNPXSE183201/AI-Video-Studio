# AI Video Studio · Donghua Studio

Hệ thống Web Studio tự động hóa sản xuất video hoạt hình / tiểu thuyết trọng sinh 2.5D Donghua phong cách retro 1994, tích hợp trình render video Remotion, giọng đọc AI đa nền tảng và thiết kế chuẩn **Google Material Design 3 (M3)**.

---

## 🌟 Tính Năng Nổi Bật

### 1. Trình Quản Lý Phân Cảnh (Scene Studio)
- **Quản lý linh hoạt:** Chỉnh sửa tiêu đề, lời dẫn/kịch bản thoại, prompt AI, thời lượng từng cảnh (`durationSeconds`).
- **Modal biên tập chuyên sâu:** Click vào phân cảnh để mở modal chỉnh sửa chi tiết, hỗ trợ xem trước hình ảnh và tùy chỉnh tham số mượt mà.
- **Đổi ảnh nhanh:** Hỗ trợ click chọn file hoặc kéo thả (Drag & Drop) trực tiếp lên thẻ cảnh.
- **Hệ thống chuyển động camera điện ảnh 2.5D:**
  - `Push In` (Thu phóng tiến)
  - `Pedestal Up` (Nâng góc máy)
  - `Tracking Dolly` (Lia ngang điện ảnh)
  - `Orbital Pan` (Quay vòng quanh tâm)
  - `Macro Tilt` (Nghiêng macro cận cảnh)
  - `Lateral Slider`, `Crane Up`, `Slow Tracking`, `Dutch Angle`, `Zoom Out`...

### 2. Trình Phát Canvas 60 FPS & Phụ Đề Chạy Theo Thời Gian (Timed Subtitles)
- **Xem trước thời gian thực:** Phát video mượt mà không cần chờ render file MP4.
- **Phụ đề động (Dynamic Timed Subtitles):**
  - Tự động phân đoạn câu văn dài thành các cụm từ tự nhiên theo nhịp đọc (7–9 từ).
  - Chỉ hiển thị duy nhất cụm từ đang đọc tương ứng với thời gian chạy hiện tại của cảnh.
  - Thiết kế dạng badge viên thuốc thủy tinh mờ (Glassmorphism Pill) căn giữa phía dưới, nhỏ gọn, sang trọng, không che lấp nhân vật hay khung hình.
- **Âm thanh đa tầng:** Hòa trộn đồng thời giọng đọc (Voiceover) và nhạc nền (BGM) với thanh điều chỉnh âm lượng riêng biệt.
- **Chuyển đổi tỷ lệ khung hình:** Linh hoạt giữa **16:9 (Ngang - YouTube/TV)** và **9:16 (Dọc - TikTok/Reels/Shorts)**.

### 3. Tích Hợp Giọng Đọc AI & Tự Động Khớp Thời Lượng Cảnh (Audio Sync)
- **Tự động đo và khớp thời lượng cảnh (Auto Scene Duration Sync):**
  - Khi tạo giọng đọc TTS theo kịch bản các cảnh, server sử dụng `ffprobe` đo chính xác độ dài từng câu thoại, thêm 0.4s khoảng lặng tự nhiên giữa các cảnh và tự động cập nhật lại thời lượng (`durationSeconds`) của từng cảnh.
  - Phân cảnh và giọng đọc khớp nhau 100%, không bị tình trạng đọc chưa xong đã chuyển cảnh hoặc cảnh đứng yên chờ tiếng.
- **Nút thủ công "Khớp Thời Lượng Cảnh Theo Audio":** Hỗ trợ tự động chia tỷ lệ thời gian các cảnh theo bất kỳ file audio nào người dùng tải lên.
- **Đa nền tảng giọng đọc:**
  - **Microsoft Edge Neural TTS:** `vi-VN-NamMinhNeural` (giọng nam trầm ấm, chuyên đọc truyện) và `vi-VN-HoaiMyNeural` (giọng nữ nhẹ nhàng). Hoàn toàn miễn phí, không giới hạn.
  - **Google Gemini API:** Hỗ trợ kết nối qua Google AI Studio API Key cá nhân (Aoede, Charon, Fenrir, Kore, Puck).

### 4. Thiết Kế Chuẩn Google Material Design 3 (M3)
- Giao diện Dark Theme hiện đại, đồng bộ màu sắc thương hiệu (Onyx Black, Amber Gold, Cobalt Blue).
- Các trường nhập liệu (Inputs), nút bấm (Buttons), Dropdowns và Modals tuân thủ nghiêm ngặt tiêu chuẩn thiết kế M3 (Tokens, Shapes, Elevation, Motion).
- **Bộ nhận diện Logo 8K UHD:** Biểu tượng kết hợp giữa vòng khẩu độ máy quay, nút Play 3D và mạng nơ-ron AI.

### 5. Công Cụ Xuất Video Remotion Engine (MP4 H.264)
- Render video MP4 chất lượng cao chuẩn codec H.264, âm thanh AAC, tốc độ 30fps.
- Đồng bộ toàn bộ hiệu ứng chuyển động, phụ đề nhịp đọc và âm thanh giống 100% bản xem trước trên Web.
- Hiển thị tiến trình render và nhật ký (logs) thời gian thực trên giao diện.

---

## 🚀 Hướng Dẫn Sử Dụng

### 1. Cài đặt thư viện
```bash
npm install
```

### 2. Khởi động Web Studio
Chạy lệnh:
```bash
npm start
```
Hoặc:
```bash
node server.js
```
Mở trình duyệt và truy cập: **`http://localhost:3001`**

### 3. Các Lệnh Render CLI Bổ Trợ
- **Mở Remotion Studio độc lập:**
  ```bash
  npm run remotion
  ```
- **Kiểm tra cú pháp & TypeScript:**
  ```bash
  npm run typecheck
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
│   ├── index.html            # Giao diện Web Studio chính (chuẩn M3)
│   ├── style.css             # Hệ thống thiết kế CSS Dark Theme M3
│   ├── app.js                # Bộ điều khiển Studio, Player, TTS & Subtitles
│   ├── logo.jpg              # Logo chính thức 8K UHD của dự án
│   ├── truong-khac/          # 15 ảnh mẫu nhân vật & bối cảnh 1994 mặc định
│   ├── uploads/              # Thư mục lưu audio giọng đọc và file tải lên
│   ├── project-config.json   # Cấu hình dự án và danh sách phân cảnh
│   └── README.md             # Hướng dẫn chi tiết về thư mục public
├── out/                      # Thư mục chứa các file video MP4 đã xuất
├── server.js                 # Máy chủ Express xử lý render, uploads, TTS & API
├── .env                      # Lưu trữ Gemini API Key và cấu hình môi trường
└── package.json              # Khai báo dependencies và scripts
```

---

## ⚠️ Lưu Ý Quan Trọng Về Các Tệp Tin

1. **`src/TruongKhacVideo.tsx`:** **TUYỆT ĐỐI KHÔNG XÓA.** Đây là component cốt lõi để Remotion vẽ từng khung hình khi render video MP4.
2. **`public/truong-khac/`:** Chứa 15 hình ảnh mẫu mặc định của Trương Khác. Không xóa để đảm bảo dự án luôn có dữ liệu demo hiển thị.
3. **`public/uploads/`:** Thư mục lưu trữ tự động các file audio giọng đọc AI và ảnh tải lên. **Không xóa thư mục**, có thể dọn dẹp các file `.mp3` cũ bên trong nếu muốn giải phóng dung lượng.
4. **`public/logo.jpg`:** Logo chính thức của studio, được nhúng vào header và favicon trình duyệt.
