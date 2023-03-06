// let x = [7, 10, 22]

// // let unshift = function (arr, val){
// //     let i = arr.length - 1
// //     while(i >= 0){
// //     arr[i+1] = arr[i]
// //         i--
// //     }
// //     arr[0] = val
// // }
// // unshift(x, 99)
// // alert(x)
// // ////////////////////2 VERSION

// // x.unshift(57)
// // alert(x)

// // alert(x.shift())
// // alert(x)

// //////////////////////////////////////

// x.push(999,4)
// alert(x)
// x.pop()
// alert(x)

// let x = [1, 3, 5, 6, 4]
// // let y = [8, 6, 4]

// // let concat = function (arr1, arr2) {

// //     let result = []
// //     arr1.forEach(function (val) {
// //         result.push(val)
// //     });
// //     arr2.forEach(function (val) {
// //         result.push(val)
// //     })
// //     return result
// // }

// // alert(concat(x, y))

// /////////////// 2 VERSION
// //  alert(x.concat(y))

// ///////////////////////

// alert(x.findIndex(function(val){
//     return val > 3

// }))


// alert(x.find(function(val){
//     return val > 3

// }))
//////////////////////

// alert(Math.round(3.4))
// alert(Math.floor(3.8))
// alert(Math.ceil(3.1))

// alert(Math.min(7, 41, -98, 78, 5))
// alert(Math.max(7, 41, -98, 78, 5))

// alert(Math.pow(2, 5))

// alert(Math.pow(2, 5))


//////////////////  Վարժություն //////////////////////////

// function transform(arr) {
//     return arr.filter(function (obj) {
//         return obj.gender === 'female'
//     }).map(function (obj) {
//         return {
//             firstName: obj.fn,
//             lastName: obj.ln,
//             phone: obj.ph,
//             gender: obj.gender
//         }
//     })


// }
// alert(JSON.stringify(transform([
//     { fn: "Kate", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
//     { fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
//     { fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
//     { fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
// ]), undefined, 2))
///////////////////////

// function getAvgAgeByColor(arr, hairColor) {
//     let filteredArray = arr.filter(function (obj) {
//         return obj.hairColor === hairColor
//     })

//     let totalAge = filteredArray.reduce(function (aggr, obj) {
//         return aggr + obj.age
//     },0)
//     return totalAge / filteredArray.length
// }

// alert(
//     getAvgAgeByColor([
//         { name: "Joe", age: 13, hairColor: "red" },
//         { name: "Mike", age: 10, hairColor: "brown" },
//         { name: "Jane", age: 4, hairColor: "red" },
//         { name: "Susan", age: 30, hairColor: "brown" }
//     ], "brown"))

/////////////////////////////////

// function getPersonWithMostFriendsByName(people, friendName) {
//     let filteredPeople = people.map(function (personObj) {
//         return {
//             name: personObj.name,
//             count: personObj.friends.filter(function (friendObj) {
//                 return friendObj.name === friendName
//             }).length
//         }
//     })


// let max = filteredPeople.reduce(function (aggr, obj) {
//     if (aggr === undefined) {
//         return obj
//     }
//     if (obj.count > aggr.count) {
//         return obj
//     }
//     return aggr
// }, undefined)
//  return max.name
// }
// alert(getPersonWithMostFriendsByName([
//     {
//         name: "Joe",
//         friends: [
//             { name: "Susan", age: 12 },
//             { name: "Jane", age: 43 },
//             { name: "Susan", age: 33 }
//         ]
//     },
//     {
//         name: "Liz",
//         friends: [
//             { name: "Mila", age: 12 },
//             { name: "Susan", age: 43 },
//             { name: "Jane", age: 33 }
//         ]
//     },
//     {
//         name: "Mike",
//         friends: [
//             { name: "Susan", age: 12 },
//             { name: "Susan", age: 43 },
//             { name: "Susan", age: 33 }
//         ]
//     }
// ], "Susan"))


//////////////////////////

// function removeAtIndex(arr, index) {
//     return arr.filter(function (val, i) {
//         return i !== index
//     })

// }

// alert(removeAtIndex([5, 10, 15, 20], 2))

////////////////////////////////////

// function find(arr, searchText) {
//     return arr.filter(function (obj) {
//         const values = Object.values(obj)
//         for (let i = 0; i < values.length; i++) {
//             const valueTxt = '' + values[i]
//             if (valueTxt.search(searchText) !== -1) {
//                 return true
//             }
//         }
//         return false
//     })
// }

