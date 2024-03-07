export const header = (typeHeader) => {
    if (typeHeader == "one") {
        const headerModal = document.querySelector(".header-one__modal");
        const headerBtn = document.querySelector(".header-one__btn");

        headerBtn.addEventListener("click", function(event) {
            event.preventDefault();
            headerModal.classList.toggle("header-one__modal--open");
            headerBtn.classList.toggle("header-one__btn--open");
        })
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

        headerBurgerOpen.addEventListener("click", function(event) {
            event.preventDefault();
            headerAside.classList.add("header-three-aside--appear");
        });
        headerBurgerClose.addEventListener("click", function(event) {
            event.preventDefault();
            headerAside.classList.remove("header-three-aside--appear");
        });
        headerAside.addEventListener("click", function(event) {
            if (event.target.classList.contains("header-three-aside--appear")) {
                headerAside.classList.remove("header-three-aside--appear");
            }
        })
    }
}