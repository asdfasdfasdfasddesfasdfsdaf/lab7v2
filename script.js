document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Получаем данные формы
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Проверка данных (простейшая)
    if (username === "your_username" && password === "your_password") {
        // Показываем контент после успешного логина
        document.getElementById("login-section").style.display = "none";
        document.getElementById("content-section").style.display = "block";
        document.getElementById("user-name").innerText = username;
    } else {
        alert("Неверное имя пользователя или пароль!");
    }
});

document.getElementById("likeButton").addEventListener("click", function() {
    alert("Пост понравился!");
});

document.getElementById("sendMessageButton").addEventListener("click", function() {
    const message = document.getElementById("messageInput").value;
    alert("Сообщение отправлено: " + message);
});

document.getElementById("submitReview").addEventListener("click", function() {
    const review = document.getElementById("reviewText").value;
    alert("Отзыв отправлен: " + review);
});