// alert(find([
//     { name: "Apple", color: "red" },
//     { name: "Banana", color: "yellow" },
//     { name: "Orange", color: "orange" },
//     { name: "Apple", color: "yellow" }
// ], "yellow"))

////////////////////

// function magic(obj) {
//     return Object.keys(obj).reduce(function(aggr, key){
//         aggr[obj[key]] = key
//         return aggr
//     }, {})

//     // let newObj = {}
//     // keys.forEach(function (key) {
//     //     const value = obj[key]
//     //     newObj[value] = key
//     // })
//     // return newObj

// }

// alert(JSON.stringify(magic({
//     firstName: "Michael",
//     lastName: "Jackson"
// }), undefined, 2))

////////////////////////////////////////
// function spaces(num){
//     let str = ''
//     for(let i= 0; i< num; i++){
//         str +=''
//     }
//     return str
// }

// function stars(num) {
//     let str = ''
//     for (let i = 0; i < num; i++) {
//         str = str + '*'
//     }
//     return str
// }


// function diamond(height) {
//     let str = ''
//     let topSpaces = height / 2 -1
//     for (let i = 1; i <= height; i += 2) {
//         str += spaces(topSpaces) +stars(i) + '\n'
//         topSpaces--
//     }

//     let bottomSpaces = 1
//     for (let x = height - 2; x > 0; x -= 2) {
//         str += spaces(bottomSpaces) + stars(x) + '\n'
//         bottomSpaces++
//     }

//     return str
// }
// alert(diamond(5))

///////////////////////

// function pow(num1, num2) {
//     let result = num1
//     while(num2>1){
//         result = result * num1
//         num2--
//     }
//     return result


// }

// alert(Math.pow(5, 3))

////////////////////////////////////
// function reverse(num) {
//     const numStr = '' + num
//     const reversedNumStr = numStr.split('')
//     .reverse()
//     .join('')
//     return +reversedNumStr
// }
// alert(reverse(123))

// let a = [1, 2, 3]

// let forEach = function (arr, fun) {
//     let i = 0
//     while (i < arr.length) {
//         fun(arr[i], i) /// kanchum e function
//         i++
//     }

// }

// forEach(a, function (val) {
//     alert(val)
// })

// a.forEach(function (val, i) {
//     alert('This is value ' + val + ' ' + 'This is index ' + i)
// })

// let forEach = function (arr, fun) {
//     let i = 0
//     while (i < arr.length) {
//         fun(arr[i], i)
//         i++
//     }
// }

// forEach([1,2,3], function(val,i){
//     alert('What is a great number '+ val + ' ' + 'number ' +i)
// })

// let zoo = [1, 2, 3]

// zoo.forEach(function(val, i){
//    alert( zoo[i] = val * 2) 
// })

// let bar = zoo.map(function(val, i){
//     return val * 2
// })
// alert(zoo)
// alert(bar)

// let people = [
//     {
//         name: 'Joe',
//         lastName: ' Biden '
//     },
//     {
//         name: ' Nikol ',
//         lastName: ' Pashinyan'
//     },
// ]

// let names = []
// people.forEach(function(val, i){
//     names[i] = val.name
// })
// alert(names)

// ///////////////////// 2 version map
// let names2 = people.map(function(val){
//     return val.name
// })
// alert(names2) 

// let a = [1, 2, 3, 4, 5, 6, 7]

// let filter = function(arr , fun){
//     let filteredArr = []
//     let i = 0
//     arr.forEach(function(val) {
//         if(fun(val)){
//             filteredArr[i] = val
//             i++
//         }

//     });
//     return filteredArr
// }

// let b = filter(a, function(val){
//     return val % 2 ===0
// })

// alert(b)
////////////////////////


// let a = {
//     name: 'Joe',
//     age: 24,
//     phone: '032145678,'
// }

// Object.keys(a).forEach(function(key){
//     let value = a[key]
//     alert(value)
// });

// alert(Object.values(a))

// let stringify = function(obj){
//     let result = ''

//     Object.keys(obj).forEach(function(key){
//         let value = obj[key]
//         result += key + ': ' + value + '\n'
//     })
//     return result
// }
// // alert(stringify(a))

// let str = JSON.stringify(a)
// // let b = JSON.parse(str)
// // alert(b.name)
// alert(str)


// let change = localStorage.setItem('test1',str)
// let y =localStorage.getItem('test1')
// let obj = JSON.parse(y)
// alert(obj.name)


