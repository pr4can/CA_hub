export const testimonials = (typeSlider) => {
    if (typeSlider == "one") {
        const slider = document.querySelector(".testimonials-one-slider");
        const swiper = slider.querySelector(".swiper");

        const fractions = slider.querySelectorAll(
            ".testimonials-one-slider-item__pagination"
        );
        const slides = swiper.querySelectorAll(".swiper-slide");
        const slideCount = slides.length;
        
        const btnsPrev = swiper.querySelectorAll(
            ".testimonials-one-slider-item__arrow--prev"
        );
        const btnsNext = swiper.querySelectorAll(
            ".testimonials-one-slider-item__arrow--next"
        );

        fractions.forEach((item) => {
            item.innerHTML = `<span>1</span> / ${slideCount}`;
        });

        const initializeSlider = new Swiper(swiper, {
            loop: true,
            fadeEffect: {
                crossFade: true,
            },
            effect: "fade",
            slidesPerView: 1,
            on: {
                slideChange: (slide) => {
                    fractions.forEach((item) => {
                        item.innerHTML = `<span>${
                            slide.realIndex + 1
                        }</span> / ${slideCount}`;
                    });
                },
            },
        });

        btnsPrev.forEach((btn) => {
            btn.addEventListener("click", function(event) {
                event.preventDefault();
                initializeSlider.slidePrev()
            })
        });
        btnsNext.forEach((btn) => {
            btn.addEventListener("click", function (event) {
                event.preventDefault();
                initializeSlider.slideNext();
            });
        });
        
    } else {
        const slider = document.querySelector(".testimonials-two-slider");
        const swiper = slider.querySelector(".swiper");

        const swiperPagination = slider.querySelector(
            ".testimonials-two-slider__pagination"
        );
        const swiperPrev = slider.querySelector(
            ".testimonials-two-slider__arrow--prev"
        );
        const swiperNext = slider.querySelector(
            ".testimonials-two-slider__arrow--next"
        );

        new Swiper(swiper, {
            loop: true,
            spaceBetween: 2.4,
            slidesPerView: 1,
            navigation: {
                nextEl: swiperNext,
                prevEl: swiperPrev,
            },
            pagination: {
                el: swiperPagination,
                clickable: true,
            },
        });
    }
}