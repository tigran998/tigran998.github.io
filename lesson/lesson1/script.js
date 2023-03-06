// let a = [24, 22, [7[84, 99]], [3, 1, 6], [0, 8, [4, 5]]]
// alert(1 + 5 * 3 + 2)
///////

// let names = ['Atos', 'Portos', 'Aramis', 'Dartanyan', 'Filip']

// let i = 0
// let i1 = names.length - 1

// while (i < names.length / 2) {
//     let a = names[i]
//     names[i] = names[i1]
//     names[i1] = a

//     i += 1
//     i1 -= 1
// }
// alert(names)

// /////
// let a = [5, -78, 14, 32, 748, 1, 78, 23, 41, 0]
// let b = []

// let i = 0
// while (i < a.length) {
//     b[i] = a[i] *3
//     i++
// }
// alert(b)

//////////////

// let x
// if(x === undefined){
//     alert('ok')
// }

// x = 10
// if(x===10){
//     alert('jane')
// }
////////////

// let x = []

// x[0] = 1
// x[1] = 'dfd'
// x[10] = 122
// alert(x.length)
// alert(x[4])
////////////////

// let x = [44, 11, 78, 5, 98, 35, 46, 27, 9]
// let ue = []
// debugger
// let i = 0
// let i2 = 0
// while (i < x.length) {
//     if (x[i] % 2 !== 0) {
//         ue[i2] = x[i]
//         i2 += 1
//     }
//     i += 1

// }
// alert(ue)



/// 1 version

// let x = function (y, z) {
//     alert(z + y)
// }

// x(6, 10)

/// 2 version

// let x = function (z, y) {
//     return z + y
// }
// let u = x(6, 10)
// alert(u)

/////
// let isEven = function(x){
//     return x % 2 ===0
// }
// alert(isEven(18))


////////////

// let y = 66
// let x = 5
// let z = 9, a = y + x
// let o = [y * 2]
// o[x] = 4

// alert(((!!!(z === 8)) && !(132 === 662)) || (5 * 6 < 100 && o.length >= 6))
/////////


// let add = function (sum) {
//     result = 0
//     let i = 0
//     while (i < sum.length) {
//         result = result + sum[i]
//         i += 1
//     }
//     return result

// }
// alert(add([1, 2, 3]))

///

// let a = 9

// if (a > 0) {
//     let b = 2

//     if (b > 0) {
//         let a = 3
//         alert(a + b) // 3 + 2
//     }

//     b = 4
//     alert(b + a) // 4 + 9

//     let i = 0
//     while (i < 2) {
//         alert(i + b + a) // 0 + 4 + 9
//         i += 2
//     }
//     alert(i) // 2


// }
// alert(a) // 9

/////

// let x = 5
// // if (x > 0) {
// //     alert(10 + 5)
// // } else if (x = 0) {
// //     alert(8 - 4)
// // } else {
// //     alert ('panir e')
// // }

// let i = 0

// while(i < x){
//     alert ('hallo')
//     i +=2
// }


// let array = []
// array[0] = 1
// array[1] = 2
// array[10] = 11
// alert(array.length)


// let x = [1, 'ayo', true, [2, 'voch', false], [9, 87, 654, 3210]]


// let userAge = +prompt('How old are you')

// if (userAge < 10) {
//     alert('hi')
// } else if (10 <= userAge && userAge < 18) {
//     alert(' hello')
// } else {
//     alert('greetings')
// }

///
// let result = 0
// while (true) {
//     let answer = prompt('Pleas provide your answer')

//     if (answer === 'exit') {
//         alert('Result is' + result)
//         break
//     }

//     let num = +answer
//     result = result + num
// }
////
// let computTriangelArea = function (base, heigth) {
//     return (base * heigth) / 2
// }
// alert(computTriangelArea(7, 8))

// let revers = function (arr) {
//     let resultArr = []

//     let i1 = 0
//     let i2 = arr.length - 1
//     while (i2 >= 0) {
//         resultArr[i1] = arr[i2]
//         i1 = i1 + 1
//         i2 = i2 - 1

//     }
//     return resultArr
// }
// alert(revers([1, 2, 3, 4]))

///////

// let average = function (numbers) {

//     let sum = 0
//     let i = 0
//     while ( i < numbers.length  ) {
//         sum = sum + numbers[i]
//         i+=1



