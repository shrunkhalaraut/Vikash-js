
// map /filter:- 24 min (difference between map anmd filter)

const nums = [12, 13, 14, 15, 51, 32, 88];

const ans = nums.map(function (ele) {

    if (ele % 2 == 0) {

        return ele;

    }

})

console.log(ans);

// map:- new array with same length as parent array.

const nums2 = [12, 13, 14, 15, 51, 32, 88];

const ans2 = nums2.filter(function (ele) {

    if (ele % 2 == 0) {

        return ele;

    }

})

console.log(ans2);

//filter:- new array where length may be same or may not be.

//Reduce method(28 min -> 38min)

// reduce:- executes a reducer function on each element of the array,

// returns a single value.

const arr = [3, 5, 7, 9, 11];

const ans = arr.reduce((accumulator, currentValue) => {

    return accumulator - currentValue;

}, 100);

console.log(ans)

// This in arrow function :- 'this' keyword does not work inside arrow function(39 min)

//ex1:- 
const person = {

    first: 'vikash',

    last: 'kumar',

    fullname: () => {

        //console.log(this)

        return `${this.first} ${this.last}`

    }

}

console.log(person.fullname());

// Explain call(), apply() and, bind() methods. (51 min)

// 1) call:- call() method allows an object to use the method (function) of another object.

// ex:-1:-
function sayHello() {

    return "Hello " + "vikash";

}

var madhuri = {

    name: "madhuri",

};

let ans = sayHello.call(madhuri);

console.log(ans);

// ex:- 2 
var person = {

    age: 23,

    getAge: function () {

        console.log(this.age);

    }

}

var person2 = {

    age: 54

};

person.getAge.call(person2);

function sayHello(str, str2) {

    console.log(`Hello ${str} ${this.name} ${str2}`);

}

let komal = {

    name: 'faiza'

}

sayHello.call(komal, 'goodMorning', 'hi');

// // apply:- same as call method, only params is passed as array if present

sayHello.apply(komal, ['goodMorning', 'hi']);

bind: - This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter.

function sayHello() {

    console.log(`vikash says hi to ${this.name}`);

}

let obj = {

    name: 'faiza'

}

xyz = sayHello.bind(obj);

xyz();