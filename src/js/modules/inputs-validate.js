import { phoneMask } from "./phone-mask.js";

export const inputsValidate = () => {
    const inputsOnlyLetters = document.querySelectorAll(".only-letters");

    inputsOnlyLetters.forEach((input) => {
        input.addEventListener("input", function (event) {
            const inputValue = event.target.value;
            const letters = /^[\p{L}\s]+$/u;
            if (!letters.test(inputValue)) {
                event.target.value = inputValue.slice(0, -1);
            }
        });
    });

    phoneMask();
};
