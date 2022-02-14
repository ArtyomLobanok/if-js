//lesson-14

formElem.onsubmit = async (e) => {
    const contentOptions = {
        method: 'POST',
        'Content-type': "multipart/form-data",
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
});

function addElement() {
    const triggerInput = () => input.click()
    prevImg.addEventListener('click', triggerInput);
};

//lesson-15 /6
//Используюя структуру данных Stack, напишите функцию, которая будет
// проверять правильность синтаксиса фигурных скобок в объекте js по строке.
// Пример валидных входных данных: {user: {name: "John", age: 21}}
// Пример невалидных входных данных: {user: {name: }{"John", age: 21{}}

let test = function (str) {
    let chars = str.split(''),
        stack = [],
        open = ['{', '{'],
        close = ['}', '}'],
        closeIndex,
        openIndex;
    for (let i = 0, len = chars.length; i < len; i++) {
        openIndex = open.indexOf(chars[i]);
        if (openIndex !== -1) {
            stack.push(openIndex);
            continue;
        }
        closeIndex = close.indexOf(chars[i]);
        if (closeIndex !== -1) {
            openIndex = stack.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        };
    };
    if (stack.length !== 0) {
        return false;
    };
    return true;
};
console.log(test('{user: {name: "John", age: 21}}'));//true
console.log(test('{user: {name: }{"John", age: 21{}}'));//false
console.log(test('{{user:} {name: }{"John", age: 21{}}'));//false
console.log(test('{lastName: Smith} {firstName: Johm, age: 19, lang: ru}'));//true