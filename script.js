// برای انیمیشن ساده موقع لود
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".hero-title");
    heroTitle.style.opacity = 0;
    setTimeout(() => {
        heroTitle.style.opacity = 1;
    }, 500);
});
