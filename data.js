const questionBank = [
  {
    "id": 1,
    "question": "Khi lên hoặc xuống cabin xe nâng, người lái xe cần thực hiện như thế nào cho đúng?",
    "options": [
      "Nhảy nhanh lên cabin để tiết kiệm thời gian.",
      "Bám vô lăng để leo lên.",
      "Tay trái nắm tay vịn, tay phải bám vào tựa lưng ghế, bước từng bậc lên xuống.",
      "Đặt chân lên càng nâng để leo lên."
    ],
    "answer": "Tay trái nắm tay vịn, tay phải bám vào tựa lưng ghế, bước từng bậc lên xuống.",
    "explain": "Khi lên xuống cabin, phải giữ 3 điểm tiếp xúc (tay và chân), không được nhảy hay bám vào vô lăng để tránh trượt ngã hoặc gãy cơ cấu điều khiển."
  },
  {
    "id": 2,
    "question": "Trước khi đưa xe nâng vào hoạt động, người lái cần làm gì?",
    "options": [
      "Khởi động máy để nghe tiếng động cơ.",
      "Kiểm tra và bảo dưỡng hàng ngày, đảm bảo xe đạt tình trạng kỹ thuật tốt.",
      "Thử nâng hàng để kiểm tra tải trọng.",
      "Đổ thêm nhiên liệu trước khi chạy."
    ],
    "answer": "Kiểm tra và bảo dưỡng hàng ngày, đảm bảo xe đạt tình trạng kỹ thuật tốt.",
    "explain": "Kiểm tra kỹ thuật xe trước khi vận hành giúp phát hiện sự cố sớm."
  },
  {
    "id": 3,
    "question": "Khi khởi động xe nâng, cần kiểm tra gì trước?",
    "options": [
      "Phanh tay đã kéo chắc chắn.",
      "Càng nâng đang ở vị trí thấp nhất",
      "Cần tiến/lùi ở vị trí trung gian",
      "Tất cả các ý trên"
    ],
    "answer": "Tất cả các ý trên",
    "explain": "Phải đảm bảo an toàn tuyệt đối trước khi khởi động động cơ."
  },
  {
    "id": 4,
    "question": "Khi cho xe nâng di chuyển, cần kiểm tra gì trước?",
    "options": [
      "Phanh, ly hợp, hoạt động của càng nâng.",
      "Mức dầu",
      "Áp suất lốp",
      "Mức nước làm mát."
    ],
    "answer": "Phanh, ly hợp, hoạt động của càng nâng.",
    "explain": "Kiểm tra kỹ thuật xe trước khi vận hành giúp phát hiện sự cố sớm."
  },
  {
    "id": 5,
    "question": "Khi dừng xe, thao tác nào là đúng?",
    "options": [
      "Dừng đột ngột.",
      "Giữ càng ở vị trí trung gian.",
      "Hạ càng sát đất, nghiêng nhẹ về trước và tắt máy.",
      "Giữ càng cách đất 20 cm."
    ],
    "answer": "Hạ càng sát đất, nghiêng nhẹ về trước và tắt máy.",
    "explain": "Đảm bảo xe ổn định và tránh trượt hàng."
  },
  {
    "id": 6,
    "question": "Khi xe chạy trên đường dốc có hàng, hướng di chuyển nào đúng?",
    "options": [
      "Đi tiến khi lên dốc, lùi khi xuống dốc.",
      "Lùi khi lên dốc, tiến khi xuống dốc.",
      "Đi chéo theo dốc.",
      "Giữ càng ngang mặt đất."
    ],
    "answer": "Đi tiến khi lên dốc, lùi khi xuống dốc.",
    "explain": "Giữ hàng ở phía cao hơn để tránh trượt khỏi càng nâng."
  },
  {
    "id": 7,
    "question": "Khi dừng xe trên dốc cần làm gì?",
    "options": [
      "Giữ nguyên số.",
      "Kéo phanh tay, hạ càng chạm đất.",
      "Tắt máy và để số tự do.",
      "Để hàng trên cao."
    ],
    "answer": "Kéo phanh tay, hạ càng chạm đất.",
    "explain": "Giúp xe không trôi và hàng không đổ."
  },
  {
    "id": 8,
    "question": "Khi đổi số, người lái cần thực hiện thao tác nào đúng?",
    "options": [
      "Nhấn ga và chuyển số cùng lúc.",
      "Nhả ga, đạp ly hợp, chuyển số nhẹ nhàng.",
      "Vào số trực tiếp.",
      "Về mo khi đổi số."
    ],
    "answer": "Nhả ga, đạp ly hợp, chuyển số nhẹ nhàng.",
    "explain": "Giúp hộp số bền và tránh sốc cơ khí."
  },
  {
    "id": 9,
    "question": "Khi vận hành, tay trái người lái thường giữ gì?",
    "options": [
      "Tay ga.",
      "Vô lăng.",
      "Cần nâng.",
      "Cần số."
    ],
    "answer": "Vô lăng.",
    "explain": "Tay trái giữ vô lăng, tay phải điều khiển cần nâng/hạ."
  },
  {
    "id": 10,
    "question": "Khi dừng xe đột ngột sẽ gây hậu quả gì?",
    "options": [
      "Xe ổn định hơn.",
      "Hàng hóa dễ bị đổ hoặc xe bị lật.",
      "Tiết kiệm thời gian.",
      "Không ảnh hưởng."
    ],
    "answer": "Hàng hóa dễ bị đổ hoặc xe bị lật.",
    "explain": "Quán tính hàng hóa có thể làm xe mất cân bằng."
  },
  {
    "id": 11,
    "question": "Khi lái xe phải luôn giữ càng cách mặt đất khoảng bao nhiêu cm?",
    "options": [
      "5 cm",
      "10 cm",
      "15–20 cm",
      "30 cm"
    ],
    "answer": "15–20 cm",
    "explain": "Giữ càng vừa đủ để tránh cản vật và giữ thăng bằng."
  },
  {
    "id": 12,
    "question": "Khi xe bị chết máy trên dốc, cần làm gì trước tiên?",
    "options": [
      "Nhả phanh.",
      "Kéo phanh tay, hạ càng, cài số trung gian.",
      "Tăng ga.",
      "Khởi động lại ngay."
    ],
    "answer": "Kéo phanh tay, hạ càng, cài số trung gian.",
    "explain": "Đảm bảo xe không trôi trước khi xử lý sự cố."
  },
  {
    "id": 13,
    "question": "Khi lùi xe cần quan sát như thế nào?",
    "options": [
      "Dựa vào gương chiếu hậu.",
      "Nhìn thẳng.",
      "Quay đầu nhìn hướng xe di chuyển.",
      "Nhờ người khác báo hiệu."
    ],
    "answer": "Quay đầu nhìn hướng xe di chuyển.",
    "explain": "Quan sát trực tiếp giúp đảm bảo an toàn hơn so với gương."
  },
  {
    "id": 14,
    "question": "Người vận hành xe nâng cần có điều kiện nào?",
    "options": [
      "Có sức khỏe tốt, được đào tạo và cấp chứng chỉ.",
      "Chỉ cần biết lái xe.",
      "Là nhân viên kho.",
      "Không cần điều kiện."
    ],
    "answer": "Có sức khỏe tốt, được đào tạo và cấp chứng chỉ.",
    "explain": "Theo quy định, người lái phải qua đào tạo an toàn và có chứng chỉ hợp lệ."
  },
  {
    "id": 15,
    "question": "Khi đổ nhiên liệu cần?",
    "options": [
      "Để máy chạy.",
      "Tắt máy, không hút thuốc.",
      "Đứng gần khu vực kín gió.",
      "Dùng lửa để soi."
    ],
    "answer": "Tắt máy, không hút thuốc.",
    "explain": "Phải tắt máy và tránh nguồn lửa để phòng cháy nổ."
  },
  {
    "id": 16,
    "question": "Không được để người khác đứng ở đâu khi xe đang hoạt động?",
    "options": [
      "Trong cabin.",
      "Trên càng hoặc gần xe.",
      "Phía sau xe.",
      "Tất cả các vị trí trên."
    ],
    "answer": "Tất cả các vị trí trên.",
    "explain": "Xe nâng chỉ cho phép người vận hành ngồi trong cabin."
  },
  {
    "id": 17,
    "question": "Khi bảo dưỡng hoặc sửa chữa xe, cần?",
    "options": [
      "Để máy chạy.",
      "Tắt máy, kê kích chắc chắn.",
      "Nâng càng lên cao.",
      "Cho xe hoạt động nhẹ."
    ],
    "answer": "Tắt máy, kê kích chắc chắn.",
    "explain": "Đảm bảo an toàn cho thợ bảo dưỡng."
  },
  {
    "id": 18,
    "question": "Khi khởi động động cơ, cần ở vị trí nào?",
    "options": [
      "Ngoài cabin.",
      "Trong cabin, tư thế sẵn sàng.",
      "Đứng cạnh xe.",
      "Ở phía sau xe."
    ],
    "answer": "Trong cabin, tư thế sẵn sàng.",
    "explain": "Phải ngồi đúng vị trí lái khi khởi động để kiểm soát tình huống."
  },
  {
    "id": 19,
    "question": "Không được điều chỉnh ghế khi nào?",
    "options": [
      "Xe đang di chuyển.",
      "Xe đang dừng.",
      "Trước khi khởi động.",
      "Khi thay ca."
    ],
    "answer": "Xe đang di chuyển.",
    "explain": "Tránh mất kiểm soát tay lái khi đang vận hành."
  },
  {
    "id": 20,
    "question": "Không được cho xe hoạt động ở đâu?",
    "options": [
      "Nơi có đủ ánh sáng.",
      "Khu vực kín, thiếu sáng, dễ cháy.",
      "Kho hàng rộng rãi.",
      "Sân bê tông."
    ],
    "answer": "Khu vực kín, thiếu sáng, dễ cháy.",
    "explain": "Môi trường kín dễ tích khí độc và nguy cơ cháy nổ cao."
  },
  {
    "id": 21,
    "question": "Khi nâng một kiện hàng không đồng nhất về khối lượng, phần nặng hơn nên được đặt ở đâu?",
    "options": [
      "Ở phía đầu càng nâng",
      "Ở bên trái hoặc bên phải",
      "Càng gần giá đỡ hàng (phía trong) càng tốt",
      "Đặt ở giữa kiện hàng"
    ],
    "answer": "Càng gần giá đỡ hàng (phía trong) càng tốt",
    "explain": "Đặt phần nặng hơn của tải càng gần giá đỡ càng tốt sẽ giúp tâm tải gần với xe hơn, làm tăng sự ổn định."
  },
  {
    "id": 22,
    "question": "Khi di chuyển với càng nâng không có tải, độ cao an toàn của càng so với mặt đất là bao nhiêu?",
    "options": [
      "Càng cao càng tốt",
      "Khoảng 15-20 cm",
      "Chạm đất",
      "Cao ngang tầm mắt"
    ],
    "answer": "Khoảng 15-20 cm",
    "explain": "Nâng càng cách mặt đất khoảng 15-20 cm giúp tránh vấp phải các chướng ngại vật nhỏ trên sàn mà vẫn giữ được trọng tâm xe ở mức thấp và ổn định."
  },
  {
    "id": 23,
    "question": "Đâu là cách an toàn nhất để đi qua đường ray xe lửa hoặc các gờ giảm tốc cao?",
    "options": [
      "Đi với tốc độ cao để vượt qua nhanh",
      "Đi chéo một góc và di chuyển rất chậm",
      "Dừng lại và dùng xe khác để đưa hàng qua",
      "Nâng càng lên thật cao"
    ],
    "answer": "Đi chéo một góc và di chuyển rất chậm",
    "explain": "Đi chéo một góc giúp từng bánh xe vượt qua chướng ngại vật một cách từ từ, giảm xóc và tránh nguy cơ kẹt gầm hoặc rơi hàng."
  },
  {
    "id": 24,
    "question": "Trong trường hợp xe nâng bị lật, người điều khiển nên làm gì?",
    "options": [
      "Nhảy khỏi xe ngay",
      "Giữ chắc vô lăng, nghiêng người ngược hướng lật",
      "Thoát ra bằng cửa phụ",
      "Nằm xuống sàn xe"
    ],
    "answer": "Giữ chắc vô lăng, nghiêng người ngược hướng lật",
    "explain": "Tuyệt đối không nhảy khỏi xe. Phải giữ chặt vô lăng, gồng chắc chân và nghiêng người ngược với hướng lật để khung bảo vệ che chắn cho bạn."
  },
  {
    "id": 25,
    "question": "Khi thấy đèn báo nhiệt độ nước làm mát động cơ ở vạch đỏ, cần làm gì?",
    "options": [
      "Tiếp tục chạy cho đến cuối ca",
      "Dừng xe ở nơi an toàn, để động cơ chạy không tải cho nguội dần rồi tắt máy",
      "Tắt máy ngay lập tức",
      "Đổ thêm nước lạnh vào ngay"
    ],
    "answer": "Dừng xe ở nơi an toàn, để động cơ chạy không tải cho nguội dần rồi tắt máy",
    "explain": "Tắt máy đột ngột khi động cơ quá nóng có thể gây hư hỏng nặng. Cần để máy chạy không tải cho nhiệt độ giảm dần rồi mới tắt."
  },
  {
    "id": 26,
    "question": "Tại sao không nên quay đầu xe hoặc đi ngang trên dốc?",
    "options": [
      "Vì làm mòn lốp nhanh",
      "Vì làm tăng nguy cơ lật xe nghiêm trọng",
      "Vì sẽ vi phạm luật giao thông",
      "Vì làm hỏng động cơ"
    ],
    "answer": "Vì làm tăng nguy cơ lật xe nghiêm trọng",
    "explain": "Khi ở trên dốc, trọng tâm của xe bị lệch. Việc quay đầu hoặc đi ngang sẽ làm trọng tâm dễ dàng vượt ra ngoài \"tam giác ổn định\" của xe, gây nguy cơ lật xe rất cao."
  },
  {
    "id": 27,
    "question": "Nếu xe nâng được trang bị bình chữa cháy, người vận hành cần phải làm gì?",
    "options": [
      "Không cần quan tâm đến nó",
      "Biết vị trí và cách sử dụng bình chữa cháy",
      "Tháo nó ra để xe nhẹ hơn",
      "Chỉ kỹ thuật viên mới được dùng"
    ],
    "answer": "Biết vị trí và cách sử dụng bình chữa cháy",
    "explain": "Người vận hành phải biết bình chữa cháy được đặt ở đâu, tình trạng của nó và cách sử dụng cơ bản trong trường hợp khẩn cấp."
  },
  {
    "id": 28,
    "question": "Xe nâng dùng để làm gì?",
    "options": [
      "Dùng trong xây dựng nhà cao tầng",
      "Làm mát kho lạnh",
      "Nâng hạ và di chuyển hàng hóa",
      "Tạo điện cho nhà xưởng"
    ],
    "answer": "Nâng hạ và di chuyển hàng hóa",
    "explain": "Xe nâng là thiết bị chuyên dùng để nâng, hạ và vận chuyển hàng hóa trong kho, bãi, nhà máy."
  },
  {
    "id": 29,
    "question": "Khi sạc ắc quy cho xe nâng điện, tại sao phải thực hiện ở nơi thông thoáng?",
    "options": [
      "Để xe nguội nhanh hơn",
      "Vì quá trình sạc sinh ra khí Hydro dễ cháy nổ",
      "Để dễ dàng quan sát quá trình sạc",
      "Để tránh bụi bẩn"
    ],
    "answer": "Vì quá trình sạc sinh ra khí Hydro dễ cháy nổ",
    "explain": "Quá trình sạc sinh ra khí Hydro, một loại khí rất dễ cháy nổ. Việc sạc ở nơi thông thoáng giúp khí này khuếch tán, giảm nguy cơ cháy nổ."
  },
  {
    "id": 30,
    "question": "Việc lắp các phụ kiện như kẹp giấy, gầu xúc... ảnh hưởng thế nào đến tải trọng nâng của xe?",
    "options": [
      "Tăng tải trọng nâng",
      "Không ảnh hưởng",
      "Làm giảm tải trọng nâng cho phép của xe",
      "Chỉ ảnh hưởng đến tốc độ"
    ],
    "answer": "Làm giảm tải trọng nâng cho phép của xe",
    "explain": "Phụ kiện có trọng lượng riêng và làm thay đổi tâm tải của xe, do đó tải trọng nâng thực tế của xe sẽ bị giảm đi so với khi dùng càng nâng tiêu chuẩn."
  },
  {
    "id": 31,
    "question": "Tác dụng của bầu lọc nhiên liệu là gì?",
    "options": [
      "Giúp nhiên liệu có màu đẹp hơn",
      "Loại bỏ cặn bẩn và nước ra khỏi nhiên liệu trước khi vào động cơ",
      "Tăng hiệu suất đốt cháy",
      "Giúp tiết kiệm nhiên liệu"
    ],
    "answer": "Loại bỏ cặn bẩn và nước ra khỏi nhiên liệu trước khi vào động cơ",
    "explain": "Lọc nhiên liệu có nhiệm vụ loại bỏ cặn bẩn, rỉ sét và nước có thể lẫn trong nhiên liệu, bảo vệ các chi tiết chính xác của hệ thống phun nhiên liệu."
  },
  {
    "id": 32,
    "question": "Bộ phận nào giúp xe nâng di chuyển được là gì?",
    "options": [
      "Động cơ và bánh xe",
      "Càng nâng",
      "Cabin",
      "Còi cảnh báo"
    ],
    "answer": "Động cơ và bánh xe",
    "explain": "Động cơ cung cấp lực truyền động cho bánh xe, giúp xe nâng di chuyển trong kho/xưởng."
  },
  {
    "id": 33,
    "question": "Tại sao không được sửa đổi, hàn hoặc khoan vào càng nâng?",
    "options": [
      "Vì làm mất thẩm mỹ",
      "Vì làm thay đổi cấu trúc chịu lực và có thể gây gãy càng đột ngột",
      "Vì sẽ bị công ty phạt",
      "Vì khó sơn lại"
    ],
    "answer": "Vì làm thay đổi cấu trúc chịu lực và có thể gây gãy càng đột ngột",
    "explain": "Càng nâng được làm từ thép đặc biệt và được xử lý nhiệt. Việc hàn, khoan sẽ làm thay đổi cấu trúc vật liệu, có thể gây nứt và gãy đột ngột khi chịu tải."
  },
  {
    "id": 34,
    "question": "Kết thúc một khóa học vận hành xe nâng, điều quan trọng nhất người lái cần nắm vững là gì?",
    "options": [
      "Lái xe thật nhanh",
      "Vừa lái xe vừa nghe điện thoại",
      "Vận hành xe nâng một cách an toàn và có trách nhiệm",
      "Chỉ cần biết cách khởi động xe"
    ],
    "answer": "Vận hành xe nâng một cách an toàn và có trách nhiệm",
    "explain": "Mục tiêu cuối cùng của mọi khóa đào tạo là trang bị kiến thức và kỹ năng để người lái có thể vận hành xe một cách an toàn cho bản thân, đồng nghiệp và tài sản của công ty."
  },
  {
    "id": 35,
    "question": "\"Tâm tải\" của xe nâng được định nghĩa là gì?",
    "options": [
      "Khoảng cách từ tâm bánh trước đến cuối càng nâng",
      "Trọng lượng của hàng hóa nặng nhất",
      "Khoảng cách từ mặt trước của càng nâng đến tâm trọng lực của kiện hàng",
      "Chiều cao nâng tối đa của xe"
    ],
    "answer": "Khoảng cách từ mặt trước của càng nâng đến tâm trọng lực của kiện hàng",
    "explain": "Tâm tải là khoảng cách từ mặt trước của càng nâng đến tâm trọng lực của kiện hàng, đây là thông số quan trọng để xác định tải trọng nâng an toàn."
  },
  {
    "id": 36,
    "question": "Tác dụng chính của khung cabin là gì?",
    "options": [
      "Giảm tiếng ồn",
      "Chống bụi",
      "Bảo vệ người lái khi lật xe",
      "Chống mưa gió"
    ],
    "answer": "Bảo vệ người lái khi lật xe",
    "explain": "Khung cabin được thiết kế để bảo vệ người lái khỏi bị đè bẹp trong trường hợp xe bị lật."
  },
  {
    "id": 37,
    "question": "Trước khi vận hành xe nâng, bạn cần kiểm tra gì đầu tiên?",
    "options": [
      "Âm thanh trong cabin",
      "Mức nước làm mát",
      "Tình trạng kỹ thuật và an toàn của xe",
      "Ghế ngồi có êm không"
    ],
    "answer": "Tình trạng kỹ thuật và an toàn của xe",
    "explain": "Kiểm tra kỹ thuật là bước bắt buộc để đảm bảo xe hoạt động an toàn, tránh sự cố khi vận hành."
  },
  {
    "id": 38,
    "question": "Trên xe nâng số tự động, \"bàn đạp phanh\" có công dụng gì?",
    "options": [
      "Để phanh khẩn cấp",
      "Cho phép xe di chuyển rất chậm trong khi động cơ vẫn ở vòng tua cao để nâng hàng nhanh",
      "Để tăng tốc",
      "Để chuyển số"
    ],
    "answer": "Cho phép xe di chuyển rất chậm trong khi động cơ vẫn ở vòng tua cao để nâng hàng nhanh",
    "explain": "Bàn đạp này cho phép ngắt một phần ly hợp, giúp xe di chuyển rất chậm hoặc đứng yên trong khi người lái có thể tăng ga để tăng tốc độ nâng hạ, rất hữu ích khi cần thao tác chính xác."
  },
  {
    "id": 39,
    "question": "Khi khởi động xe nâng dầu diesel trong thời tiết lạnh, cần chờ đèn báo nào tắt rồi mới đề máy?",
    "options": [
      "Đèn báo phanh",
      "Đèn báo sạc",
      "Đèn báo bugi sấy (hình lò xo)",
      "Đèn pha"
    ],
    "answer": "Đèn báo bugi sấy (hình lò xo)",
    "explain": "Đèn báo bugi sấy cho biết bugi đang đốt nóng không khí trong buồng đốt. Cần chờ đèn tắt, báo hiệu đã đủ nhiệt, rồi mới khởi động để máy dễ nổ."
  },
  {
    "id": 40,
    "question": "Trình tự khởi động xe nâng đúng là gì?",
    "options": [
      "Lên xe – khởi động – kéo ga",
      "Lên xe – thắt dây an toàn – kiểm tra cần số ở vị trí trung gian – nổ máy",
      "Nổ máy – kiểm tra dầu",
      "Nhấn còi – rồ ga"
    ],
    "answer": "Lên xe – thắt dây an toàn – kiểm tra cần số ở vị trí trung gian – nổ máy",
    "explain": "Đây là quy trình chuẩn: đảm bảo an toàn cá nhân (thắt dây), kiểm tra an toàn hệ thống (cần số trung gian) rồi mới khởi động máy."
  },
  {
    "id": 41,
    "question": "Người điều khiển xe nâng được phép rời cabin khi nào?",
    "options": [
      "Xe đang chạy",
      "Xe đang nâng hàng",
      "Xe đã hạ càng, gài phanh tay, tắt máy",
      "Bất cứ lúc nào"
    ],
    "answer": "Xe đã hạ càng, gài phanh tay, tắt máy",
    "explain": "Để đảm bảo an toàn tuyệt đối, chỉ được rời xe khi đã hạ càng chạm đất, gài phanh tay và tắt hoàn toàn động cơ/nguồn điện."
  },
  {
    "id": 42,
    "question": "Tại sao phải hạ càng nâng chạm đất trước khi rời khỏi xe?",
    "options": [
      "Để xe trông gọn gàng hơn",
      "Để giảm áp lực lên hệ thống thủy lực và tránh tai nạn cho người khác",
      "Để dễ dàng lên xe lần sau",
      "Để khoe càng nâng mới"
    ],
    "answer": "Để giảm áp lực lên hệ thống thủy lực và tránh tai nạn cho người khác",
    "explain": "Việc này giúp giải phóng áp suất trong hệ thống thủy lực, đồng thời càng nâng hạ sát đất sẽ không tạo thành chướng ngại vật gây nguy hiểm cho người khác."
  },
  {
    "id": 43,
    "question": "Sau mỗi ca làm việc, cần làm gì với xe nâng?",
    "options": [
      "Đỗ xe đúng nơi quy định, hạ càng, gài phanh, tắt máy và vệ sinh cơ bản",
      "Bỏ xe tại nơi làm việc cuối cùng",
      "Giao chìa khóa cho ca sau",
      "Đợi kỹ thuật viên đến kiểm tra"
    ],
    "answer": "Đỗ xe đúng nơi quy định, hạ càng, gài phanh, tắt máy và vệ sinh cơ bản",
    "explain": "Đỗ xe đúng nơi quy định, thực hiện các bước an toàn (hạ càng, gài phanh, tắt máy) và vệ sinh cơ bản giúp bảo quản xe và sẵn sàng cho ca tiếp theo."
  },
  {
    "id": 44,
    "question": "Màu sắc nào thường được dùng cho áo phản quang của người lao động trong kho?",
    "options": [
      "Đỏ – đen",
      "Xanh lá",
      "Vàng – cam",
      "Trắng sữa"
    ],
    "answer": "Vàng – cam",
    "explain": "Màu vàng hoặc cam là những màu có độ tương phản cao, giúp người khác dễ dàng nhận biết sự hiện diện của người mặc, đặc biệt trong môi trường thiếu sáng."
  },
  {
    "id": 45,
    "question": "Loại xe nâng nào phù hợp nhất với không gian chật hẹp?",
    "options": [
      "Xe nâng tầm cao",
      "Xe nâng bán tự động",
      "Xe nâng đối trọng lớn",
      "Xe nâng 3 bánh điện hoặc xe reach truck"
    ],
    "answer": "Xe nâng 3 bánh điện hoặc xe reach truck",
    "explain": "Xe nâng 3 bánh hoặc các dòng xe chuyên dụng như Reach Truck được thiết kế với bán kính quay vòng nhỏ, rất linh hoạt trong các lối đi hẹp."
  },
  {
    "id": 46,
    "question": "Không gian tối thiểu để quay đầu xe nâng phụ thuộc vào yếu tố nào?",
    "options": [
      "Bán kính quay vòng của xe",
      "1 mét",
      "5 mét",
      "Không cần khoảng cách"
    ],
    "answer": "Bán kính quay vòng của xe",
    "explain": "Mỗi loại xe nâng có một thông số \"bán kính quay vòng\" khác nhau, quyết định không gian cần thiết để xe có thể quay đầu."
  },
  {
    "id": 47,
    "question": "Khi sàn kho trơn trượt, người điều khiển nên làm gì?",
    "options": [
      "Phanh mạnh khi cần",
      "Tăng tốc để vượt qua",
      "Giảm tốc độ, giữ khoảng cách, tránh phanh gấp hoặc bẻ lái đột ngột",
      "Không thay đổi hành vi lái xe"
    ],
    "answer": "Giảm tốc độ, giữ khoảng cách, tránh phanh gấp hoặc bẻ lái đột ngột",
    "explain": "Sàn trơn làm giảm độ bám của lốp, dễ gây trượt bánh và mất kiểm soát. Cần giảm tốc độ, tránh phanh hoặc bẻ lái đột ngột."
  },
  {
    "id": 48,
    "question": "Nếu phải làm việc gần đường dây điện trên cao, người vận hành phải làm gì?",
    "options": [
      "Giữ khoảng cách an toàn tuyệt đối với đường dây điện",
      "Yêu cầu cắt điện khu vực",
      "Nâng hàng thật nhanh qua khu vực đó",
      "Không cần chú ý"
    ],
    "answer": "Giữ khoảng cách an toàn tuyệt đối với đường dây điện",
    "explain": "Điện có thể phóng qua không khí ở khoảng cách nhất định. Phải luôn giữ khoảng cách an toàn tuyệt đối giữa tất cả các bộ phận của xe nâng và đường dây điện."
  },
  {
    "id": 49,
    "question": "Khi vận hành xe nâng trong điều kiện gió lớn, nguy cơ nào có thể xảy ra?",
    "options": [
      "Xe chạy nhanh hơn",
      "Rơi hàng hóa và lật xe",
      "Không có nguy cơ nào",
      "Động cơ hoạt động tốt hơn"
    ],
    "answer": "Rơi hàng hóa và lật xe",
    "explain": "Gió mạnh có thể thổi bay các kiện hàng nhẹ, hàng có diện tích bề mặt lớn hoặc thậm chí gây mất ổn định và lật xe."
  },
  {
    "id": 50,
    "question": "Trụ nâng của xe nâng hoạt động nhờ vào hệ thống nào?",
    "options": [
      "Lực đạp chân",
      "Dây xích cơ khí",
      "Hệ thống thủy lực",
      "Động cơ diesel"
    ],
    "answer": "Hệ thống thủy lực",
    "explain": "Trụ nâng di chuyển lên xuống nhờ áp lực dầu được tạo ra bởi bơm thủy lực và truyền qua các xi lanh thủy lực của hệ thống thủy lực."
  },
  {
    "id": 51,
    "question": "Bánh xe nâng thường được làm từ chất liệu nào sau đây?",
    "options": [
      "Kim loại nguyên khối",
      "Nhựa tái chế",
      "Cao su đặc hoặc lốp hơi",
      "Gỗ ép"
    ],
    "answer": "Cao su đặc hoặc lốp hơi",
    "explain": "Tùy vào địa hình hoạt động, bánh xe nâng có thể là lốp hơi (dùng cho địa hình gồ ghề) hoặc lốp cao su đặc (chống đâm thủng, dùng trên nền phẳng)."
  },
  {
    "id": 52,
    "question": "Động cơ của xe nâng dầu hoạt động theo nguyên lý động cơ nào?",
    "options": [
      "Động cơ đốt ngoài",
      "Động cơ đốt trong",
      "Động cơ thủy lực",
      "Động cơ điện từ"
    ],
    "answer": "Động cơ đốt trong",
    "explain": "Xe nâng dầu sử dụng động cơ đốt trong, trong đó nhiên liệu (diesel) được đốt cháy bên trong xi lanh để sinh công."
  },
  {
    "id": 53,
    "question": "Đâu là bộ phận điều khiển hướng di chuyển của xe nâng?",
    "options": [
      "Cần nâng",
      "Vô lăng",
      "Trụ nâng",
      "Phanh tay"
    ],
    "answer": "Trụ nâng",
    "explain": "Vô lăng là bộ phận chính mà người lái sử dụng để điều khiển hướng di chuyển (trái/phải) của xe nâng."
  },
  {
    "id": 54,
    "question": "Trụ nâng của xe nâng có thể nghiêng để làm gì?",
    "options": [
      "Giảm tốc độ",
      "Làm đẹp xe",
      "Cân bằng và cố định hàng hóa",
      "Thay đổi góc nhìn"
    ],
    "answer": "Cân bằng và cố định hàng hóa",
    "explain": "Việc nghiêng trụ nâng về phía sau giúp ổn định hàng hóa trên càng, còn nghiêng về phía trước giúp dễ dàng đặt hàng xuống."
  },
  {
    "id": 55,
    "question": "Hệ thống phanh của xe nâng hay sử dụng là loại nào?",
    "options": [
      "Phanh đĩa, phanh tang trống",
      "Phanh dây kéo",
      "Phanh không khí",
      "Chỉ phanh tay"
    ],
    "answer": "Phanh đĩa, phanh tang trống",
    "explain": "Tương tự ô tô, xe nâng sử dụng các cơ cấu phanh phổ biến như phanh đĩa hoặc phanh tang trống để đảm bảo dừng xe an toàn."
  },
  {
    "id": 56,
    "question": "Nước làm mát động cơ có tác dụng chính là gì?",
    "options": [
      "Chống gỉ cabin",
      "Làm sạch dầu",
      "Giữ nhiệt độ động cơ ổn định",
      "Làm bóng bề mặt xe"
    ],
    "answer": "Giữ nhiệt độ động cơ ổn định",
    "explain": "Nước làm mát luân chuyển trong động cơ để hấp thụ nhiệt sinh ra và tản nhiệt ra ngoài qua két nước, giúp duy trì nhiệt độ làm việc ổn định."
  },
  {
    "id": 57,
    "question": "Cấu tạo cơ bản của xe nâng gồm những bộ phận chính nào?",
    "options": [
      "Cabin – càng nâng – phanh",
      "Càng nâng – trụ nâng – đối trọng – khung xe – bánh xe",
      "Đèn – còi – xi lanh",
      "Ghế – bàn đạp – gương"
    ],
    "answer": "Càng nâng – trụ nâng – đối trọng – khung xe – bánh xe",
    "explain": "Một chiếc xe nâng hoàn chỉnh gồm các bộ phận cơ bản: Càng nâng, Trụ nâng, Đối trọng, Khung xe và Bánh xe."
  },
  {
    "id": 58,
    "question": "Xe nâng thường dùng loại động cơ nào?",
    "options": [
      "Động cơ điện hoặc đốt trong",
      "Động cơ phản lực",
      "Động cơ tua-bin",
      "Động cơ xăng – dầu liên hoàn"
    ],
    "answer": "Động cơ điện hoặc đốt trong",
    "explain": "Hai loại nguồn động lực chính cho xe nâng là động cơ điện (chạy bằng ắc quy) và động cơ đốt trong (chạy bằng xăng, gas, hoặc dầu diesel)."
  },
  {
    "id": 59,
    "question": "Bộ phận nào chịu trách nhiệm chính trong việc truyền lực đến bánh xe?",
    "options": [
      "Đối trọng",
      "Trụ nâng",
      "Hộp số và hệ thống truyền động",
      "Ghế ngồi"
    ],
    "answer": "Hộp số và hệ thống truyền động",
    "explain": "Hộp số và hệ thống truyền động (trục láp, vi sai) nhận công suất từ động cơ và truyền nó tới các bánh xe chủ động."
  },
  {
    "id": 60,
    "question": "Khi có người đi bộ tiến vào đường đi của xe nâng, người điều khiển nên làm gì?",
    "options": [
      "Nhấn còi, dừng xe",
      "Lái vòng qua",
      "Nâng hàng lên cao",
      "Tăng tốc để vượt qua"
    ],
    "answer": "Nhấn còi, dừng xe",
    "explain": "Phải ưu tiên an toàn cho người đi bộ. Dừng xe và bấm còi để cảnh báo, chỉ tiếp tục di chuyển khi người đó đã ở khoảng cách an toàn."
  },
  {
    "id": 61,
    "question": "Dấu hiệu nào cho thấy xe nâng đang trong tình trạng không an toàn để vận hành?",
    "options": [
      "Bảng điều khiển có đèn cảnh báo sáng",
      "Tiếng động cơ êm",
      "Càng nâng mới",
      "Xe nâng có màu sáng"
    ],
    "answer": "Bảng điều khiển có đèn cảnh báo sáng",
    "explain": "Đèn cảnh báo trên bảng điều khiển sáng lên để thông báo về một lỗi cụ thể trong hệ thống. Vận hành xe khi có cảnh báo là rất nguy hiểm."
  },
  {
    "id": 62,
    "question": "Quy tắc khi quay đầu xe nâng trong kho là gì?",
    "options": [
      "Rẽ gấp",
      "Quan sát toàn diện, giảm tốc độ",
      "Nhấc càng lên cao hơn tầm mắt",
      "Phanh khẩn cấp liên tục"
    ],
    "answer": "Quan sát toàn diện, giảm tốc độ",
    "explain": "Do bánh sau là bánh lái, xe nâng có phần đuôi văng ra khi quay đầu. Cần giảm tốc độ, quan sát kỹ các phía để tránh va chạm."
  },
  {
    "id": 63,
    "question": "Khi điều kiện ánh sáng yếu, người lái cần làm gì?",
    "options": [
      "Tắt đèn để tiết kiệm",
      "Vận hành chậm lại và bật đèn",
      "Lái bình thường",
      "Mở cửa kho"
    ],
    "answer": "Vận hành chậm lại và bật đèn",
    "explain": "Phải bật đèn chiếu sáng của xe và giảm tốc độ để có thể quan sát và phản ứng kịp thời với các chướng ngại vật."
  },
  {
    "id": 64,
    "question": "Cấm tuyệt đối hành động nào sau đây?",
    "options": [
      "Hạ càng nâng khi dừng",
      "Vận hành khi có người đứng gần càng",
      "Bấm còi khi lùi",
      "Di chuyển ở tốc độ chậm"
    ],
    "answer": "Vận hành khi có người đứng gần càng",
    "explain": "Chở người trên càng nâng hoặc để người đứng gần khu vực càng đang hoạt động là hành vi cực kỳ nguy hiểm và bị cấm tuyệt đối."
  },
  {
    "id": 65,
    "question": "Nếu phát hiện rò rỉ dầu thủy lực, người điều khiển nên làm gì?",
    "options": [
      "Tiếp tục làm việc",
      "Dùng giẻ lau",
      "Báo kỹ thuật và dừng xe",
      "Đổ thêm dầu"
    ],
    "answer": "Báo kỹ thuật và dừng xe",
    "explain": "Rò rỉ dầu có thể làm hệ thống thủy lực mất áp suất đột ngột, gây nguy hiểm. Cần dừng xe và báo cho bộ phận kỹ thuật."
  },
  {
    "id": 66,
    "question": "Tại sao không nên nâng hàng quá tải trọng cho phép?",
    "options": [
      "Làm xe xấu đi",
      "Dễ gây tai nạn lật xe và hư hỏng thiết bị",
      "Tiết kiệm nhiên liệu",
      "Mất thời gian"
    ],
    "answer": "Dễ gây tai nạn lật xe và hư hỏng thiết bị",
    "explain": "Nâng quá tải sẽ làm xe mất cân bằng, trọng tâm vượt ra ngoài tam giác ổn định, dẫn đến nguy cơ lật xe và hư hỏng kết cấu xe."
  },
  {
    "id": 67,
    "question": "Khi di chuyển xe nâng qua cửa hẹp, cần làm gì?",
    "options": [
      "Giảm tốc độ, hạ thấp càng nâng và căn chỉnh cẩn thận",
      "Tăng tốc",
      "Nâng càng lên cao",
      "Không cần quan sát"
    ],
    "answer": "Giảm tốc độ, hạ thấp càng nâng và căn chỉnh cẩn thận",
    "explain": "Cần giảm tốc độ để có đủ thời gian căn chỉnh, hạ thấp càng nâng để giảm trọng tâm và tránh va quệt vào phần trên của cửa."
  },
  {
    "id": 68,
    "question": "Việc sử dụng xe nâng không đúng cách có thể gây ra hậu quả gì?",
    "options": [
      "Trễ tiến độ",
      "Tổn thất tài sản",
      "Gây tai nạn nghiêm trọng",
      "Tất cả các đáp án trên"
    ],
    "answer": "Tất cả các đáp án trên",
    "explain": "Sử dụng sai cách không chỉ gây tai nạn, thiệt hại tài sản, trễ tiến độ mà còn vi phạm các quy định về an toàn lao động."
  },
  {
    "id": 69,
    "question": "Khi vận hành xe nâng trong kho, tốc độ tối đa nên là bao nhiêu?",
    "options": [
      "Dưới 50 km/h",
      "20 – 30 km/h",
      "10 – 15 km/h",
      "5 – 10 km/h"
    ],
    "answer": "5 – 10 km/h",
    "explain": "Trong môi trường kho hẹp, nhiều người và hàng hóa, tốc độ thấp giúp đảm bảo an toàn tối đa."
  },
  {
    "id": 70,
    "question": "Khi càng nâng bị cong, mòn hoặc nứt, người vận hành nên làm gì?",
    "options": [
      "Tiếp tục sử dụng",
      "Hạ tốc độ",
      "Ngừng sử dụng và báo cáo để thay mới hoặc sửa chữa ngay",
      "Dùng lực tay chỉnh lại"
    ],
    "answer": "Ngừng sử dụng và báo cáo để thay mới hoặc sửa chữa ngay",
    "explain": "Đây là những hư hỏng nghiêm trọng có thể gây gãy càng đột ngột. Phải ngừng sử dụng xe ngay lập tức và báo cáo."
  },
  {
    "id": 71,
    "question": "Lọc gió động cơ cần được vệ sinh hoặc thay thế định kỳ để làm gì?",
    "options": [
      "Giúp động cơ hoạt động hiệu quả, tránh bụi bẩn vào buồng đốt",
      "Giảm tiếng ồn",
      "Tăng tốc độ của xe",
      "Làm mát động cơ"
    ],
    "answer": "Giúp động cơ hoạt động hiệu quả, tránh bụi bẩn vào buồng đốt",
    "explain": "Lọc gió ngăn bụi bẩn vào buồng đốt. Nếu lọc gió bị tắc, động cơ sẽ không đủ không khí, dẫn đến giảm công suất và tiêu hao nhiên liệu."
  },
  {
    "id": 72,
    "question": "Việc kiểm tra áp suất lốp (đối với lốp hơi) quan trọng vì sao?",
    "options": [
      "Áp suất đúng giúp xe ổn định và an toàn",
      "Áp suất cao giúp xe chạy nhanh hơn",
      "Áp suất thấp giúp xe bám đường tốt hơn",
      "Không quan trọng"
    ],
    "answer": "Áp suất đúng giúp xe ổn định và an toàn",
    "explain": "Áp suất lốp không đúng (quá căng hoặc quá non) sẽ ảnh hưởng đến sự ổn định, khả năng bám đường và an toàn của xe nâng."
  },
  {
    "id": 73,
    "question": "Dầu động cơ và lọc dầu nên được thay lần đầu tiên sau bao nhiêu giờ đối với xe mới?",
    "options": [
      "50 giờ",
      "100 giờ",
      "200 giờ",
      "500 giờ"
    ],
    "answer": "200 giờ",
    "explain": "Lịch bảo dưỡng cho xe mới thường yêu cầu thay dầu và lọc dầu động cơ sau 200 giờ hoạt động đầu tiên để loại bỏ mạt kim loại."
  },
  {
    "id": 74,
    "question": "Tại sao không được dùng tay trần để kiểm tra rò rỉ dầu thủy lực?",
    "options": [
      ". Vì tay sẽ bị bẩn",
      "Vì dầu thủy lực có thể nóng và có áp suất cao gây thương tích",
      "Vì sẽ làm lây lan vi khuẩn",
      "Vì dầu có tính axit"
    ],
    "answer": "Vì dầu thủy lực có thể nóng và có áp suất cao gây thương tích",
    "explain": "Dầu thủy lực trong hệ thống có áp suất rất cao, tia dầu nhỏ rò rỉ ra có thể xuyên qua da và gây thương tích nghiêm trọng."
  },
  {
    "id": 75,
    "question": "Khi thay lốp xe nâng, cần phải làm gì để đảm bảo cân bằng?",
    "options": [
      "Chỉ thay chiếc lốp bị hỏng",
      "Thay cả cặp lốp trên cùng một trục",
      "Dùng lốp xe ô tô thay thế",
      "Bơm lốp thật căng"
    ],
    "answer": "Thay cả cặp lốp trên cùng một trục",
    "explain": "Để đảm bảo sự cân bằng và ổn định của xe, phải luôn thay cả cặp lốp trên cùng một trục, ngay cả khi chỉ có một chiếc bị hỏng."
  },
  {
    "id": 76,
    "question": "Tại sao không được để chân trên bàn đạp côn (ly hợp) liên tục khi đang lái xe số cơ?",
    "options": [
      "Gây mỏi chân",
      "Gây mòn đĩa ma sát ly hợp",
      "Làm xe chạy chậm lại",
      "Không ảnh hưởng gì"
    ],
    "answer": "Gây mòn đĩa ma sát ly hợp",
    "explain": "Việc tì chân lên bàn đạp côn sẽ làm đĩa ma sát không ép chặt hoàn toàn, gây ra hiện tượng trượt ly hợp và làm mòn đĩa ma sát rất nhanh."
  },
  {
    "id": 77,
    "question": "Dầu thủy lực cần được thay thế khi nào?",
    "options": [
      "Xe có tiếng kêu lạ",
      "Dầu đổi màu đen đặc, có cặn và hiệu suất nâng giảm",
      "Sau 1 năm",
      "Xe bị rung"
    ],
    "answer": "Dầu đổi màu đen đặc, có cặn và hiệu suất nâng giảm",
    "explain": "Dầu đổi màu, có cặn bẩn và bị mất độ nhớt sẽ làm giảm hiệu suất và gây mài mòn hệ thống. Cần thay thế theo lịch hoặc khi có dấu hiệu bất thường."
  },
  {
    "id": 78,
    "question": "Việc ghi chép \"nhật ký vận hành và bảo dưỡng\" có mục đích chính là gì?",
    "options": [
      "Để làm bằng chứng khi có tai nạn",
      "Để theo dõi tình trạng xe, lịch sử sửa chữa và lập kế hoạch bảo dưỡng",
      "Chỉ là thủ tục hành chính",
      "Để tính lương cho người lái"
    ],
    "answer": "Để theo dõi tình trạng xe, lịch sử sửa chữa và lập kế hoạch bảo dưỡng",
    "explain": "Nhật ký giúp theo dõi tình trạng hoạt động, ghi lại sự cố, các hạng mục đã bảo dưỡng, từ đó giúp lập kế hoạch bảo trì hiệu quả."
  },
  {
    "id": 79,
    "question": "Tại sao không được dùng cầu chì có ampe cao hơn mức quy định để thay thế?",
    "options": [
      "Vì cầu chì sẽ không vừa",
      "Có thể gây quá tải, chập cháy hệ thống điện",
      ". Sẽ làm xe chạy yếu đi",
      "Không có lý do gì đặc biệt"
    ],
    "answer": "Có thể gây quá tải, chập cháy hệ thống điện",
    "explain": "Cầu chì có tác dụng tự ngắt khi dòng điện quá cao. Dùng cầu chì có ampe cao hơn sẽ làm mất tác dụng bảo vệ này, có thể gây quá tải và cháy hệ thống điện."
  },
  {
    "id": 80,
    "question": "Loại vật liệu nào không được nâng bằng càng nâng thông thường nếu không có phụ kiện hỗ trợ?",
    "options": [
      "Hàng đóng pallet",
      "Thùng gỗ",
      "Bao xi măng",
      "Khối tròn không ràng buộc"
    ],
    "answer": "Khối tròn không ràng buộc",
    "explain": "Các khối tròn (như cuộn giấy, thùng phuy) không có điểm tựa ổn định, dễ bị lăn và rơi. Cần dùng các bộ công tác chuyên dụng."
  },
  {
    "id": 81,
    "question": "Khi lùi xe nâng, người lái nên làm gì để đảm bảo an toàn tối đa?",
    "options": [
      "Chỉ nhìn gương chiếu hậu",
      "Quay đầu lại quan sát trực tiếp và kết hợp gương",
      "Nhìn lên trần xe",
      "Nhìn thẳng về phía trước"
    ],
    "answer": "Quay đầu lại quan sát trực tiếp và kết hợp gương",
    "explain": "Gương chiếu hậu có điểm mù. Quay đầu lại để quan sát trực tiếp kết hợp với nhìn gương sẽ bao quát được không gian tốt hơn."
  },
  {
    "id": 82,
    "question": "Khi nâng một kiện hàng dài, cần chú ý điều gì nhất?",
    "options": [
      "Nâng thật nhanh",
      "Đảm bảo kiện hàng cân bằng và di chuyển chậm khi vào cua",
      "Chỉ cần đưa một phần càng vào là đủ",
      "Không cần chú ý gì đặc biệt"
    ],
    "answer": "Đảm bảo kiện hàng cân bằng và di chuyển chậm khi vào cua",
    "explain": "Hàng dài có tâm tải lớn và dễ bị văng khi vào cua. Cần đảm bảo hàng cân bằng và di chuyển với tốc độ chậm, đặc biệt là khi quay đầu."
  },
  {
    "id": 83,
    "question": "Đâu là cách xử lý đúng khi hàng hóa bị rơi khỏi càng nâng?",
    "options": [
      ". Cố gắng dùng càng để đỡ lại",
      "Dừng xe, hạ càng, và xếp lại hàng theo cách thủ công an toàn",
      "Bỏ qua và tiếp tục công việc",
      "Lái xe qua kiện hàng bị rơi"
    ],
    "answer": "Dừng xe, hạ càng, và xếp lại hàng theo cách thủ công an toàn",
    "explain": "Phải dừng xe hoàn toàn, hạ càng xuống, và sắp xếp lại hàng hóa một cách an toàn bằng tay hoặc dụng cụ khác, không được dùng càng nâng để đẩy hoặc xô hàng."
  },
  {
    "id": 84,
    "question": "Khi tiếp cận một pallet hàng, thao tác nào là đúng?",
    "options": [
      "Tiếp cận với tốc độ cao để tiết kiệm thời gian",
      "Di chuyển chậm, căn chỉnh cho càng nâng thẳng và ở đúng độ cao",
      "Nâng càng lên cao rồi mới tiến vào",
      "Nghiêng trụ nâng về phía trước"
    ],
    "answer": "Di chuyển chậm, căn chỉnh cho càng nâng thẳng và ở đúng độ cao",
    "explain": "Tiếp cận chậm rãi giúp người lái có đủ thời gian để căn chỉnh càng nâng thẳng và ở độ cao phù hợp, tránh làm hỏng hàng hoặc pallet."
  },
  {
    "id": 85,
    "question": "\"Khung tựa hàng\" có chức năng gì?",
    "options": [
      "Để người lái tựa lưng vào",
      "Ngăn không cho hàng hóa trượt về phía sau và rơi vào người vận hành",
      "Tăng chiều cao nâng",
      ". Để treo biển số"
    ],
    "answer": "Ngăn không cho hàng hóa trượt về phía sau và rơi vào người vận hành",
    "explain": "Khung tựa hàng có tác dụng ngăn hàng hóa (đặc biệt là các kiện hàng nhỏ, rời) trượt về phía sau và rơi vào khoang lái."
  },
  {
    "id": 86,
    "question": "Khi nâng một pallet, càng nâng nên được đưa vào sâu đến mức nào?",
    "options": [
      "Khoảng 1/2 chiều dài pallet",
      "Khoảng 3/4 chiều dài pallet hoặc vào hết mức có thể một cách an toàn",
      "Chỉ cần vào một chút ở mép",
      "Tùy ý người lái"
    ],
    "answer": "Khoảng 3/4 chiều dài pallet hoặc vào hết mức có thể một cách an toàn",
    "explain": "Đưa càng vào sâu nhất có thể giúp phân bổ tải trọng đều trên càng và làm cho tâm tải gần với xe nhất, tăng độ ổn định."
  },
  {
    "id": 87,
    "question": "Khi xếp hàng lên giá kệ nhiều tầng, thao tác nào là quan trọng nhất?",
    "options": [
      "Đẩy hàng vào kệ thật mạnh",
      "Căn chỉnh độ cao chính xác và đưa hàng vào từ từ, nhẹ nhàng",
      "Nâng hàng cao hơn kệ rồi thả xuống",
      "Nghiêng trụ nâng về phía trước khi đặt hàng"
    ],
    "answer": "Căn chỉnh độ cao chính xác và đưa hàng vào từ từ, nhẹ nhàng",
    "explain": "Cần phải hết sức cẩn thận, di chuyển chậm, căn chỉnh chính xác độ cao và đưa hàng vào từ từ để tránh va chạm làm đổ hàng hoặc sập kệ."
  },
  {
    "id": 88,
    "question": "Tại sao không nên để các vật dụng, công cụ lỏng lẻo trong cabin xe nâng?",
    "options": [
      "Vì làm cabin trông bừa bộn",
      "Vì chúng có thể rơi vào các bàn đạp hoặc cần điều khiển gây mất kiểm soát",
      "Vì làm tăng trọng lượng xe",
      "Vì sẽ bị phạt"
    ],
    "answer": "Vì chúng có thể rơi vào các bàn đạp hoặc cần điều khiển gây mất kiểm soát",
    "explain": "Các vật dụng này có thể bị rung và rơi xuống sàn, kẹt vào dưới bàn đạp phanh hoặc ga, làm người lái mất khả năng kiểm soát xe."
  },
  {
    "id": 89,
    "question": "Việc sử dụng xe nâng để đẩy hoặc kéo một xe khác có được phép không?",
    "options": [
      ". Được phép nếu xe kia nhẹ hơn",
      "Được phép trong trường hợp khẩn cấp",
      "Không được phép vì có thể gây hư hỏng và mất an toàn",
      "Chỉ được phép khi có sự đồng ý của quản lý"
    ],
    "answer": "Không được phép vì có thể gây hư hỏng và mất an toàn",
    "explain": "Xe nâng được thiết kế để nâng hàng, không phải để đẩy/kéo. Hành động này có thể gây hư hỏng hệ thống truyền động và gây mất an toàn."
  },
  {
    "id": 90,
    "question": "Khi bình ắc quy yếu, dấu hiệu nhận biết là gì trên xe nâng điện?",
    "options": [
      "Xe chạy nhanh hơn",
      "Đèn báo yếu trên bảng điều khiển, xe di chuyển hoặc nâng yếu",
      "Càng nâng mạnh hơn",
      "Bánh xe phồng"
    ],
    "answer": "Đèn báo yếu trên bảng điều khiển, xe di chuyển hoặc nâng yếu",
    "explain": "Khi ắc quy yếu, năng lượng cung cấp cho các mô tơ sẽ giảm, dẫn đến xe hoạt động yếu và đèn báo ắc quy trên bảng điều khiển sẽ sáng."
  },
  {
    "id": 91,
    "question": "Động cơ điện trên xe nâng hoạt động nhờ vào đâu?",
    "options": [
      "Nhiên liệu đốt trong",
      "Truyền động cơ khí",
      "Dòng điện từ ắc quy",
      ". Gió"
    ],
    "answer": "Dòng điện từ ắc quy",
    "explain": "Nguồn năng lượng chính cho động cơ điện của xe nâng là dòng điện một chiều được lưu trữ trong bình ắc quy."
  },
  {
    "id": 92,
    "question": "Hành động nào sau đây giúp kéo dài tuổi thọ của bình ắc quy xe nâng điện?",
    "options": [
      "Thường xuyên sạc nhồi (sạc khi chưa hết)",
      "Luôn sử dụng xe đến khi cạn kiệt điện rồi mới sạc",
      "Tránh để ắc quy cạn kiệt và thực hiện sạc cân bằng định kỳ",
      "Sạc ắc quy ở nơi có nhiệt độ cao"
    ],
    "answer": "Tránh để ắc quy cạn kiệt và thực hiện sạc cân bằng định kỳ",
    "explain": "Sạc quá mức hoặc xả quá cạn đều làm hỏng ắc quy. Sạc cân bằng định kỳ giúp làm đều nồng độ dung dịch trong các ngăn, giúp ắc quy bền hơn."
  },
  {
    "id": 93,
    "question": "Tại sao không được dùng giẻ khô để lau bề mặt bình ắc quy?",
    "options": [
      "Vì làm trầy xước vỏ bình",
      "Vì có thể tạo ra tĩnh điện gây tia lửa",
      "Vì không sạch",
      "Vì giẻ khô hút axit"
    ],
    "answer": "Vì có thể tạo ra tĩnh điện gây tia lửa",
    "explain": "Việc cọ xát giẻ khô có thể tạo ra tĩnh điện. Nếu có khí Hydro thoát ra từ ắc quy, tia lửa tĩnh điện có thể gây ra cháy nổ."
  },
  {
    "id": 94,
    "question": "Khi nối dây mồi điện để khởi động một xe nâng khác, cực âm (-) của bình điện tốt nên được nối vào đâu trên xe bị hết điện4",
    "options": [
      "Vào cực âm (-) của bình yếu",
      "Vào khung kim loại của động cơ hoặc thân xe",
      "Vào cực dương (+) của bình yếu",
      "Không cần nối cực âm"
    ],
    "answer": "Vào khung kim loại của động cơ hoặc thân xe",
    "explain": "Nối cực âm cuối cùng vào thân xe/động cơ sẽ giúp tránh phát sinh tia lửa ngay gần bình, nơi có thể có khí Hydro tích tụ, giảm nguy cơ cháy nổ."
  },
  {
    "id": 95,
    "question": "Nếu nâng hàng quá tải, điều gì có thể xảy ra?",
    "options": [
      "Xe nâng chạy chậm hơn",
      "Xe dễ bị lật, mất cân bằng",
      "Xe sẽ không khởi động",
      "Hệ thống làm mát bị hỏng"
    ],
    "answer": "Xe dễ bị lật, mất cân bằng",
    "explain": "Quá tải làm trọng tâm xe bị lệch, gây nguy cơ lật xe, đổ hàng rất nguy hiểm."
  },
  {
    "id": 96,
    "question": "Trước khi đổ thêm nước cất vào bình ắc quy, cần làm gì đầu tiên?",
    "options": [
      "Tháo bình ắc quy ra khỏi xe",
      "Lau sạch bề mặt và các nắp bình",
      "Xả hết nước cũ ra",
      "Sạc đầy bình"
    ],
    "answer": "Lau sạch bề mặt và các nắp bình",
    "explain": "Bề mặt ắc quy thường có bụi bẩn và axit. Cần lau sạch trước khi mở nắp để tránh các tạp chất này rơi vào bên trong làm hỏng dung dịch điện phân."
  },
  {
    "id": 97,
    "question": "Tại sao không nên khởi động động cơ liên tục nhiều lần trong thời gian ngắn?",
    "options": [
      "Vì sẽ làm hỏng còi xe",
      "Vì sẽ làm nóng máy nhanh",
      "Vì có thể làm hỏng củ đề và làm cạn ắc quy",
      "Vì tốn nhiều nhiên liệu"
    ],
    "answer": "Vì có thể làm hỏng củ đề và làm cạn ắc quy",
    "explain": "Việc khởi động đòi hỏi dòng điện rất lớn từ ắc quy và làm nóng củ đề. Thực hiện liên tục sẽ làm cạn kiệt ắc quy và có thể gây cháy củ đề."
  },
  {
    "id": 98,
    "question": "Khi cẩu xe nâng để vận chuyển, cần móc cáp vào đâu?",
    "options": [
      "Vào càng nâng",
      "Vào vô lăng",
      "Vào các điểm móc cẩu được nhà sản xuất chỉ định trên khung xe",
      "Vào khung bảo vệ (cabin)"
    ],
    "answer": "Vào các điểm móc cẩu được nhà sản xuất chỉ định trên khung xe",
    "explain": "Xe nâng được thiết kế các điểm chịu lực riêng để móc cẩu. Tuyệt đối không được móc vào các bộ phận không chịu lực như cabin hay càng nâng."
  },
  {
    "id": 99,
    "question": "Khi thay đổi hướng di chuyển (tiến/lùi) đối với xe số cơ, người vận hành cần làm gì?",
    "options": [
      "Giảm ga và chuyển hướng ngay lập tức",
      "Dừng xe hoàn toàn rồi mới đổi hướng",
      "Tăng ga một chút để chuyển hướng mượt hơn",
      "Vừa chạy chậm vừa chuyển hướng"
    ],
    "answer": "Dừng xe hoàn toàn rồi mới đổi hướng",
    "explain": "Để bảo vệ hộp số và đảm bảo an toàn, tài liệu hướng dẫn yêu cầu xe phải dừng lại hoàn toàn trước khi người vận hành chuyển cần số sang hướng ngược lại."
  },
  {
    "id": 100,
    "question": "Khi thấy hàng bị nghiêng trên pallet, người lái cần:",
    "options": [
      "Dừng xe và chỉnh lại hàng.",
      "Vẫn di chuyển.",
      "Tăng tốc để hàng không rơi.",
      "Phanh gấp."
    ],
    "answer": "Dừng xe và chỉnh lại hàng.",
    "explain": "Chỉ di chuyển khi hàng đã được xếp chắc chắn."
  },
  {
    "id": 101,
    "question": "Đèn cảnh báo nào sẽ sáng nếu hệ thống sạc của xe (máy phát) gặp sự cố?",
    "options": [
      "Đèn báo dầu",
      "Đèn báo nhiệt độ",
      "Đèn báo ắc quy/sạc",
      "Đèn báo phanh"
    ],
    "answer": "Đèn báo ắc quy/sạc",
    "explain": "Đèn báo ắc quy (hình bình ắc quy) sáng lên không chỉ khi ắc quy yếu mà còn khi hệ thống sạc không hoạt động, không nạp điện được cho bình."
  }
];