// let a = [10, 21, 41, 5].reduce(function(aggr, val){
//     return aggr + val
// },0)
// alert(a)

// let a = [
//     {
//         name: 'Joe'
//     },
//     {
//         age: 24
//     },
//     {
//         phone: '032142536'
//     }
// ]

// let b = a.reduce(function (aggr, val) {
//     if (val.name !== undefined) {
//         aggr.name = val.name
//     }
//     if (val.age !== undefined) {
//         aggr.age = val.age
//     }
//     if (val.phone !== undefined) {
//         aggr.phone = val.phone
//     }



//     return aggr
// }, {})

// alert(JSON.stringify(b, undefined, 2))

// let x = [7, 10, 22]

// let unshift = function (arr, val) {
//     let i = arr.length - 1

//     while (i >= 0) {
//         arr[i + 1] = arr[i]
//         i--
//     }
//     arr[0] = val
// }

// unshift(x, 21)
// alert(x)

// let x = [7, 10, 22]
// let y = [88, 23, 19]

// let concat = function (arr1, arr2) {
//     let result = []

//     arr1.forEach(function (val) {
//         result.push(val)
//     })
//     arr2.forEach(function (val) {
//         result.push(val)
//     })
//     return result

// }

// alert(concat(x,y))

// toUpperCase
// toLowerCase
// substring
// split
// replaceAll
//search

// let a = 'Hello World this is monky'
// // let b = a.toUpperCase()
// // alert(b)
// // let c = a.toLowerCase()
// // alert(c)
// // let z = a.substring(2, 7)
// // alert(z)

// // let e = a.split('')
// // alert(e)

// let q = a.search('monky')
// alert(q)


// function alertFreq(str) {
//     let a = str.split('')
//     let ferqMap = a.reduce(function (aggr, val) {
//         if (aggr[val] === undefined) {
//             aggr[val] = 1
//         } else {
//             aggr[val]++
//         }

//         return aggr
//     }, {})

//     Object.keys(ferqMap).forEach(function (key) {
//         alert(`${key} : ${ferqMap[key]}`)
//     })

// }
// alertFreq('hello world')

// //////////////////// SPREAD

// let a = [1, 2, 3,]
// let b = [-1, ...a, 4, 5]
// alert(b)

// function max (...val){
//     alert(val)
// }
// max(5,4,7)

// function max(arr) {
//     return arr.reduce(function(aggr, val){
//         if(val > aggr){
//             return val
//         }
//         return aggr


//     }, arr[0])

// }
// alert(max([5, 28, 99, 23, 100, 32]))
//////////////////////////


// function max(arr) {
//     return Math.min(...arr)
// }

// alert(max([1, 2, 5, 7, 8, 6]))

// let z = 5 * 'dsgdfgdfg'
// alert(isNaN(z))

// let a = 12
// alert(typeof(a))

// let b = 'afdj'
// alert(typeof(b))

// let c = true
// alert(typeof(c))

// let d = undefined
// alert(typeof(d))

// let e = []
// alert(Array.isArray(e))
// let g = function(){

// }
// alert(typeof(g))

// let h = {}
// alert(typeof(h))

//////////////////////

// let i = 0
// while (i < 10) {
//     i++
// }

// for (let x = 0; x < 10; x++) {

// }

// let y = 0
// do {
//     y++
// } while (y < 10)

///////////////// RECURSION

// function f1(i) {
//     if (i <= 0) {
//         return
//     }
//     alert('hi')
//     return f1(i - 1)
// }
// f1(5)

// function factorial(num) {
//     if (num <= 1) {
//         return 1
//     }


//     return num * factorial(num - 1)
// }
// alert(factorial(5))

// function forEach(arr, func) {
//     function loop(i) {
//         if (i >= arr.length) {
//             return
//         }
//         func(arr[i], i)
//         loop(i + 1)
//     }
//     loop(0)
// }
// forEach([7, 6, 6], function (val, i) {
//     alert(val + 'at index' + i)
// })

// function pow(x, y) {
//     if (y ===0 ) {
//         return 1
//     }
//     return x * pow(x,y-1)
// }
// alert(pow(5, 3))/
//////////////////////////////////////////////

// function sum(arr) {
//     return arr.reduce(function (aggr, val) {
//         if (Array.isArray(val)) {
//             return aggr + sum(val)
//         }
//         return aggr + val
//     }, 0)
// }

// alert(sum([4, 3, [8, 2], [3, 6, [9, 12, 33], 6], 7, 8, 9]))

function stringifyJSON(obj) {
    
}