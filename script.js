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
console.log(inputsValidation.adults.max)
console.log(inputsValidation.children.max)
console.log(inputsValidation.rooms.max)



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
    const btns = input.closest(".numberChanger").getElementsByTagName("button");
    for (let btn of btns) {
        if (btn.textContent === "-") {
            btn.addEventListener('click', () => {
                //TODO add styles changing
                if (min < input.value) {
                    input.value--;
                }
                ElChang()
            });
        } else {
            btn.addEventListener('click', () => {
                //TODO add styles changing
                if (max > input.value) {
                    input.value++;
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

//add color and remove colors btns +/-
if (defaultValue = 0) {
    let elements = document.getElementsByClassName("btnCounterPlus");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("btnActive");
    }
}
else if (defaultValue < 31) {
    let elements = document.getElementsByClassName("btnCounterPlus");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("btnActive");
    }
}
else if (defaultValue >= 1) {
    let elements2 = document.getElementsByClassName("btnCounterMin");
    for (let i = 0; i < elements2.length; i++) {
        elements2[i].classList.add("btnActive");
    }
}
else if (defaultValue <= 1) {
    let elements2 = document.getElementsByClassName("btnCounterMin");
    for (let i = 0; i < elements2.length; i++) {
        elements2[i].classList.remove("btnActive");
    }
}

/*Open/close Modal */
const openM = () => {
    const Main = document.getElementById("openModalW");
    const modalMenu = document.getElementById("modalMenu");
    const test = document.getElementById("test1");
Main.onclick = openModal;
function openModal() {
    modalMenu.style.display = "block";
}
    window.onclick = closeModal;
function closeModal() {
    modalMenu.style.display = "none";
}
}
openM()

/*HT-12/2 */
mainForm.onsubmit = async (event) => {
    event.preventDefault();
    const adults = event.target.adults.value;
    const children = getChildrenSelectorValues();
    const rooms = event.target.rooms.value;
    const res = await fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=us&adults=${adults}&children=${children}&rooms=${rooms}`)
    const resJSON = await res.json();
    console.log(resJSON);
    console.log(getChildrenSelectorValues())
}
