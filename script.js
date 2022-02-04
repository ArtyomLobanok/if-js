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

const getResponseHotelsInformation = async () => {
    console.log('Fetch todo started...');
    try {
        const overviewsItems = document.getElementById('overviewsItems');
        const response = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
        const keyName = 'hotels';
        let data = sessionStorage.getItem(keyName);
        console.log(data)
        const hotels = JSON.parse(data);
        console.log(hotels)
        let key;
        for (key in hotels) {
            overviewsItems.innerHTML += (`
            <div class="overviews__item">
            <div class="overviews__img">
                <img src="${hotels[key].imageUrl}" alt="Pictures">
            </div>
            <div class="overviews__tittle">${hotels[key].name}</div>
            <div class="overviews__location">${hotels[key].city}, ${hotels[key].country}</div>
            </div>`);
        }
        startCarousel();
        if(data){
                return JSON.parse(data);
        }
        data = await fetch(response).then(r => r.json());
        sessionStorage.setItem(keyName, JSON.stringify(data));
        return data;
    } catch (e) {
        console.error(e);
    } finally {
    }
}
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
            const { value } = input;
            if (value > 0) {
                document.getElementById("childrenSelectorsTitle").style.display = "block";
            } else {
                document.getElementById("childrenSelectorsTitle").style.display = "none";
            }
            if ({ value })
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
    const { min, max, defaultValue, counterElementId, additionalChanges } = inputsValidation[input.name];
    input.value = defaultValue;
    const ElChang = () => {
        counterElement.textContent = input.value;
        if (additionalChanges) {
            additionalChanges(input);
        }}
    const counterElement = document.getElementById(counterElementId);
    counterElement.textContent = defaultValue;
    const btns = Array.prototype.slice.call( input.closest(".numberChanger").getElementsByTagName("button") );
    for (let btn of btns) {
        if (btn.textContent === "-") {
            btn.addEventListener('click', () => {
                const plusBtn = btns.find(btn => btn.textContent === "+");
                if (min < input.value) {
                    input.value--;
                    plusBtn.classList.add("btnActive");
                }
                if(input.value <= min) {
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
                if(input.value >= max) {
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

/*Open/close Modal && add ActiveClass to imput */
const mainMenu = document.getElementById('mainMenu');
const menu = document.querySelector('.modalMenu');
const toggleMenu = function() {
    menu.classList.toggle('open');
    mainMenu.classList.toggle('third__inputActive')
}

mainMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});
document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target === menu || menu.contains(target);
    const its_mainMenu = target === mainMenu;
    const menu_is_active = menu.classList.contains('open');

    if (!its_menu && !its_mainMenu && menu_is_active) {
        toggleMenu();
    }
});


/*HT-12/2 */
mainForm.onsubmit = async (event) => {
    event.preventDefault();
    const adults = event.target.adults.value;
    const children = getChildrenSelectorValues();
    const rooms = event.target.rooms.value;
    const response = await fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=us&adults=${adults}&children=${children}&rooms=${rooms}`)
    const resJSON = await response.json();
    console.log(resJSON);
    console.log(getChildrenSelectorValues());
}
