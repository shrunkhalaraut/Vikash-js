//CALL BACK
//EX-1:
const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const is RightAngled = (a, b, c) => {
    square(a) + square(b) === sqaure(c);
}
//EX-2:
setTimeout(() => {

    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'blue';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow'
        }, 1000)
    }, 1000)
}, 1000)

//EX-3:
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
        document.body.style.backgroundColor = 'blue';
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow'
            setTimeout(() => {
                document.body.style.backgroundColor = 'green'
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);

}
// EX-5:

 xyz = setTimeout(() => { 
document.body.style.backgroundColor = blue; 
}, 1000); 
delayedColorChange('red', 1000, () => {
    delayedColorChange('yellow', 1000, () => {
        delayedColorChange('blue', 1000)
    })
})