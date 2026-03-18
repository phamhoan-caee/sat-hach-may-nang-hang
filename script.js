// 1. Cấu hình - Thay link Web App của thầy vào đây
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwxGySySYeE0wsg-41K5lTQUYgL_beTxmCGagDfwQO1AUxLs_l8K4iGMgz-jKE9sxc/exec";

let allQuestions = [];
let selectedQuestions = [];
let timeLeft = 1200; // 20 phút (1200 giây)
let timerInterval;

// 2. Hàm bắt đầu thi
async function startQuiz() {
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentID').value.trim();

    if (!name || !id) {
        alert("Thầy nhắc học viên nhập đủ Họ tên và Mã số nhé!");
        return;
    }

    // Hiệu ứng chờ tải dữ liệu
    document.getElementById('start-screen').innerHTML = `
        <div class="card-body text-center">
            <div class="spinner-border text-primary" role="status"></div>
            <p class="mt-2">Đang lấy đề thi từ hệ thống CAEE...</p>
        </div>`;

    try {
        const response = await fetch(WEB_APP_URL);
        allQuestions = await response.json();

        // Lấy 30 câu ngẫu nhiên từ ngân hàng câu hỏi của thầy
        selectedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 30);

        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('quiz-screen').style.display = 'block';

        renderQuestions();
        startTimer();
    } catch (error) {
        alert("Lỗi kết nối! Thầy kiểm tra lại link Web App hoặc quyền chia sẻ của Sheets nhé.");
        location.reload();
    }
}

// 3. Hàm hiển thị câu hỏi (Tương thích với bảng DeThi của thầy)
function renderQuestions() {
    const container = document.getElementById('quiz-content');
    let html = "";

    selectedQuestions.forEach((q, i) => {
        // Kiểm tra xem câu hỏi có ảnh không (cột HINHANH)
        const imageHtml = q["HINHANH"] ? `<img src="${q["HINHANH"]}" class="img-fluid rounded border mb-3 shadow-sm" style="max-height:300px;">` : "";
        
        html += `
            <div class="question-box shadow-sm mb-4 p-3 bg-white rounded">
                <h5 class="text-dark">Câu ${i + 1}: ${q["Nội dung câu hỏi"]}</h5>
                ${imageHtml}
                <div class="options-group mt-3">
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="q${i}" id="q${i}a" value="A">
                        <label class="form-check-label w-100" for="q${i}a">A. ${q["Đáp án A"]}</label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="q${i}" id="q${i}b" value="B">
                        <label class="form-check-label w-100" for="q${i}b">B. ${q["Đáp án B"]}</label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="q${i}" id="q${i}c" value="C">
                        <label class="form-check-label w-100" for="q${i}c">C. ${q["Đáp án C"]}</label>
                    </div>
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="q${i}" id="q${i}d" value="D">
                        <label class="form-check-label w-100" for="q${i}d">D. ${q["Đáp án D"]}</label>
                    </div>
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
            alert("Hết giờ làm bài! Hệ thống sẽ tự động nộp.");
            submitQuiz();
        }
    }, 1000);
}

// 5. Chấm điểm và gửi kết quả về Sheets
async function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;

    selectedQuestions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === q["Đáp án đúng"]) {
            score++;
        }
    });

    const status = score >= 24 ? "ĐẠT" : "KHÔNG ĐẠT"; // 24/30 câu là Đạt
    const payload = {
        name: document.getElementById('studentName').value,
        id: document.getElementById('studentID').value,
        score: score,
        status: status
    };

    // Hiệu ứng đang nộp bài
    document.getElementById('quiz-screen').innerHTML = `
        <div class="text-center p-5">
            <div class="spinner-grow text-success" role="status"></div>
            <h3>Đang lưu kết quả của thầy...</h3>
        </div>`;

    try {
        await fetch(WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        
        alert(`Chúc mừng! Bạn đúng ${score}/30 câu. Kết quả: ${status}`);
    } catch (e) {
        alert("Lưu điểm gặp lỗi, nhưng thầy đừng lo, hãy chụp màn hình kết quả này!");
    }

    location.reload(); // Quay lại màn hình bắt đầu
}
