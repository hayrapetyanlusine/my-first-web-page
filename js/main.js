window.addEventListener("DOMContentLoaded", () => {
    const mode = document.querySelector(".mode-svg");

    mode.addEventListener("click", function() {
        document.body.classList.toggle("light");
    });
});