export const privacyPolicy = () => {
    const bodyElement = document.querySelector("body");
    const modal = document.querySelector(".privacy-policy-modal");
    const modalWrapper = modal.querySelector(".privacy-policy-modal__wrapper");
    const modalClose = document.querySelector(".privacy-policy-modal__close");

    const btnsCallback = document.querySelectorAll(".test-btn");

    btnsCallback.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            bodyElement.classList.add("not-scrolling");
            const modalTemplate = modal
                .querySelector(".privacy-policy-modal__content")
                .content.cloneNode(true);
            modalWrapper.append(modalTemplate);
            modal.classList.add("privacy-policy-modal--appear");
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
            modal.classList.contains("privacy-policy-modal--appear")
        )
            closeModal();
    });

    modal.addEventListener("click", function (event) {
        if (event.target.classList.contains("privacy-policy-modal--appear"))
            closeModal();
    });

    function closeModal() {
        const modalInner = modal.querySelector(".privacy-policy-modal__inner");
        modal.classList.remove("privacy-policy-modal--appear");
        setTimeout(() => {
            modalInner.remove();
            bodyElement.classList.remove("not-scrolling");
        }, 500);
    }
};