//     }


//     return sum / numbers.length
// }

// alert(average([4, 3, 6, 10, 2]))


///
// let factorial = function (num){
//     let result = 1
//     while(num > 1){
//         result = result * num
//         num = num -1

//     }
//     return result

// }
// alert(factorial(5))

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////

// let x = []
// x[0] = 9
// x[5] = 'hi'
// console.log(x);

// let y = {}
// y['age'] = 24
// y['name'] = 'tigran'
// y['address'] ={}
// y['address']['city'] = ' yerevan'
// y['address']['street']= 'baghramian'
// console.log(y);

// let person = {
//     firstName: 'Tigran',
//     age: 24,

//     'first name': 'Taron',
//     'age': 36,
// }

// person.firstName = 'Hakob'
// alert(person.firstName)

// person['first name'] = 'Armen'
// alert(person['first name'])



// let f = function (num) {
//     return num * 2
// }

// let x = [
//     {
//         y: [2, 20]
//     },
//     {
//         z: {
//             a: {
//                 b: [14, 18]
//             },
//             c: {
//                 z: [40, 24, 42]
//             }
//         }
//     },
//     20,
//     [
//         [7, 5, 2]
//     ],
//     f,
// ]
// alert(2 + 50)

////////////

// let a = [2, 4, 5, 6, 88]


// let forEach = function (arr, fun) {
//     let i = 0
//     while (i < arr.length) {
//         alert(arr[i])
//         i++
//     }
// }
// foo(a)
// foo([1, 2, 3])

// let bar = function (arr) {
//     let i = 0
//     while (i < arr.length) {
//         alert('What a great number' + arr[i])
//         i++
//     }
// }
// bar([5, 2, 1])

// let a = function(){
//     return 1
// }
// let b = function(z){ /// z-Ի ՄԵՋ ՄՏՆՈՒՄ Է a ՓՈՓՈԽԱԿԱՆԸ
//     return z()
// } 
// alert(b(a))



// let a = [1, 5, 9, 3, 5, 7]

// let forEach = function (arr, fun) {
//     let i = 0
//     while (i < arr.length) {
//         fun(arr[i], i)
//         i++

//     }

// }


//////////VERSION

// forEach([4, 5, 9, 45, 78, -3], function (val, i) {
//     alert('What a great number ' + val + ' what is at index ' + i)
// })

////////// VERSION
// a.forEach(function (val, i) {
//     alert('What a great number  ' + val + '  what is at index  ' + i)
// })



/////////VERSION

// [1,2,3].forEach(function (val, i) {
//     alert('What a great number  ' + val + '  what is at index  ' + i)
// })


// let a = [3, 7, 2, 4]

// let f = function (a) {
//     return a + 2  
// }

// let z = 0  //z = 24 + 6 + 2 = 32
// a.forEach(function (val) {
//     z = z + f(val) + 2
//     //z = 0 + 5 + 2 = 7
//     //z = 7 + 9 + 2 = 18
//     //z = 18 + 4 + 2 = 24
//     //z = 24 + 6 + 2 = 32
// })

// let f2 = function (d) {
//     return f(d) + f(d) // (a + 2) + (a + 2) // f(32) + f(32)
// }

// let f3 = function (d) {
//     return f2(d) + 1 // (a + 2) + (a + 2) + 1

// }

// alert(143)

// let zoo = [5, 2, 45, -98]

// // zoo.forEach(function(val){
// //     alert(val)
// // })  

// let bar = zoo.map(function(val, i){
//     return val * 2
// })
// alert(bar)

// let people = [
//     {
//         name: 'Nick',
//         lastName: 'Yegibyan',
//     },
//     {
//         name : ' Vachagan',
//         lastName: 'Tumanyan',
//     }
// ]

// let names = people.map(function(val, i){
//     return val.name
// })
// alert(names) 


// let a = [7, 56, 7, 3, 54, 8, 6]

// // let filter = function (arr) {
// //     let filteredArr = []
// //     let i = 0
// //     arr.forEach(function (val) {
// //         if (val % 2 === 0) {
// //             filteredArr[i] = val
// //             i = i + 1
// //         }


// //     })
// //     return filteredArr
// // }
// // alert(filter(a))

