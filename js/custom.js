$(function () {
    $('.left_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slide'
    });
    $('.right_slide').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.left_slide'
    });

    $('.mainContent .arrows .prev').on('click', function () {
        $('.left_slide').slick('slickPrev')
    })
    $('.mainContent .arrows .next').on('click', function () {
        $('.left_slide').slick('slickNext')
    })
})