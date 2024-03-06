export const slider = () => {
    var resizeTimer;

    initializeSlider();
    window.addEventListener("resize", resizeHandler);

    function resizeHandler() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            initializeSlider();
        }, 500);
    }
};

function initializeSlider() {
    const htmlEl = document.querySelector("html");
    const htmlStyles = window.getComputedStyle(htmlEl);
    const fontSize = Number(htmlStyles.fontSize.slice(0, -2));

    const slider = document.querySelector(".slider-box");
    const swiper = slider.querySelector(".swiper");
    
    const swiperPagination = slider.querySelector(".slider-box__pagination");
    const swiperPrev = slider.querySelector(".slider-box__arrow--prev");
    const swiperNext = slider.querySelector(".slider-box__arrow--next");

    if (slider.classList.contains("slider-box--hidden-arrows")) {
        swiperNext.addEventListener("mouseover", function (event) {
            swiperNext.classList.add("slider-box__arrow--show");
        });
        swiperNext.addEventListener("mouseout", function (event) {
            swiperNext.classList.remove("slider-box__arrow--show");
        });

        swiperPrev.addEventListener("mouseover", function (event) {
            swiperPrev.classList.add("slider-box__arrow--show");
        });
        swiperPrev.addEventListener("mouseout", function (event) {
            swiperPrev.classList.remove("slider-box__arrow--show");
        });

        swiper.addEventListener("mousemove", function (event) {
            const halfOfSliderView = window.innerWidth / 2; // Значение, если слайдер по середине экрана или занимает всю ширину
            // const halfOfSliderView = (window.innerWidth * 2) / 3; Значение, если слайдер занимает примерно половину и прижат к правому краю
            // const halfOfSliderView = window.innerWidth / 3; Значение, если слайдер занимает примерно половину и прижат к левому краю
            if (event.clientX > halfOfSliderView) {
                swiperNext.classList.add("slider-box__arrow--show");
                swiperPrev.classList.remove("slider-box__arrow--show");
            } else {
                swiperPrev.classList.add("slider-box__arrow--show");
                swiperNext.classList.remove("slider-box__arrow--show");
            }
        });

        swiper.addEventListener("mouseout", function (event) {
            swiperPrev.classList.remove("slider-box__arrow--show");
            swiperNext.classList.remove("slider-box__arrow--show");
        });
    }

    new Swiper(swiper, {
        loop: true,
        spaceBetween: fontSize * 2.4,
        navigation: {
            nextEl: swiperNext,
            prevEl: swiperPrev,
        },
        pagination: {
            el: swiperPagination,
            clickable: true,
            // включение счетчика слайдеров вместо пагинации точками
            // type: "fraction",
        },
        breakpoints: {
            0: {
                slidesPerGroup: 1,
                slidesPerView: 1,
            },
            569: {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },
        },
    });
}
