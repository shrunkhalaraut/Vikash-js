//CALL BACK HELL
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500; // 0 --- 5000
    setTimeout(() => {
        if (delay > 4000) //4 second
        {
            failure('connection Timeout :(')
        }
        else {
            success(`Here is you data from ${url}`);
        }
    }, delay)
}
fakeRequestCallback('books.com', function (msg) {
    console.log(`successful request, ${msg}`)
    // if successsful do one more thing
    fakeRequestCallback('home.com', function (msg) {
        console.log("success from 2nd req")
    }, function (msg) {
        console.log("failure from 2nd req")
    })
}, function (msg) {
    console.log(`failure request, ${msg}`)
})


//EX-2:
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500; // 0 --- 5000
    setTimeout(() => {
        if (delay > 4000) //4 second
        {
            failure('connection Timeout :(')
        }
        else {
            success(`Here is you data from ${url}`);
        }
    }, delay)
}
fakeRequestCallback('books.com', function (msg) {
    console.log(`successful request, ${msg}`)
    // if successsful do one more thing
    fakeRequestCallback('home.com', function (msg) {
        console.log("success from 2nd req")
    }, function (msg) {
        console.log("failure from 2nd req")
    })
}, function (msg) {
    console.log(`failure request, ${msg}`)
})

//CALL BACK TO PROMISE
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500; // 0 --- 5000
    setTimeout(() => {
        if (delay > 3000) //4 second
        {
            failure('connection Timeout :(')
        }
        else {
            success(`Here is you data from ${url}`);
        }
    }, delay)
}

fakeRequestCallback('books.com', function (msg) {
    console.log(`success from books.com`)
    // if successsful do one more thing
    fakeRequestCallback('home.com', function (msg) {
        console.log("success from home req")
        fakeRequestCallback('instagram.com', function (msg) {
            console.log("success from insta req")
        }, function (msg) {
            console.log("failure from insta req")
        })
    }, function (msg) {
        console.log("failure from home req")
    })
}, function (msg) {
    console.log(`failure from books.com`)

})
//Async example
onsole.log("faiza is here")

console.log("madhuri is here")

setTimeout(() => {

    console.log("shrnkhala joined late")

}, 3000)
console.log("chabi is here")

console.log("vikash is here")

console.log("komal is here")

// PROMISE QUESTIONS
// https://www.interviewbit.com/javascript-interview-questions/#use-of-promises
//PROMISE EX-1:
const fakeRequestCallback = (url) => {

    return new Promise((resolve, reject) => {

        const delay = Math.floor(Math.random() * 4500) + 500; // 0 --- 5000

        setTimeOut(() => {

            if (delay > 3000) {

                reject('connection timedout!')

            }

            else {

                resolve(`here is your data from ${url}`)

            }

        }, delay)

    })

}

const req = fakeRequestCallback('book.com');

req.then((data) => {

    console.log(data);

}).catch((error) => {

    console.log(error);

})

// promise 2 example .THEN AND .CATCH KEYWORD
const fakeRequestCallback = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500; // 0 --- 5000
        setTimeout(() => {
            if (delay > 7000) {
                reject('connection timedout!')
            }
            else {
                resolve(`here is your data from ${url}`)
            }
        }, delay)
    })
}
const req = fakeRequestCallback('book.com');
req.then((data) => {
    console.log(data);
    fakeRequestCallback('main.com')
        .then(() => {
            console.log("dusri baar error nhi aya!")

        })
        .catch(() => {
            console.log("error came");
        })
}).catch((error) => {
    console.log(error);

})