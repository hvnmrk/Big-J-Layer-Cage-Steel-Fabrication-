document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    const navLinks = document.querySelectorAll(
        ".nav-link, .nav-cta"
    );

    const sections = document.querySelectorAll(
        "main section[id]"
    );


    function openMenu() {
        navMenu.classList.add("active");
        menuBtn.classList.add("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add(
            "menu-open"
        );
    }


    function closeMenu() {
        navMenu.classList.remove("active");
        menuBtn.classList.remove("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );
    }


    menuBtn.addEventListener("click", () => {
        const isOpen =
            navMenu.classList.contains(
                "active"
            );

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });


    navLinks.forEach(link => {
        link.addEventListener(
            "click",
            closeMenu
        );
    });


    document.addEventListener(
        "click",
        event => {

            if (
                navMenu.classList.contains(
                    "active"
                ) &&
                !navMenu.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {
                closeMenu();
            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {
                closeMenu();
            }

        }
    );


    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 980
            ) {
                closeMenu();
            }

        }
    );


    function updateActiveNav() {
        let currentSection = "home";

        sections.forEach(section => {

            const top =
                section.offsetTop - 180;

            if (
                window.scrollY >= top
            ) {
                currentSection =
                    section.id;
            }

        });


        document
            .querySelectorAll(".nav-link")
            .forEach(link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute("href") ===
                    `#${currentSection}`
                ) {
                    link.classList.add(
                        "active"
                    );
                }

            });
    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );


    updateActiveNav();
});