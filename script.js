// lesson-12
/*Carousel overviews responsive*/
const startCarousel = () => {
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
        }).on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        })})};

const getResponse = async () => {
    console.log('Fetch todo started...');
    try {
        const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
        const content = await response.json();
        console.log(content);
        const list = document.getElementById('overviewsItems');
        let key;
        for (key in content) {
            list.innerHTML += (`
            <div class="overviews__item">
            <div class="overviews__img">
                <img src="${content[key].imageUrl}" alt="Pictures">
            </div>
            <div class="overviews__tittle">${content[key].name}</div>
            <div class="overviews__location">${content[key].city}, ${content[key].country}</div>
            </div>`);
        }
        startCarousel();
    } catch (e) {
        console.error(e);
    } finally {
    }
}
getResponse();

