// 1. Cấu hình - Giữ nguyên Link Web App của anh
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwxGySySYeE0wsg-41K5lTQUYgL_beTxmCGagDfwQO1AUxLs_l8K4iGMgz-jKE9sxc/exec";

let selectedQuestions = [];
let timeLeft = 1200; 
let timerInterval;

// HÀM QUAN TRỌNG: Đã đổi tên để khớp với nút bấm trong giao diện của anh
async function startQuiz() {
    // Lấy dữ liệu từ giao diện (đảm bảo ID khớp với HTML)
    const nameInput = document.getElementById('studentName');
    const idInput = document.getElementById('studentID');

    if (!nameInput || !idInput) {
        console.error("Không tìm thấy ô nhập liệu! Hãy kiểm tra ID trong HTML.");
        return;
    }

    const name = nameInput.value.trim();
    const id = idInput.value.trim();

    if (!name || !id) {
        alert("Thầy nhắc học viên nhập đủ Họ tên và Mã số/Lớp nhé!");
        return;
    }

    if (typeof questionBank === 'undefined' || questionBank.length === 0) {
        alert("Lỗi: File data.js chưa được nạp hoặc không có dữ liệu!");
        return;
    }

    // Chuyển màn hình
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // Chọn 30 câu ngẫu nhiên
    selectedQuestions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 30);

    renderQuestions();
    startTimer();
}

// Hàm hiển thị câu hỏi
function renderQuestions() {
    const container = document.getElementById('quiz-content');
    let html = "";
    selectedQuestions.forEach((q, i) => {
        html += `
            <div class="question-box shadow-sm mb-4 p-3 bg-white rounded text-start">
                <h6 class="fw-bold text-primary">Câu ${i + 1}: ${q.question}</h6>
                <div class="mt-2">
                    ${q.options.map((opt, index) => `
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="q${i}" id="q${i}_${index}" value="${opt}">
                            <label class="form-check-label" for="q${i}_${index}">${opt}</label>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

// Đồng hồ đếm ngược
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        const timerDoc = document.getElementById('timer');
        if(timerDoc) timerDoc.innerText = `Thời gian còn lại: ${min}:${sec < 10 ? '0' : ''}${sec}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Hết giờ!");
            submitQuiz();
        }
    }, 1000);
}

// Nộp bài
async function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    selectedQuestions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === q.answer) score++;
    });

    const status = score >= 25 ? "ĐẠT" : "KHÔNG ĐẠT";
    alert(`Kết quả: ${score}/30 câu. Trạng thái: ${status}`);

    const payload = {
        name: document.getElementById('studentName').value,
        id: document.getElementById('studentID').value,
        score: score,
        status: status
    };

    fetch(WEB_APP_URL, { method: "POST", mode: "no-cors", body: JSON.stringify(payload) });
    location.reload(); 
}
