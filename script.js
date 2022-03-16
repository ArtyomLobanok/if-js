import getResponseHotelsInformation from './js/module_getResponseHotelsInformation.js';
import { drawAvailableHotels, startCarousel2} from './js/module_AvailableHotels.js';
import {mainForm, getChildrenSelectorValues} from './js/module_inputDefaultInitialization.js';
import {mainMenu, menu, toggleMenu} from './js/module_toggleModalMenu.js';
import {datapicker} from './js/module_dataPicker.js';
import {tabDestinations, collapseDestinations, destinationsCarousel} from './js/module_Destinations.js'
import {reviewsCarousel} from "./js/module_Reviews.js";
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
const stopSlick = () => {
    $(function () {
        $('.availableHotels__slider').slick('unslick');
    })
};
mainForm.onsubmit = async (event) => {
    try {
        event.preventDefault();
        const searchText = document.getElementById('searchName').value;
        const adults = event.target.adults.value;
        const children = getChildrenSelectorValues();
        const rooms = event.target.rooms.value;
        const url = `https://fe-student-api.herokuapp.com/api/hotels?search=${searchText}&adults=${adults}&children=${children}&rooms=${rooms}`;
        const response = await fetch(url)
        const dataAvailableHotels = await response.json();
        document.getElementById("availableHotels").style.display = "block";
        stopSlick()
        drawAvailableHotels(dataAvailableHotels)
    } catch (e) {
        console.error(e);
    } finally {
        startCarousel2();
    }
};
getResponseHotelsInformation();
datapicker();
tabDestinations();
collapseDestinations();
destinationsCarousel();
reviewsCarousel();