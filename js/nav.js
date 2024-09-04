window.addEventListener("load", () => {
    const navHide = document.querySelector("#nav_hide").style;
    const navHideAdoptive = document.querySelector("#nav_hide-adoptive").style;
    const links = ["index", "leistungen", "kunden", "ueber-uns", "kontakt"];
    const href = window.location.href;

    let navHideAdoptiveIsActive = false;

    links.forEach((elm) => {
        if (href.includes(elm)) {
            document.querySelectorAll(`.${elm}`).forEach((link) => {
                link.classList.add("focused");
            })
        }
    })

    document.addEventListener("scroll", () => {
        const scroll = window.scrollY;

        if (!navHideAdoptiveIsActive) {
            if (scroll > 95) {
                navHide.display = "block";
                navHide.animation = "hideNavIn 0.8s";
            } else {
                navHide.animation = "hideNavOut 0.5s forwards"
            };
        }
    });

    document.querySelectorAll(".link").forEach((link) => {
        link.addEventListener("click", () => {
            navHideAdoptiveIsActive = false;
        })
    })

    document.querySelectorAll(".nav-menu-bar").forEach((menuBar) => {
        menuBar.addEventListener("click", () => {
            const scroll = window.scrollY;
    
            navHideAdoptive.display = "block";
            navHideAdoptive.animation = "hideNavIn 0.8s";
            navHideAdoptiveIsActive = true;

            if (scroll > 95) {
                navHide.display = "none";
            }
        });
    });

    document.querySelectorAll(".closeBarBtn").forEach((closeBar) => {
        closeBar.addEventListener("click", ( ) => {
            const scroll = window.scrollY;
    
            navHideAdoptiveIsActive = false;
            navHideAdoptive.animation = "hideNavOut 0.5s forwards";
    
            if (scroll > 95) {
                navHide.display = "block";
                navHide.animation = "hideNavIn 0.8s";
            }
        });
    })
});