// //////
// let a2 = a.filter(function(val){
//     return val < 20
// })
// alert(a2)

// //  /////////////////JSON//////////////

// let a = {
//     name: 'Joe',
//     age: 39,
//     phone: '093094085',
// }

// // alert(Object.keys(a))
// ///
// // Object.keys(a).forEach(function(key){
// //     let value = a[key]
// //     alert(key+ ' : ' + value)
// // })
// ///////
// // alert(Object.values(a))

// // let stringify = function (obj) {
// //     let result = ''

// //     Object.keys(obj).forEach(function (key) {
// //         let value = obj[key]
// //         result += key + ' : ' + value + '\n'
// //     })

// //     return result
// // }

// // alert(stringify(a))
// /////////////////////////////
// // alert(JSON.stringify(a))
// //////////
// let str = JSON.stringify(a)

// // let b = JSON.parse(str)
// // alert(b.name)

//
// localStorage.setItem('test1', str)

// let a = localStorage.getItem('test1')
// let obj =JSON.parse(a)
// alert(obj.name)
////////////////////////////////////////////
// let a = {
//     name:'Joe',
//     phone: '021456789',
//     friends:[
//         'Mike', 'Jina', 'Carol'
//     ],
//     sayHi : function(){
//         alert('hi')
//     }    

// }

// alert(JSON.stringify(a, undefined, 2))

// // a.sayHi()

///////////////////////

// let a = function () {
//     alert('Hi')
// }

// a()// ԱՇԽԱՏՈՒՄ Է ՄԻԱՅՆ FUNCTION-ԻՑ ՆԵՐՔԵՎ

// b() // ԱՇԽԱՏՈՒՄ Է ԲՈԼՈՐ ՏԵՂԵՐՈՒՄ

// function a(){
//     alert('Hi')
// }


//////////////
// let a = 5
// a = 8
// a = 25
// alert(a)
////
// const f = function () {
//     let a = 5
//     if (a > 0) {
//         let b = 7
//         alert(a + b)
//     }
//     alert(a)
// }
// f()
// //
// const z = function () {
//     let a = 5
//     if (a > 0) {
//         var b = 7
//         alert(a + b)
//     }
//     alert(b)
// }
// z()
/////////////////////////////////////////////////////////////////////////

// let y = 10;

// let div = function (t, s) {
//     return t / s;
// };

// let dip = function (y, zoo) {
//     return zoo(y) * zoo(y); /// yup(4) * yup(4) = 5 * 5
// }

// let yup = function (c) {
//     return div(y, 2); // div(10, 2) = 10 / 2= 5 
// }

// let d = dip(4, yup);///dip(4, 5)

// alert(d); 
//////////////////////////////////// 1 VERSION

// let sum = function (arr) {
//     let aggr = 0
//     arr.forEach(function (value) {
//         aggr = aggr + value

//     })
//     return aggr
// }
// alert(sum([10, 3, 5, 7]))

// let a =[9, 10, 6, 5].reduce(function (aggre, val) {
//     return aggre + val
// }, 0)

// alert(a)
// ///////////////////////////////// 2 VERSION

// function add(arr) {
//     let aggr = 0
//     arr.forEach(function (value) {
//         aggr = aggr + value

//     })
//     return aggr
// }
// alert(add([10, 3, 5, 7]))


// let a = [
//     {
//         name: ' Joe'
//     },
//     {
//         age: 24
//     },
//     {
//         phone: '033124578'
//     },
// ]

// let b = a.reduce(function (aggr, val) {
//     if(val.name !== undefined){
//         aggr.name = val.name
//     }
//     if(val.age !== undefined){
//         aggr.age =val.age
//     }
//     if(val.phone !== undefined){
//         aggr.phone = val.phone
//     }
//     return aggr
// }, {})

// alert(JSON.stringify(b, undefined , 2))

///////////////////////////////////\watch


////////////////////////kisat


// function reduce(arr, fun, aggr) {
//     arr.forEach(function (val, i) {
//         if (i === 0 && aggr === undefined) {
//             aggr = val
//         } else {
//             aggr = fun(aggr, val, i)
//         }
//     })
//     return aggr
// }

// alert(reduce([5, 9, 10]), function (acaggr, val) {
//     return Math.max(aggr ,val)
// })