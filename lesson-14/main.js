//lesson-14

formElem.onsubmit = async (e) => {
    const contentOptions = {
        method: 'POST',
        'Content-type':"multipart/form-data",
        body: new FormData(formElem)
    };
    e.preventDefault();
    let response = await fetch('https://fe-student-api.herokuapp.com/api/file',
        contentOptions);
    let result = await response.json();
    console.log(result);
};
document.body.onload = addElement;
let input = document.getElementById('inpFile');
let prevImg = document.getElementById("myDiv");
const previewImage = prevImg.querySelector('.image-preview__image');
const previewDefaultText = prevImg.querySelector('.whatToDo');

inpFile.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";

        reader.addEventListener("load", function () {
            console.log(this);
            previewImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
    ;
});

function addElement() {
    const triggerInput = () => input.click()
    prevImg.addEventListener('click', triggerInput);
};
