//lesson-14
    formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://fe-student-api.herokuapp.com/api/file', {
    method: 'POST',
    body: new FormData(formElem)
});

    let result = await response.json();

    console.log(result);
};
