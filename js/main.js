$(function () {
    // promo gallery
    $('section.section-gallery div.slick-slider').slick({
        infinite: true,
        dots: true,
    });

    $('div.products-list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // product gallery
    $('div.product-gallery').each(function () {
        $current = $('span.current', this);
        $length = $('span.length', this);

        $length.text($('div.slider-photo', this).length);

        $('div.slick-slider', this)
            .slick({
                nextArrow: $('button.slick-next', this),
                prevArrow: $('button.slick-prev', this),
            })
            .on('afterChange', function ($el, meta) {
                $current.text(meta.currentSlide + 1);
            });
    });

    // Instantiate new modal
    var modal = new Custombox.modal({
        content: {
            effect: 'fadein',
            target: '#card',
        },
    });

    // Open
    $('a.card-button').click(function (e) {
        e.preventDefault();
        modal.open();
    });
    $('#card a.close').click(function (e) {
        e.preventDefault();
        Custombox.modal.close();
    });
});
