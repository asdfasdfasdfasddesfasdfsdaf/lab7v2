document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Получаем данные формы
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Проверка данных
    if (username === "your_username" && password === "your_password") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("content-section").style.display = "block";
        document.getElementById("user-name").innerText = username;
    } else {
        alert("Неверное имя пользователя или пароль!");
    }
});

document.getElementById("likeButton").addEventListener("click", function() {
    alert("Пост лайкнут!");
});

document.getElementById("getCurrency").addEventListener("click", function() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(response => response.json())
        .then(data => {
            const rate = data.rates.EUR;
            document.getElementById("currency-rate").innerText = "1 USD = " + rate + " EUR";
        })
        .catch(error => {
            document.getElementById("currency-rate").innerText = "Ошибка при получении курса.";
            console.error("Ошибка:", error);
        });
});

document.getElementById("sendMessageButton").addEventListener("click", function() {
    const message = document.getElementById("messageInput").value;
    alert("Сообщение отправлено: " + message);
});

document.getElementById("submitReview").addEventListener("click", function() {
    const review = document.getElementById("reviewText").value;
    alert("Отзыв отправлен: " + review);
});
