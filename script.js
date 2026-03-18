const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwxGySySYeE0wsg-41K5lTQUYgL_beTxmCGagDfwQO1AUxLs_l8K4iGMgz-jKE9sxc/exec";

let selectedQuestions = [];
let timeLeft = 1200; 
let timerInterval;

async function startQuiz() {
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentID').value.trim();

    if (!name || !id) {
        alert("Vui lòng nhập đủ Họ tên và Mã số!");
        return;
    }

    // Ưu tiên dùng dữ liệu từ file data.js đã nạp sẵn
    if (typeof questionBank !== 'undefined') {
        selectedQuestions = questionBank.sort(() => 0.5 - Math.random()).slice(0, 30);
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('quiz-screen').style.display = 'block';
        renderQuestions();
        startTimer();
    } else {
        alert("Không tìm thấy dữ liệu câu hỏi!");
    }
}

function renderQuestions() {
    const container = document.getElementById('quiz-content');
    let html = "";
    selectedQuestions.forEach((q, i) => {
        html += `
            <div class="question-box">
                <h5>Câu ${i + 1}: ${q.question}</h5>
                <div class="options-group mt-3">
                    ${q.options.map((opt, index) => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q${i}" id="q${i}_${index}" value="${opt}">
                            <label class="form-check-label" for="q${i}_${index}">${opt}</label>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    });
    container.innerHTML = html;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.getElementById('timer').innerText = `Thời gian còn lại: ${min}:${sec < 10 ? '0' : ''}${sec}`;
        if (timeLeft <= 0) { clearInterval(timerInterval); submitQuiz(); }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    selectedQuestions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === q.answer) { score++; }
    });

    const status = score >= 25 ? "ĐẠT" : "KHÔNG ĐẠT";
    alert(`Kết quả: ${score}/30 câu - ${status}`);
    
    // Gửi dữ liệu về Google Sheets (nếu cần)
    const payload = { name: document.getElementById('studentName').value, id: document.getElementById('studentID').value, score: score, status: status };
    fetch(WEB_APP_URL, { method: "POST", mode: "no-cors", body: JSON.stringify(payload) });

    location.reload();
}
