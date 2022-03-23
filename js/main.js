window.addEventListener("DOMContentLoaded", () => {
    const mode = document.querySelector(".mode-svg");

    mode.addEventListener("click", function() {
        document.body.classList.toggle("light");
    });

    //mobile menu
    const menuBtn = document.querySelector(".burger-menu");
    const menu = document.querySelector("#menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active-nav");
    });

    // scroll up
    const upBtn = document.querySelector(".btn-up");

    function docUp() {
        if(window.scrollY >= 600) {
            upBtn.classList.add("showBtn");
        } else{
            upBtn.classList.remove("showBtn");
        }
    }

    window.addEventListener("scroll", docUp);

    upBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    //
});