window.addEventListener("load", () => {
    const navHide = document.querySelector("#nav_hide").style;
    const links = ["index", "leistungen", "kunden", "ueber-uns", "kontakt"];
    const href = window.location.href;

    links.forEach((elm) => {
        if (href.includes(elm)) {
            document.querySelectorAll(`.${elm}`).forEach((link) => {
                link.classList.add("focused");
            })
        }
    })

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