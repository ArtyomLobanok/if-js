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

//lesson-4
//Home-task-4
//№1 Carry sum console.log(sum(5)(2))
/*const discount = 2;
const price = 5;
function sum(a) {
    return function(b) {
        return a + b;
    };
}
console.log(sum(discount)(price))*/


/*//№2 Покрасьте абзацы по клику (событие click)
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let currentColor=0;
    document.getElementById("text1").addEventListener("click",
    function col() {
        currentColor++;
        if (currentColor>colors.length) currentColor=0;
        const temp = document.getElementById("text1");
        temp.style.color = colors[currentColor];
    })
document.getElementById("text2").addEventListener("click",
    function col() {
        currentColor++;
        if (currentColor>colors.length) currentColor=0;
        const a = document.getElementById("text2");
        a.style.color = colors[currentColor];
    })
document.getElementById("text3").addEventListener("click",
    function col() {
        currentColor++;
        if (currentColor>colors.length) currentColor=0;
        const a = document.getElementById("text3");
        a.style.color = colors[currentColor];
    })*/

//lesson-5
//Home-task-5

//№1 Преобразование формата даты
/*

function ChangeDate(date) {
    const dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/;
    if (!date.replace(dateReg, '')) {
        date = date.split('-').reverse().join('.');
        return date;
    }
    {
        return 'Error, entered data incorrect, please enter data in format (yyyy-mm-dd)';
    }
}
console.log(ChangeDate('1990-12-02'))
console.log(ChangeDate('2020-11-26'))
console.log(ChangeDate('19900-12-02'))

//№2 Поиск объектов размещения:

const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const formatStr = (RestPlace) => Object.values(RestPlace).join(',')

function getSearchHotel(str, data) {
    const reg = new RegExp(str, 'i')
    return data
        .filter((RestPlace) => reg.test(formatStr(RestPlace)))
        .map(RestPlace => formatStr(RestPlace));
}

console.log(getSearchHotel("ber", data));

*/

/*//lesson-6
//№1
const palindrome = CheckWordForPalindrome => CheckWordForPalindrome === CheckWordForPalindrome.split('').reverse().join('');
console.log(palindrome('madam'));

//№2
const hotels2 = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
];
const formatStr = (FindPlace) => Object.values(FindPlace).reverse().join(', ')

const getSearchHotel = (str, hotels2) => {
    const reg = new RegExp(str, 'i')
    return hotels2
        .filter((FindPlace) => reg.test(formatStr(FindPlace)))
        .map(FindPlace => formatStr(FindPlace));
}
console.log(getSearchHotel('Vienna', hotels2));

//№3

const hotels = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
];
    const separatedBetweenCounties = {};

    hotels.forEach(el => {
        if (separatedBetweenCounties[el.country] && !separatedBetweenCounties[el.country].includes(el.city)) {
            separatedBetweenCounties[el.country].push(el.city);
        } else {
            separatedBetweenCounties[el.country] = [el.city];
        }
    })

    console.log(separatedBetweenCounties);*/
//lesson-7
//№1
const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

const deepEqual = (object1, object2) => {
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);
    if (object1Keys.length !== object2Keys.length) {
        return false;
    }
    for (let key of object1Keys) {
        if (typeof object2[key] === "undefined") {
            return false;
        } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
            if (object1[key].length !== object2[key].length) {
                return false;
            }
            object1[key].sort(function (a, b) {
                return a - b;
            });
            object2[key].sort(function (a, b) {
                return a - b;
            });
            for (let i in object2[key]) {
                if (object1[key][i] !== object2[key][i]) {
                    return false;
                }
            }
        } else if (object1[key] instanceof Object && object2[key] instanceof Object) {
            const isRecursiveCheckSuccess = deepEqual(object1[key], object2[key]);
            if (!isRecursiveCheckSuccess) {
                return false;
            }
        } else if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

//№2
const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
    const resultMonthArray = [];
    let weekArray = [];
    let currentWeekDay = 0;

    //добиваем первую неделю
    if (dayOfWeek) {
        for (let i = 0; i < dayOfWeek; i++) {
            weekArray.unshift(daysInMonth - i);
        }
        while (weekArray.length < daysInWeek) {
            weekArray.push(++currentWeekDay);
        }
        resultMonthArray.push(weekArray);
    }

    currentWeekDay++;
    weekArray = [];

    //основная часть месяца
    for(let i=currentWeekDay; i<=daysInMonth; i++) {
        if(weekArray.length === daysInWeek) {
            resultMonthArray.push(weekArray);
            weekArray = [i];
            currentWeekDay = i;
        } else {
            weekArray.push(i);
        }
    }

    //добиваем последнюю неделю
    if(currentWeekDay <= daysInMonth) {
        weekArray = [];
        while (weekArray.length < daysInWeek) {
            if(currentWeekDay > daysInMonth) {
                currentWeekDay = 1;
            }
            weekArray.push(currentWeekDay++);
        }
        resultMonthArray.push(weekArray);
    }

    return resultMonthArray;
}

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4; // в моем примере понедельник равен 0. У вас может отличаться
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);
console.log(calendarMonth);