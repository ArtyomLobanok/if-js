export const tabDestinations = () => {
    const tabTriggersItems = document.querySelectorAll('.tabs-triggers__item');
    const tabsContentItems = document.querySelectorAll('.tabs-content__item');
const startTab = () => {
    $('.tabs-triggers__item').on('click', () => {
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
}
    tabTriggersItems.forEach((item) =>
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const changeClass = event.target.getAttribute('href').replace('#', '');
            tabTriggersItems.forEach(
                (child) => child.classList.remove('tabs-triggers__item--active')
            );
            tabsContentItems.forEach(
                (child) => child.classList.remove('tabs-content__item--active')
            );
            item.classList.add('tabs-triggers__item--active');
            document.getElementById(changeClass).classList.add('tabs-content__item--active');
        })
    )
    startTab()
};
tabDestinations()

export const collapseDestinations = () => {
$(document).ready(() => {
    $(".destinations__collapse").click(() => {
        $(".destinations__wrapper__second").toggleClass("active");
        return false;
    });
});
$(document).ready(() => {
    $(".destinations__collapse").click(() =>{
        $(".destinations__collapse").toggleClass("active");
        return false;
    });
});
$(document).ready(() => {
    $(".destinations__collapse").click(() => {
        $(".destinations__arrow").toggleClass("active");
        return false;
    });
});
}

export const destinationsCarousel = () => {
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
    })
};






