/*Carousel overviews responsive*/
$(function () {

    $('.overviews__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

     /*Tab destinations*/
     document.querySelectorAll('.tabs-triggers__item').forEach((item) =>
     item.addEventListener('click', function (e) {
         e.preventDefault();
         const id = e.target.getAttribute('href').replace('#', '');

         document.querySelectorAll('.tabs-triggers__item').forEach(
             (child) => child.classList.remove('tabs-triggers__item--active')
         );

         document.querySelectorAll('.tabs-content__item').forEach(
             (child) => child.classList.remove('tabs-content__item--active')
         );

         item.classList.add('tabs-triggers__item--active');
         document.getElementById(id).classList.add('tabs-content__item--active');
     })

 );

//Если нажали на Tabs
 $('.tabs-triggers__item').on('click', function () {
     $('.destinations__slider').slick('unslick');
     $('.destinations__slider').slick({
         infinite: true,
         draggable: false,
         swipe: false,
         speed: 1000,
         slidesToShow: 4,
         slidesToScroll: 1,
         arrows: false,
         variableWidth: false,
         responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                     arrows: true,
                     draggable: true,
                     swipe: true,
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     arrows: true,
                     draggable: true,
                     swipe: true,
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     arrows: true,
                     draggable: true,
                     swipe: true,
                 }
             },
             {
                 breakpoint: 360,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     arrows: true,
                     draggable: true,
                     swipe: true,
                 }
             }
         ]
     });
 });

 document.querySelector('.tabs-triggers__item').click();


    /*Collapse destinations*/
    $(document).ready(function () {
        $(".destinations__collapse").click(function () {
            $(".destinations__wrapper__second").toggleClass("active");
            return false;
        });
    });
    $(document).ready(function () {
        $(".destinations__collapse").click(function () {
            $(".destinations__collapse").toggleClass("active");
            return false;
        });
    });
    $(document).ready(function () {
        $(".destinations__collapse").click(function () {
            $(".destinations__arrow").toggleClass("active");
            return false;
        });
    });

});

/*Carousel Reviews responsive*/
    $('.destinations__slider').slick({
        infinite: true,
        draggable: false,
        swipe: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    draggable: true,
                    swipe: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    draggable: true,
                    swipe: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    draggable: true,
                    swipe: true,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    draggable: true,
                    swipe: true,
                }
            }
        ]
    });


$('.reviews__block').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    rows: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        }
    ]
})
    .on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });




