// вкладки
function showTab(tabId) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.add("hidden");
    });
    document.getElementById(tabId).classList.remove("hidden");
}

// таймер (08.12.2024)
const startDate = new Date(2024, 11, 8, 0, 0, 0); // 08.12.2024

function updateTimer() {
    const now = new Date();
    let diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("timer").innerHTML =
        `Мы вместе уже <b>${days}</b> дней 
         <b>${hours}</b> часов 
         <b>${minutes}</b> минут 
         <b>${seconds}</b> секунд `;
}

setInterval(updateTimer, 1000);
updateTimer();

setInterval(updateTimer, 1000);
updateTimer();

// падающие сердечки
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}, 600);
// автопечать текста
const text = "Ты — самый тёплый и родной человек для меня. Спасибо за каждый день, за заботу и улыбки ❤️";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}