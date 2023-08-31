//Panther
$(document).ready(function () {
    $(".panther-ic").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        prevArrow:
            `<button type='button' class='slick-prev pull-left' style='margin-left:-40px'><i class="fa-solid fa-chevron-up fa-rotate-270 fa-2xs" style="color: #3d81f5;"></i></button>`,
        nextArrow:
            `<button type='button' class='slick-next pull-right' style='margin-right:-40px'><i class="fa-solid fa-chevron-up fa-rotate-90 fa-2xs" style="color: #3d81f5;"></i></button>`
    });
});
//Banner
$(document).ready(function () {
    $(".banner-slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow:
            `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-chevron-up fa-rotate-270 fa-2xs" style="color: #3d81f5;"></i></button>`,
        nextArrow:
            `<button type='button' class='slick-next pull-right' ><i class="fa-solid fa-chevron-up fa-rotate-90 fa-2xs" style="color: #3d81f5;"></i></button>`
    });
});
//Product
$(document).ready(function () {
    $('.product-form').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
            `<button type='button' class='slick-prev pull-left' style='margin-left: -40px;'><i class="fa-solid fa-chevron-up fa-rotate-270 fa-2xs" style="color: #3d81f5;"></i></button>`,
        nextArrow:
            `<button type='button' class='slick-next pull-right' style='margin-right: -40px;'><i class="fa-solid fa-chevron-up fa-rotate-90 fa-2xs" style="color: #3d81f5;"></i></button>`
    });
});
//Feedback
$(document).ready(function () {
    $('.slick-feedback').slick({
        autoplaySpeed: 2000,
        autoplay:true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
})
//Envent
$(document).ready(function () {
    $('.ev').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:
            `<button type='button' class='slick-prev pull-left' ><i class="fa-solid fa-chevron-up fa-rotate-270 fa-2xs" style="color: #3d81f5;"></i></button>`,
        nextArrow:
            `<button type='button' class='slick-next pull-right' ><i class="fa-solid fa-chevron-up fa-rotate-90 fa-2xs" style="color: #3d81f5;"></i></button>`
    });
});
// Button scrowp top

// Test

// $(document).ready(function () {
//     $('.slick-envent').slick({
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//         nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
//     });
// })

$(document).ready(function () {
    $('.slick-event').slick({
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
  });




