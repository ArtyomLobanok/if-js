// lesson-12
const getResponse = async () => {
    const response = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular');
    const content = await response.json();
    console.log(content)
    const list = document.getElementById('overviewsItems')
    let key;
    for (key in content) {
        list.innerHTML += (`<div class="overviews__item">
     <div class="overviews__img">
     <img src="${content[key].imageUrl}" alt="Pictures">
     </div>
     <div class="overviews__tittle">${content[key].name}</div>
     <div class="overviews__location">${content[key].city}, ${content[key].country}</div>
     </div>`)
    }
}
getResponse()