// lesson-12
const getResponse = async () => {
    console.log('Fetch todo started...')
    try {
        const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
        const content = await response.json();
        console.log(content)
        const list = document.getElementById('overviewsItems')
        let key;
        for (key in content) {
            list.innerHTML += (`
            <div class="overviews__item">
            <div class="overviews__img"></div>
    <img src="${content[key].imageUrl}" alt="Pictures">
    </div>
    <div class="overviews__tittle">${content[key].name}</div>
    <div class="overviews__location">${content[key].city}, ${content[key].country}</div>
    </div>`)
        }
    } catch (e) {
        console.error(e)
    } finally {
    }
}
getResponse()

/*
//lesson-10
let itemsOut = document.querySelector('.overviews__items');
const data = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
];

document.getElementById('overviewsItems').innerHTML = data.map(i =>
    `<div class="overviews__item">
    <img class="overviews__img" src="${i.imageUrl}" alt="Pictures">
    <div class="overviews__tittle">${i.name}</div>
    <div class="overviews__location">${i.city}, ${i.country}</div>
    </div>`).join('');*/
