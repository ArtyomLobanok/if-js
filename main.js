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
test+=1;
test-=1;
console.log(test);
console.log(typeof test);
test=Boolean(test);
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

