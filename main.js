/*//lesson-1
//!*srednee znachenie
const NumsArray = [1,4,7,8,12,3,9];
const SumArray = (a, b) => a + b;
console.log(NumsArray.reduce(SumArray));
let ElementsArray = NumsArray.length;
console.log(ElementsArray);
const result = NumsArray.reduce(SumArray)/ElementsArray;
console.log(result);

//lesson-2
//1 stage ht
let user = "John Doe";
console.log(user);
let student = "Lobanok Artsiom";
console.log(student);
student +=user;
console.log(user);

//2 stage ht
let test;
test=1;
test++;
test+='1';
console.log(test);
test-=1;
console.log(test);
console.log(typeof test);
test=!!test;
console.log(test);
console.log(typeof test);

//3 stage ht
let result = 1;
let array = [2, 3, 5, 8];
for (let i=0; i<array.length; i++) {
    result=result*array[i];
}
console.log(result)

//4 stage ht
let arr2= [2, 5, 8, 15, 0, 6, 20, 3];
for (let i=0; i<arr2.length; i++) {
    if (arr2[i]>5 && arr2[i]<10) {
        console.log(arr2[i])
    }
}

//5 stage ht
let arr3= [2, 5, 8, 15, 0, 6, 20, 3];
for (let i=0; i<arr2.length; i++) {
    if (arr2[i]%2 === 0) {
        console.log(arr3[i])
    }
}

//task*
// Числа, кратные 3 или 5
// Если выписать все натуральные числа меньше 10, кратные 3 или 5,
// то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.

let sum = 0;
let number = 1000;
for ( let i = 0; i <number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);

//task*
/!*FizzBuzz
Требуется написать функцию, выводящую в консоль числа от 1 до n,
где n — это целое число, которая функция принимает в качестве параметра,
с такими условиями:
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.*!/

function  func(number) {
    for(let i=1; i<=number; i++){
        let resultNumber = i;
        if(Number.isInteger(i)) {
            if(i % 3 === 0) {
                resultNumber = 'fizz';
            }
            if(i % 5 === 0) {
                resultNumber = "buzz";
            }
            if(i % 3 === 0 && i % 5 === 0) {
                resultNumber = 'fizzbuzz';
            }
        }
        console.log(resultNumber);
    }
}
func(15);

lesson-3

//ht 3-1 Palindrome
Kyle Walker, [02.12.2021 21:59]
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

//ht 3-1-2 Palindrome
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
}*/

/*//ht 3-1-3 Palindrome
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
}*/

/*//ht 3-2-1
/*Функция min(a, b) и функция max(a,b):
напишите функцию min(a,b), которая возвращает меньшее из чисел;
напишите функцию max(a,y), которая возвращает большее из чисел;
попробуйте переписать функцию, используя тернарный оператор.*/

/*function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}*/
/*//ht 3-2-2 с тернарным оператором min
function min(a, b) {
    return a < b ? a : b;
}
//ht 3-2-2 с тернарным оператором max
function max(a, b) {
    return a > b ? a : b;
}*/

/*//ht 3-3
//Замена элементов массива:
// создайте массив с десятью случайными элементами от 0 до 100;
// напишите функцию, которая будет заменять все 0 на строку 'zero';
// выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]).
let array = [];
let n = 0;
let m = 100;
let count = 10;
for (let i = 0; i < count; i++) {
    array.push(Math.round(Math.random() * (m - n) + n));
}
console.log(array);
for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i]) && array[i] % 10 === 0) {
        array[i] = array[i].toString().replaceAll('0', 'zero');
    }
}
console.log(array);*/

/*//ht 4-1*
//Вывести в ряд N-ое количество числел Фибоначи
//https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8
//fibonacci(4) -> 0, 1, 1, 2

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(4));*/

/*//ht 4-2*сделать значения в массиве уникальными
//uniqueFunc([1,5,2,3,4,3,2,4,1,5,6])

function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
let arr = [1,5,2,3,4,3,2,4,1,5,6];
console.log(unique(arr) );*/
