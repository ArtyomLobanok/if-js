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
        })
    })
};

export const getResponseHotelsInformation = async () => {
    console.log('Fetch todo started...');
    try {
        const response = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
        const keyName = 'hotels';
        let data = sessionStorage.getItem(keyName);
        if (data) {
            data = JSON.parse(data);
            draw(data)
            console.log(data)
            return data;
        }
        data = await fetch(response).then(r => r.json());
        sessionStorage.setItem(keyName, JSON.stringify(data));
        console.log(data)
        function bubbleSort(arrName, keyName) {
            let swapped;
            do {
                swapped = false;
                for (let i = 0; i < arrName.length - 1; i++) {
                    if (arrName[i][keyName] > arrName[i + 1][keyName]) {
                        let temp = arrName[i];
                        arrName[i] = arrName[i + 1];
                        arrName[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }

        bubbleSort(data, 'name');
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
        draw(data)
        return data;
    } catch (e) {
        console.error(e);
    } finally {
        startCarousel();
    }
};

const draw = (data) => {
    const overviewsItems = document.getElementById('overviewsItems');
    data.forEach(hotelCard => {
        overviewsItems.innerHTML += (`
            <div class="overviews__item">
            <div class="overviews__img">
                <img src="${hotelCard.imageUrl}" alt="Pictures">
            </div>
            <div class="overviews__tittle">${hotelCard.name}</div>
            <div class="overviews__location">${hotelCard.city}, ${hotelCard.country}</div>
            </div>`);
    });
};

export default getResponseHotelsInformation;
