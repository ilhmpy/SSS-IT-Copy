window.addEventListener("load", () => {
    const navHide = document.querySelector("#nav_hide").style;

    document.addEventListener("scroll", () => {
        const scroll = window.scrollY;

        if (scroll > 95) {
            navHide.display = "block";
            navHide.animation = "hideNavIn 0.8s";
        } else {
            navHide.animation = "hideNavOut 0.5s forwards"
        };
    });
});