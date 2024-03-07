export const header = (typeHeader) => {
    if (typeHeader == "one") {
        const headerModal = document.querySelector(".header-one__modal");
        const headerBtn = document.querySelector(".header-one__btn");

        headerBtn.addEventListener("click", function (event) {
            event.preventDefault();
            headerModal.classList.toggle("header-one__modal--open");
            headerBtn.classList.toggle("header-one__btn--open");
        });
    }
    if (typeHeader == "two") {
        const headerModal = document.querySelector(".header-two__modal");
        const headerBtn = document.querySelector(".header-two__btn");

        headerBtn.addEventListener("click", function (event) {
            event.preventDefault();
            headerModal.classList.toggle("header-two__modal--open");
            headerBtn.classList.toggle("header-two__btn--open");
        });
    }
    if (typeHeader == "three") {
        const headerAside = document.querySelector(".header-three-aside");
        const headerBurgerOpen = document.querySelector(
            ".header-three__burger"
        );
        const headerBurgerClose = document.querySelector(
            ".header-three-aside__close"
        );

        headerBurgerOpen.addEventListener("click", function (event) {
            event.preventDefault();
            headerAside.classList.add("header-three-aside--appear");
        });
        headerBurgerClose.addEventListener("click", function (event) {
            event.preventDefault();
            headerAside.classList.remove("header-three-aside--appear");
        });
        headerAside.addEventListener("click", function (event) {
            if (event.target.classList.contains("header-three-aside--appear")) {
                headerAside.classList.remove("header-three-aside--appear");
            }
        });

        const menuItems = document.querySelectorAll(
            ".header-three-aside-menu__item"
        );

        menuItems.forEach((menuItem) => {
            menuItem.addEventListener("click", function () {
                if (
                    menuItem.classList.contains(
                        "header-three-aside-menu__item--open"
                    )
                ) {
                    hideElements(menuItems);
                } else {
                    hideElements(menuItems);
                    showElement(menuItem);
                }
            });
        });

        function hideElements(items) {
            items.forEach((element) => {
                element.classList.remove("header-three-aside-menu__item--open");
                let submenu = element.querySelector(
                    ".header-three-aside-menu-submenu"
                );
                if (submenu) submenu.style.height = "0";
            });
        }
        function showElement(item) {
            item.classList.add("header-three-aside-menu__item--open");
            let submenu = item.querySelector(
                ".header-three-aside-menu-submenu"
            );
            if (submenu) submenu.style.height = submenu.scrollHeight + "px";
        }
    }
};
