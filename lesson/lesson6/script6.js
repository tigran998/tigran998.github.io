// let spread = [3, 53, 5]
// let spread1 = [3, 34, ...spread, 12]
// alert(spread1)

// function foo(...a) {
//     alert(a)
// }
// foo(2, 24, 45, 788)


// let a = {
//     name: 'Joe',
//     phone: '5354323'
// }
// let b = {
//     lastname: 'Jackson',
//     ...a,
//     name: 'Jack',
// }

// alert(JSON.stringify(b, undefined, 2))
///////////////////////////////////////////////////

// function max(arr) {
//     let maxVal = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         const val = arr[i]
//         if (val > maxVal) {\watch
//             maxVal = val
//         }

//     }
//     return maxVal

// }
// alert(max([5, 28, 99, 23, 100, 32]))

// function max(arr) {
//     return arr.reduce(function (aggr, val) {
//         if (val > aggr) {
//             return val
//         }
//         return aggr
//     })
// }
// alert(max([5, 28, 99, 23, 100, 32]))

///////////////////////////
// function max(arr) {
//     return arr.reduce(function (aggr, val) {
//         return Math.max(aggr,val)
//     })
// }
// alert(max([5, 28, 99, 23, 100, 32]))
////////////
// function max(arr){
//     return Math.max(...arr)
// }
// alert( max([5, 28, 99, 23, 100, 32]))
// //////////////
// alert(Math.max(...[5, 28, 99, 23, 100, 32]))
// //////////////////////////
// alert(Math.max(5, 28, 99, 23, 100, 32))
//////////////////////////////////////
// console.error('hi')
// console.warn('hi')
/////////////////////////////
// let r = [3, 353, 453]
// alert(Array.isArray(r))
/////////////////////////////////////////////////////////
// function f1() {
//     return f2()
// }
// function f2() {
//     return f1()
// }
/////////
// function f1() {
//     return f1()
// }
/////////////////////////
// function f1(i) {
//     if (i <= 0) {
//         return
//     }
//     alert('hi')
//     return f1(i - 1)
// }
// f1(5)
/////////////////////////////

// function factorial(i) {
//     if (i < 2) {
//         return 1
//     }

//     return i * factorial(i - 1)

// }
// alert(factorial(5))

// function forEach(arr, func) {

//     function loop(i) {
//         if (i >= arr.length) {
//             return;
//         }
//         func(arr[i], i)
//         loop(i + 1)
//     }
//     loop(0)
// }

// forEach([5, 4, 3], function (val, i) {
//     alert(val + ' at index ' + i);
// })
/////////////////////////////////
// function pow(x, y) {
//     if (y === 0) {
//         return 1;
//     }
//     return x * pow(x, y - 1)
// }
// alert(pow(5, 3))
/////////////////////////////
// function sum(arr) {
//     return arr.reduce(function (aggr, val) {
//         if (Array.isArray(val)) {
//             return aggr + sum(val)
//             }

//         return aggr + val
//     }, 0)
// }
// alert(sum([4, 3, [8, 2], [3, 6, [9, 12, 33], 6], 7, 8, 9]))
//////////////////////////////////////////////
// function stringifyJSON(obj){
// if(typeof())
// return stringifyJSON()
// }
/////////////////////////////////
// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: 'red'
// }

// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')

// function draw() {
//     context.fillStyle = data.fillStyle
//     context.fillRect(data.x, data.y, data.width, data.height)
// }

// draw()

// // context.fillStyle = 'red'
// // context.fillRect(10, 50, 50, 50)

// // context.lineWidth = 2
// // context.strokeStyle = 'grean'
// // context.strokeRect(100, 50, 50, 50)

// context.fillStyle = 'red'
// context.fillRect(10, 50, 50, 50)

// context.strokeStyle = 'grean'
// context.strokeRect(100, 50, 50, 50)

//////////////////////////////////////
// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')

// let data = {
//     x: 0,
//     y: 0,
//     width: 50,
//     height: 50,
//     fillStyle: 'red',
// }

// let xDelta = 5
// let yDelta = 5

// function update() {
//     if (data.x + data.width > canvas.width || data.x < 0) {
//         xDelta *= -1
//     // } else if (data.x < 0) {
//     //     xDelta = 1
//      }
//     if (data.y + data.height > canvas.height || data.y < 0) {
//         yDelta *= -1
//     // } else if (data.y < 0) {
//     //     yDelta = 1
//      }
//     data.x += xDelta
//     data.y += yDelta
// }
// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillStyle = data.fillStyle
//     context.fillRect(data.x, data.y, data.width, data.height)
// }


// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }
// loop()
/////////////////////////////////////////
setTimeout(() => {
    while(true){

    }
}, 10000);

setTimeout(() => {
    console.log(1)
}, 20000);
console.log(2);
//////////////////////////////////////
// function saySomething(str) {
//     throw "what the heck"
// }

// let ERR = ""

// const wait = () => new ( => setTimeout(  , 1000))

// wait().then(() => saySomething("1 second has passed"))