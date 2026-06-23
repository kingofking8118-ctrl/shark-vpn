// Shark VPN

document.addEventListener("DOMContentLoaded", () => {

    // انیمیشن نمایش کارت‌ها
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // افکت دکمه‌ها
    const buttons = document.querySelectorAll(".btn, .footerBtn");

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });

    });

});
