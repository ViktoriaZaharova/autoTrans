$(document).ready(function() {
    $('.main__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.project__slider').slick({
        slidesToShow: 4,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendDots: $('.slider-nav'),
        appendArrows: $('.slider-nav'),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // mask phone
    $("input[name='phone']").mask("8(999) 999-99-99");

    $("form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('.modal__div').css('display', 'none').animate({
                opacity: 0,
                top: '45%'
            }, 200);
            $('#modal_thanks').css('display', 'flex').animate({
                opacity: 1,
                top: '50%'
            }, 200);
            $("form").trigger("reset");
        });
        return false;
    });


    // modal image
    $('[data-fancybox="images"]').fancybox();

    // $('.checkbox-custom').click(function () {
    //    $(this).toggleClass('checked');
    // });


});


// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end
