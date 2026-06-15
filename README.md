# Pre-interview_test
Frontend technical test

Giải thích ngắn gọn logic Play/Pause khi cuộn trang (sử dụng IntersectionObserver API):
- Tạo một object cấu hình (videoRule) để quy định điều kiện theo dõi video. Trong đó, threshold: 0.7 nghĩa là khi ít nhất 70% video xuất hiện trong viewport thì video sẽ được coi là đang hiển thị
- Tạo một IntersectionObserver để theo dõi trạng thái hiển thị của video. Khi trạng thái thay đổi, trình duyệt sẽ gọi callback và trả về một mảng
- Vì mỗi VideoCard chỉ theo dõi một video nên chỉ cần lấy phần tử đầu tiên của mảng (videoList[0]) để lấy thông tin của video hiện tại
- Kiểm tra thuộc tính isIntersecting của video:
    + Nếu video đang nằm trong viewport (isIntersecting = true) thì gọi play()
    + Nếu video không còn nằm trong viewport (isIntersecting = false) thì gọi pause()
- Khi component bị huỷ hoặc không còn cần theo dõi video nữa, gọi unobserve() để dừng việc quan sát video giúp tránh memory leak
