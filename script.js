// lesson-12
//Carousel overviews responsive
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
const getResponseHotelsInformation = async () => {
    console.log('Fetch todo started...');
    try {
        const response = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
        const keyName = 'hotels';
        let data = sessionStorage.getItem(keyName);
        if (data) {
            data = JSON.parse(data);
            draw(data);
            return data;
        }
        data = await fetch(response).then(r => r.json());
        sessionStorage.setItem(keyName, JSON.stringify(data));
        //lesson15
        // Sorting an Array(data) of Objects(hotels) with bubbles sort
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
        for (i = 0; i < data.length; i++) {
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
getResponseHotelsInformation();

//lesson 11, 12-2;
const mainForm = document.getElementById("mainForm");
const inputs = mainForm.getElementsByClassName("thirdInputs");
const childrenSelectors = document.getElementById("childrenSelectors");

const inputsValidation = {

    adults: {
        min: 1,
        max: 30,
        defaultValue: 1,
        counterElementId: "adultsCounter",
    },
    children: {
        min: 0,
        max: 10,
        defaultValue: 0,
        counterElementId: "childrenCounter",
        additionalChanges: input => {
            const {value} = input;
            if (value > 0) {
                document.getElementById("childrenSelectorsTitle").style.display = "block";
            } else {
                document.getElementById("childrenSelectorsTitle").style.display = "none";
            }
            if ({value})
                childrenSelectors.innerHTML = "";
            for (let i = 0; i < value; i++) {
                const newSelect = document.createElement('select');
                newSelect.name = `select${i}`;
                for (let j = 1; j < 18; j++) {
                    newSelect.innerHTML += `<option value="${j}">${j} years old</option>`;
                }
                childrenSelectors.appendChild(newSelect);
            }
        },
    },
    rooms: {
        min: 1,
        max: 30,
        defaultValue: 1,
        counterElementId: "roomsCounter",
    },
};

const inputDefaultInitialization = (input) => {
    const {min, max, defaultValue, counterElementId, additionalChanges} = inputsValidation[input.name];
    input.value = defaultValue;
    const ElChang = () => {
        counterElement.textContent = input.value;
        if (additionalChanges) {
            additionalChanges(input);
        }
    }
    const counterElement = document.getElementById(counterElementId);
    counterElement.textContent = defaultValue;
    const btns = Array.prototype.slice.call(input.closest(".numberChanger").getElementsByTagName("button"));
    for (let btn of btns) {
        if (btn.textContent === "-") {
            btn.addEventListener('click', () => {
                const plusBtn = btns.find(btn => btn.textContent === "+");
                if (min < input.value) {
                    input.value--;
                    plusBtn.classList.add("btnActive");
                }
                if (input.value <= min) {
                    btn.classList.remove("btnActive");
                }
                ElChang()
            });
        } else {
            btn.addEventListener('click', () => {
                const minusBtn = btns.find(btn => btn.textContent === "-");
                if (max > input.value) {
                    input.value++;
                    minusBtn.classList.add("btnActive");
                }
                if (input.value >= max) {
                    btn.classList.remove("btnActive");
                }
                ElChang()
            });
        }
    }
};

for (let input of inputs) {
    inputDefaultInitialization(input);
}

const getChildrenSelectorValues = () => {
    const selectors = childrenSelectors.getElementsByTagName("select");
    const childAgesData = [];
    for (let selector of selectors) {
        childAgesData.push(selector.value);
    }
    return childAgesData.toString();
}

//Open/close Modal && add ActiveClass to input
const mainMenu = document.getElementById('mainMenu');
const menu = document.querySelector('.modalMenu');
const toggleMenu = function () {
    menu.classList.toggle('open');
    mainMenu.classList.toggle('third__inputActive')
}

mainMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
});
document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target === menu || menu.contains(target);
    const its_mainMenu = target === mainMenu;
    const menu_is_active = menu.classList.contains('open');

    if (!its_menu && !its_mainMenu && menu_is_active) {
        toggleMenu();
    }
});

//HT-12/2
//Carousel overviews responsive
const drawAvailableHotels = (dataAvailableHotels) => {
    const availableItems = document.getElementById('availableItems');
    availableItems.innerHTML = dataAvailableHotels.map(i => `
            <div class="overviews__item">
            <div class="overviews__img">
                <img src="${i.imageUrl}" alt="Pictures">
            </div>
            <div class="overviews__tittle">${i.name}</div>
            <div class="overviews__location">${i.city}, ${i.country}</div>
            </div>`).join('');
    console.log(drawAvailableHotels[0])
    console.log(dataAvailableHotels.length)
    console.log(dataAvailableHotels)
    while (dataAvailableHotels.length > 0) {
        dataAvailableHotels[0].parentNode.removeChild(dataAvailableHotels.length[0])
        console.log(dataAvailableHotels.length)
        console.log(dataAvailableHotels)
    }

};

const stopSlick = () => {
    $(function () {
        $('.availableHotels__slider').slick('unslick');
    })
}

mainForm.onsubmit = async (event) => {
    try {
        event.preventDefault();
        stopSlick();
        const searchText = document.getElementById('searchName').value;
        const adults = event.target.adults.value;
        const children = getChildrenSelectorValues();
        const rooms = event.target.rooms.value;
        const url = `https://fe-student-api.herokuapp.com/api/hotels?search=${searchText}&adults=${adults}&children=${children}&rooms=${rooms}`;
        const response = await fetch(url)
        const dataAvailableHotels = await response.json();
        document.getElementById("availableHotels").style.display = "block";
        drawAvailableHotels(dataAvailableHotels);
    } catch (e) {
        console.error(e);
    } finally {
        startCarousel2();
    }
};

const startCarousel2 = () => {
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