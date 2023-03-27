//closure: - a closure is a function that references to variable in the outer //scope from it's inner scope.
//ex: -1

let x = 5; //scope:- q
function xyz() { //scope:- p
    console.log(x);
}
xyz();
console.log(x);

//ex: 2

let msg2 = "vikash"
console.log(msg)
function greeting() {
    let msg1 = "hello";
    function sayHello() {
        //console.log(msg1);
    }
    sayHello();
}
greeting();

//ex: 3

function greeting(message) {
    return function (name) {
        return message + ' ' + name;
    }
}
let sayHello = greeting("hello");
sayHello = function (name) {
    return message + ' ' + name;
}
sayHello('komal');

//console.log(sayHello('komal'));

//ex4: -

function calculate(x) {
        function multiply(y) {
            return x * y;
        }
        return multiply;
    }
const multiply3 = calculate(3);
const multiply4 = calculate(4);
console.log(multiply3(8));

//ex5: -

    let a = 0;
function sum() {
    function increaseSum() {
        return a = a + 1;
    }
    return increaseSum;
}
const xyz = sum();
console.log(xyz());
console.log(xyz());
console.log(xyz());
a = a + 1;
console.log(a);

//ex6: -

    let a = 5;
function sum() {
    let a = 0; // a= 0
    function increaseSum() {
        return a = a + 1;
    }
    return increaseSum;
}
let xyz = sum();
console.log(xyz());
console.log(xyz());