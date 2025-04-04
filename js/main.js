$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1200,
                setting: {
                    dots: false
                }
            },
        ]
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1141,
                setting: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 846,
                setting: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 585,
                setting: {
                    slidesToShow: 1,
                }
            },
        ]
    })

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    })
});

