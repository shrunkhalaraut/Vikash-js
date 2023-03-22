
custom filter

vikash = {

    nums: [36, 15, 19, 18, 200, 567892],

    filter: function (callback) {

        let newArr = [];

        for (let i of this.nums) {

            if (callback(i)) {

                newArr.push(i);

            }

        }

        return newArr;

    }

}

const ans = vikash.filter(ele => {

    return ele % 2 != 0;

})

console.log(ans);

// Online Javascript Editor for free

// Write, Edit and Run your Javascript code using JS Online Compiler

// Map:- create a new array, with the results of calling a callback on every element

const nums = [36, 15, 19, 18, 200, 567892];

const evens = nums.filter(ele => {

    return ele % 2 == 0;

});

console.log(evens);

// custom of filter , map, forEach

//custom filter

vikash = {
    nums: [36, 15, 19, 18, 200, 567892],

    filter: function (callback) {

        let newArr = [];

        for (let i of this.nums) {

            if (callback(i)) {

                newArr.push(i);

            }

        }

        return newArr;

    }

}

const ans = vikash.filter(ele => {

    return ele % 2 != 0;

})

console.log(ans);
// SET TIMEOUT
console.log("Hello....")

setTimeout(function () {

    console.log("retrying")

}, 5000)

console.log("I am going!!")
// SET INTERVAL
const id = setInterval(() => {

    console.log(Math.random());

}, 3000)

for (let i = 0; i < 5; i++) {

    console.log(id);

}