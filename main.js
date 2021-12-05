/*
Является ли строка палиндромом?
1. шалаш - является
2. паста - не является
3. мадам - является
*/
//1
palindrome1('шалаш');
palindrome1('паста');
palindrome1('мадам');
palindrome1('Анна');
palindrome1('А роза упала на лапу Азора');

function palindrome1(str) {
    str = str.toUpperCase().replace(/\s/g, '');
    return str === str.split('').reverse().join('');
}

//2
palindrome2('шалаш');
palindrome2('паста');
palindrome2('мадам');
palindrome2('Анна');
palindrome2('А роза упала на лапу Азора');

function palindrome2(str) {
    str = str.toUpperCase().replace(/\s/g, '');
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    return true;
}

//3 recr
palindrome3('шалаш');
palindrome3('паста');
palindrome3('мадам');
palindrome3('Анна');
palindrome3('А роза упала на лапу Азора');

function palindrome3(str) {
    str = str.toUpperCase().replace(/\s/g, '');
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return palindrome3(str.slice(1, -1))
    return false;
}

/*console.log(palindrome3('шалаш'))
console.log(palindrome3('паста'))
console.log(palindrome3('мадам'))
console.log(palindrome3('Анна'))
console.log(palindrome3('А роза упала на лапу Азора'))*/
/*
вывести матрицу в консоль с отступами и переходами на новую строку(https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%80%D0%B8%D1%86%D0%B0_(%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0))
1 2 3
4 5 6
7 8 9
*/
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
let out = '';
/*console.log(matrix);*/
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++){
        console.log(matrix[row][col]);
        out +=matrix[row][col] + ' ';
    }
    out += '<br>';
}
document.querySelector('.out').innerHTML = out;
