export const drawAvailableHotels = (dataAvailableHotels) => {
    const availableItems = document.getElementById('availableItems');
    availableItems.innerHTML = dataAvailableHotels.map(i => `
            <div class="overviews__item">
            <div class="overviews__img">
                <img src="${i.imageUrl}" alt="Pictures">
            </div>
            <div class="overviews__tittle">${i.name}</div>
            <div class="overviews__location">${i.city}, ${i.country}</div>
            </div>`).join('');
    while (dataAvailableHotels.length > 0) {
        dataAvailableHotels[0].parentNode.removeChild(dataAvailableHotels.length[0])
    }
};

export const startCarousel2 = () => {
    $(function () {
        $('.availableHotels__slider').slick({
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
        })
    })
        .on('setPosition', (event, slick) => {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        })
};

