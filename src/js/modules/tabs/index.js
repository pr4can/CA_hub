export const tabs = () => {
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

    const tabsBtn = document.querySelector(".tabs-btn");
    const tabsContent = document.querySelector(".tabs-content");

    const tabsBtnSlider = tabsBtn.querySelector(".swiper");
    const tabsContentSlider = tabsContent.querySelector(".swiper");

    const swiperPrev = tabsContent.querySelector(".tabs-content__arrow--prev");
    const swiperNext = tabsContent.querySelector(".tabs-content__arrow--next");

    const tabsBtnSwiper = new Swiper(tabsBtnSlider, {
        // slidesPerView: 4,
        loop: false,
        spaceBetween: fontSize * 0.8,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                freeMode: true,
                direction: "horizontal",
            },
            568: {
                slidesPerView: 4,
                freeMode: true,
                direction: "horizontal", // "vertical"
            },
        },
    });

    const tabsContentSwiper = new Swiper(tabsContentSlider, {
        loop: false,
        fadeEffect: {
            crossFade: true,
        },
        effect: "fade",
        slidesPerView: 1,
        navigation: {
            nextEl: swiperNext,
            prevEl: swiperPrev,
        },
        thumbs: {
            swiper: tabsBtnSwiper,
        },
    });

    swiperNext.addEventListener("mouseover", function (event) {
        swiperNext.classList.add("tabs-content__arrow--show");
    });
    swiperNext.addEventListener("mouseout", function (event) {
        swiperNext.classList.remove("tabs-content__arrow--show");
    });

    swiperPrev.addEventListener("mouseover", function (event) {
        swiperPrev.classList.add("tabs-content__arrow--show");
    });
    swiperPrev.addEventListener("mouseout", function (event) {
        swiperPrev.classList.remove("tabs-content__arrow--show");
    });

    tabsContent.addEventListener("mousemove", function (event) {
        const halfScreen = window.innerWidth / 2;
        if (event.clientX > halfScreen) {
            swiperNext.classList.add("tabs-content__arrow--show");
            swiperPrev.classList.remove("tabs-content__arrow--show");
        } else {
            swiperPrev.classList.add("tabs-content__arrow--show");
            swiperNext.classList.remove("tabs-content__arrow--show");
        }
    });

    tabsContent.addEventListener("mouseout", function (event) {
        swiperPrev.classList.remove("tabs-content__arrow--show");
        swiperNext.classList.remove("tabs-content__arrow--show");
    });
}
