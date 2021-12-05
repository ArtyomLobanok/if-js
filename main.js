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

/*FizzBuzz
Требуется написать функцию, выводящую в консоль числа от 1 до n,
где n — это целое число, которая функция принимает в качестве параметра,
с такими условиями:
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.*/

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
