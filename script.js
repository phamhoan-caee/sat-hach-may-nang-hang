// 1. Cấu hình - Thay link Web App của thầy vào đây
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwxGySySYeE0wsg-41K5lTQUYgL_beTxmCGagDfwQO1AUxLs_l8K4iGMgz-jKE9sxc/exec";

let selectedQuestions = [];
let timeLeft = 1200; // 20 phút
let timerInterval;

// 2. Hàm bắt đầu thi (Phải trùng tên với onclick="startQuiz()" trong HTML)
async function startQuiz() {
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentID').value.trim();

    if (!name || !id) {
        alert("Thầy nhắc học viên nhập đủ Họ tên và Mã số/Lớp nhé!");
        return;
    }

    // Kiểm tra xem dữ liệu câu hỏi đã nạp chưa
    if (typeof questionBank === 'undefined' || questionBank.length === 0) {
        alert("Lỗi: Không tìm thấy dữ liệu câu hỏi trong file data.js!");
        return;
    }

    // Hiệu ứng chuyển màn hình
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // Lấy 30 câu ngẫu nhiên từ ngân hàng 101 câu
    selectedQuestions = questionBank.sort(() => 0.5 - Math.random()).slice(0, 30);

    renderQuestions();
    startTimer();
}

// 3. Hàm hiển thị câu hỏi
function renderQuestions() {
    const container = document.getElementById('quiz-content');
    let html = "";

    selectedQuestions.forEach((q, i) => {
        html += `
            <div class="question-box shadow-sm mb-4 p-3 bg-white rounded">
                <h5 class="text-dark">Câu ${i + 1}: ${q.question}</h5>
                <div class="options-group mt-3">
                    ${q.options.map((opt, index) => `
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="q${i}" id="q${i}_${index}" value="${opt}">
                            <label class="form-check-label w-100" for="q${i}_${index}">${opt}</label>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

// 4. Đồng hồ đếm ngược
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.getElementById('timer').innerText = `Thời gian còn lại: ${min}:${sec < 10 ? '0' : ''}${sec}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Hết giờ làm bài!");
            submitQuiz();
        }
    }, 1000);
}

// 5. Chấm điểm và nộp bài
async function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;

    selectedQuestions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    const status = score >= 25 ? "ĐẠT" : "KHÔNG ĐẠT";
    
    alert(`Kết quả của học viên: ${score}/30 câu. Trạng thái: ${status}`);

    // Gửi về Google Sheets (chế độ không chờ phản hồi để tránh lỗi CORS)
    const payload = {
        name: document.getElementById('studentName').value,
        id: document.getElementById('studentID').value,
        score: score,
        status: status
    };

    try {
        fetch(WEB_APP_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.log("Lỗi gửi dữ liệu");
    }

    location.reload(); 
}
