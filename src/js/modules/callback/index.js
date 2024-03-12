export const callback = (typeCallback) => {
    const bodyElement = document.querySelector("body");

    if (typeCallback == "small") {
        const modal = document.querySelector(".callback-small-modal");
        const modalWrapper = modal.querySelector(
            ".callback-small-modal__wrapper"
        );
        const modalClose = document.querySelector(
            ".callback-small-modal__close"
        );

        const btnsCallback = document.querySelectorAll(".test-btn");

        btnsCallback.forEach((btn) => {
            btn.addEventListener("click", function (event) {
                event.preventDefault();
                bodyElement.classList.add("not-scrolling");
                const modalTemplate = modal
                    .querySelector(".callback-small-modal__content")
                    .content.cloneNode(true);
                modalWrapper.append(modalTemplate);
                modal.classList.add("callback-small-modal--appear");
                phoneMask();
            });
        });

        modalClose.addEventListener("click", function (event) {
            event.preventDefault();
            closeModal();
        });

        document.addEventListener("keydown", function (event) {
            if (
                event.key === "Escape" &&
                modal.classList.contains("callback-small-modal--appear")
            )
                closeModal();
        });

        modal.addEventListener("click", function (event) {
            if (event.target.classList.contains("callback-small-modal--appear"))
                closeModal();
        });

        function closeModal() {
            const modalInner = modal.querySelector(
                ".callback-small-modal__inner"
            );
            modal.classList.remove("callback-small-modal--appear");
            setTimeout(() => {
                modalInner.remove();
                bodyElement.classList.remove("not-scrolling");
            }, 500);
        }
    } else {
        const modal = document.querySelector(".callback-big-modal");
        const modalWrapper = modal.querySelector(
            ".callback-big-modal__wrapper"
        );
        const modalClose = document.querySelector(".callback-big-modal__close");

        const btnsCallback = document.querySelectorAll(".test-btn");

        btnsCallback.forEach((btn) => {
            btn.addEventListener("click", function (event) {
                event.preventDefault();
                bodyElement.classList.add("not-scrolling");
                const modalTemplate = modal
                    .querySelector(".callback-big-modal__content")
                    .content.cloneNode(true);
                modalWrapper.append(modalTemplate);
                modal.classList.add("callback-big-modal--appear");
                phoneMask();
            });
        });

        modalClose.addEventListener("click", function (event) {
            event.preventDefault();
            closeModal();
        });

        document.addEventListener("keydown", function (event) {
            if (
                event.key === "Escape" &&
                modal.classList.contains("callback-big-modal--appear")
            )
                closeModal();
        });

        modal.addEventListener("click", function (event) {
            if (event.target.classList.contains("callback-big-modal--appear"))
                closeModal();
        });

        function closeModal() {
            const modalInner = modal.querySelector(
                ".callback-big-modal__inner"
            );
            modal.classList.remove("callback-big-modal--appear");
            setTimeout(() => {
                modalInner.remove();
                bodyElement.classList.remove("not-scrolling");
            }, 500);
        }
    }
};
