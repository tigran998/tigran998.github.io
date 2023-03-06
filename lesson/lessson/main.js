// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')

// let data = {
//     xDelta: 0,
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
// }

// function update() {
//     data.x += data.xDelta
// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillRect(data.x, data.y, data.width, data.height)
// }
// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }
// loop()

// document.addEventListener('keydown', function (event) {
//     if (event.code === 'ArrowRight') {
//         data.xDelta = 5
//     } else if (event.code === 'ArrowLeft') {
//         data.xDelta = -5
//     }
// })

// document.addEventListener('keyup', function (event) {
//     data.xDelta = 0
// })
// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')

// const backgroundImg = document.createElement('img')
// backgroundImg.src = 'https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'

// const heroImg = document.createElement('img')
// heroImg.src = 'https://cdn.pixabay.com/photo/2016/03/29/20/33/female-1289269__340.png'

// const starImg = document.createElement('img')
// starImg.src = 'https://blog.knife-depot.com/wp-content/uploads/2020/03/shuriken-676x676.png'

// const audio = document.createElement("audio");
// audio.src = "http://www.slspencer.com/Sounds/Star Trek Sounds/sounds/PhotonTorp.mp3";

// let data = {
//     hero: {
//         xDelta: 0,
//         yDelta: 0,
//         x: 20,
//         y: 250,
//         width: 140,
//         height: 179,
//     },
//     bulets: []
// }

// function update() {
//     data.hero.x += data.hero.xDelta
//     data.hero.y += data.hero.yDelta

//     data.bulets.forEach(function (bulet) {
//         bulet.x += bulet.xDelta
//     })
//     data.bulets = data.bulets.filter(function (bulet) {
//         if (bulet.x > canvas.width) {
//             return false
//         } else {
//             return true
//         }
//     })
// }

// function draw() {
//     context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
//     context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width,
//         data.hero.height)

//     data.bulets.forEach(function (bulet) {
//         context.drawImage(starImg, bulet.x, bulet.y, bulet.width,
//             bulet.height)
//     })

// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }
// loop()

// document.addEventListener('keydown', function (event) {
//     if (event.code === 'ArrowRight') {
//         data.hero.xDelta = 1
//     } else if (event.code === 'ArrowLeft') {
//         data.hero.xDelta = -1
//     } else {
//         audio.currentTime = 0;
//         audio.play();
//         data.bulets.push({
//             xDelta: 5,
//             x: data.hero.x + data.hero.width,
//             y: data.hero.y + data.hero.height / 2,
//             width: 30,
//             height: 30,
//         })
//     }
// })
// document.addEventListener('keyup', function (event) {
//     data.hero.xDelta = 0
// })
///////////////////////////////////////////////
// let person ={
//     name: 'Joe',
//     age: 33,
//     printName:function(){
//         alert(this.name)
//     }
// }
// // person.printName()
// let p = person
// person = 8
// p.printName()

// function zoo(text, x) {
//     alert(text + ' ' + this.name + x)
// }
// //  
// let person = {
//     name: 'Joe',
//     age: 33
// }
// person.foo = zoo
// person.foo()\

// let person2 ={
//     name:'Mike',
//     age:39
// }
// person2.foo = zoo
// person2.foo()\

// zoo.call(person, 'my name is', 10)
// zoo.apply(person, ['my name is', 10])
// let f = zoo.bind(person)
// f('hello world', 5)

// function bind(func, context) {
//     return function (...args) {
//         return func.apply(context, args)
//     }
// }
// let f = bind(zoo, person)
// f('hello world', 2) 

// function Person() {
//     this.name = 'Joe',
//         this.age = 33
// }
// let newThis = new Person()
// alert(newThis.name)

// let a = {
//     f: function(){
//         alert(this)
//     }
// }
// a.f()

// const a = {
//     name: 'Joe',
//     foo: function (f) {
//         alert(this.name)
//     }
// }
// // a.foo()
// [1, 2, 3].forEach(a.foo.bind(a));
//////////////////////////////////////////////////
// const a ={
//     age:23,
//     foo: function(arr){
//         arr.forEach(function(val){
//             alert(this.age + val)
//         }.bind(this));
//     }
// }
// a.foo([22])
//////////////////////////
// function zoo(){
//     alert(this.age)
// }
// const b ={
//     age:44
// }
// const a = {
//     age: 23,
//     foo: zoo.bind(b)
// }
// a.foo()
// const a = {
//     name: 'Joe',
//     f: function(){
//         alert(this.name)
//     }
// }
// const b ={
//     name:'Mike'
// }
// a.f.call(b)
// function  Person(){
//     this.name = 'Mike'
//     this.age = 33
// }
// const a = new Person()
// alert(JSON.stringify(a))
//  "use strict"
// function func(){
//     alert(this)
// }
// func()
//////////////////////////////////
// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')
// const btn = document.querySelector('button')

// let data = {
//     xDelta: 0,
//     yDelta: 0,
//     x: 30,
//     y: 30,
//     width: 50,
//     height:50,
// }

// function update() {
// data.x += data.xDelta
// }
// function draw() {

// }
// function loop() {
//     requestAnimationFrame(loop)
//     update()
//     draw()
// }
// loop()

// btn.addEventListener('click', function (event) {

// })
// function F(){
//     this.name = "Joe"
// }
// const a =new F()
// alert(JSON.stringify(a, undefined, 2))
// const a = {
//     age: 22,
//     name: 'Joe',
//     getName: function () {
//         return this.name
//     },
//     getAge: () =>{
//         return this.age
//     }
// }
// alert(a.getName())
// alert(a.getAge())
///////////////////////////////
// window.name = 'Tighe'
// const f = () => this.name//global this

// const a = {
//     name: "Mike"
// }
// alert(f.call(a))
/////////////////////////////////////
// function f() {
//     return () => {
//         return this.age
//     }
// }
// const a = {
//     age: 22
// }
// const z = f.call(a)
// alert(z())
//////////////////
// let a = [5, 40, 29, 44, 33]

// function o(arr) {
//     return  arr
//         .map((val) => val + 1)
//         .filter((val) => val % 2 === 0)

// }
// alert(o(a))

// let x = 7

// function a(y) {
//     return x + y//7+y
// }

// function b(z) {
//     let x = 99
//     return z(4)
// }

// alert(b(a))
////////////////
// function a(x) {
//     return function (y) {
//         return x + y
//     }
// }
// alert(a(2)(4))
// /////////////////
// function a(x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z

//         }
//     }
// }

// alert(a)
// alert(a(2))
// alert(a(2)(4))
// alert(a(2)(4)(9))
/////////////////////////////////////////////////
// const person1 = {
//     name: 'Joe',
//     lastName: "Jaspers",
//     age: 55,
//     friends: [],
//     getFullName() {
//         return this.name + ' ' + this.lastName
//     }
// }

// const person2 = {
//     name: 'Mike',
//     lastName: 'Jackson',
//     age: 66,
//     getFullName() {
//         return this.name + ' ' + this.lastName
//     }
// }
//////////
// function Person(name, lastName, age) {
//     this.name = name,
//         this.lastName = lastName,
//         this.age = age,
//         this.friends = [],
//         this.getFullName = () => {
//             return this.name + ' ' + this.lastName
//     }
// // }

// // const person1 =new Person('Joe', 'Jaspeer')
// // alert(JSON.stringify(person1), undefined, 2)
// ////////////////////////////////////////////////
// const a = {
//     name: 'Joe'
// }
// const b = {
//     lastName: 'Jackson'
// }
// const c = {
//     age: 19,
//     showAge() {
//         alert(this.age)
//     }
// }
// a.__proto__ = b
// b.__proto__ = c
// a.age = 99
// a.showAge()
// delete a.age
// a.showAge()

// const b = {
//     lastName:'Jackson'
// }

// const a = Object.create(b)
// a.name='Joe'
// alert(a.lastName)

// const b = {
//     lastName:'Jacson'
// }

// function A(){
//     this.name = 'Joe'
// }
// A.prototype = b
// const a = new A()
// alert(JSON.stringify(a))


// const a ={}
// Object.prototype.toString = function(){
//     return 'yay'
// } 
// alert(a.__proto__=== Object.prototype)
///////////////////////////
// class Animal {
//     constructor(name) {
//         this._name = name
//     }
//     toString() {
//         return this._name
//     }
// }
// class Dog extends Animal{
//     talk() {
//         alert(this._name + ' says woof')
//     }
//     toString() {
//         return 'Dog'
//     }
// }
// class Cat extends Animal{
//     talk() {
//         alert(this._name + ' says mew')
//     }
// }


// const dog1 = new Dog('Pickles')
// dog1.talk(toString)
// const data = [
//     { name: 'Joe', age: 33 },
//     { name: 'Mike', age: 22 },
//     { name: 'Susan', age: 19 }
// ]
// function find(...args) {
//     if (typeof (args[0]) === 'number') {
//         return data.filter(obj => obj.age === args[0])
//     } else {
//         return data.filter(obj => obj.name === args[0])
//     }
// }
// alert(JSON.stringify(find('Joe')))
// // alert(JSON.stringify(find(19)))
// /////////////////////////////
// class Person {
//     sayHi() {
//         alert('hi')
//     }
//     sayBye() {
//         alert('bye')
//     }

// }
// Person.boo = function(){
//     alert('boo')
// }

// const obj = new Person
// obj.sayBye()
///////////////////////

// let age = 34
// let message = age >= 18 ? 'yes' : 'no'
// alert(message)

// let arr = [23, 53, 64, 223, 64, 2, 0].map(val => val % 2 ===0 ? ' even ' : ' odd ')
// alert(arr)

// function getHtml(name1, name2) {
//     return `<div> 
//     <a href = "https://www.youtube.com/watch?v=abaRbeqVubo&list=PLkVo56yGU5Pqld7f3jtoE-g_755aPT0NV&index=104" ${name1.toUpperCase()}> Click me </a>
//     <h1>${name2}</h1>
//     </div>`
// }
// const html = getHtml('Abel', 'Vachagan')
// document.body.innerHTML = html
// function foo(a) {
//     alert(a.knows.name)
// }

// foo({
//     knows: {
//         name: 'Mily'
//     }
// })

// function xoo(b) {
//     const name = b && b.knows && b.knows.name
//     alert(name)
// }

// xoo({
//     knows: {
//         name: 'Mike'
//     }
// })
////////////////////////
// const person = {
//     firstName: 'Joe',
//     lastName: 'Smith',
//     //age: 33,
//     friends: ['beno'],
//     favoritColor: 'red'
// }
// function printInfo({ firstName: newVeribal1, lastName, age: newVeribal2 = ' unknown' }) {
//     alert(newVeribal1 + ' ' + lastName + ' is ' + newVeribal2 + ' yares old')
// }
// printInfo(person)

// const { friends = [] } = person
// alert(friends)

// const list = [
//     5, 34, 6, 23
// ]
// const [a, b] = list

// const a = list[0]
// const b = list[1]
///////////////////////////////////////
// import hopar from 'lessson/hi.js'


// hopar()
/////////////////////////////////////////////

// try {
//     let data = localStorage.getItem('data')
//     let obj = JSON.parse(data)
// } catch(error){

// }finally{

// }

// try {
//     const a = 3
//     a = 4
// } catch (error){
// console.error('bffffffffff');
// }finally{
//     alert('bidzik')
// }

// try {
//     throw new Error('samething wrong')
// }catch(err){
//   console.log('bbbb');
// }

// function a(){
//     b()
// }

// function b(){
//     throw new Error('uh ohhhh')
// }
// a()
////////////////////////////////////////////////


// const id = setTimeout(function () {
//     console.log('yay')
// },0)
// clearTimeout(id)

// setTimeout(() => {
//     console.log('ok');
// }, 0);
/////////////////////////////////////

// let list = [
//     'Joe',
//     'Rob',
//     'Mike',
//     'Lisa',
//     'Zara'
// ]

// let searchText = ''
// const input = document.querySelector('input')
// input.addEventListener('keyup', function (e) {
//     searchText = e.target.value
//     refresh()
// })
// let id
// function refresh(){
// if(id !== undefined){
//     clearTimeout(id)
// }
// id = setTimeout(() => {
//     render()
// }, 1000);
// }

// const root = document.querySelector('#root')

// function render() {
// root.innerHTML = ''
//     list.filter((name) => {
//         return name.indexOf(searchText) !== -1
//     }).map(name => {
//         const div = document.createElement('div')
//         div.innerText = name
//         return div
//     }).forEach(el => {
//         root.appendChild(el)
//     })
// }
// render()
//////////////////////////////////////////////////

// function func(x, y, callback) {
//     const a = x + 2
//     const b = y + 2
//     const c = x + y
//     setTimeout(() => {
//         callback( c * 2)
//     }, 1000);
// }

// func(2, 4, function(resul){
//     alert(resul)
// })

// function func(x, y) {
//     const a = x + 2
//     const b = y + 2
//     const c = x + y

//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(c * 2)
//         }, 1000);
//     })
// }
// const promis = func(2, 4)
// promis.then(function (result) {
//     alert(result)
// })
/////////////////////////////////
// function func() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(9)
//         }, 1000)
//     })
// }

// function func2(val) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(val + 7)
//         }, 1000)
//     })
// }


// const p = func()

// const p1 = p.then(function (result) {
//     return func2(result)
// })
// const p2 = p1.then(function (result) {
//     return result + 2
// })
// const p4 = p2.then(function (resurl) {
//     alert(resurl)
// })





/////////////////////
// function func() {

//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(1)
//         }, 1000)
//     })
// }
// func().then(function(result){
//     throw new Error('oooops')
// }).catch(function (error) {
//     alert(error)
// })
///////////////////////////////////////////////


// function func1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(2), 1000);
//     })
// }
// function func2(val) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(val + 3), 1000);
//     })
// }

// function func3(val) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(val + 4), 1000);
//     })
// }

// func1()
//     .then((result) => func2(result))
//     .catch((error) => 5)
//     .then((result) => {
//         alert(result)//5
//         throw new Error('oops')
//     })
//     .then((result) => func3(result))
//     .catch((error) => func3(2))
//     .then((result) => func2(result))
//     .then((result) => alert(result))//9
//////////////////////////////////////////////

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// job(true).then(function(data) {
//     console.log(data);//success
//     return job(true);
// }).then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }
//     return job(true);
// }).then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log(error);//Defeat
//     return job(false);
// }).then(function(data) {
//     console.log(data);//error
//     return job(true);
// }).catch(function(error) {
//     console.log(error);
//     return 'Error caught';
// }).then(function(data) {
//     console.log(data);//Error caught
//     return new Error('test');
// }).then(function(data) {
//     console.log('Success:', data.message);//Success: test
// }).catch(function(data) {
//     console.log('Error:', data.message);
// });
////////////////////////////////////////////
// function func() {
//     return new Promise(function (resolve, reject) {
//         reject(new Error('sxal'))
//     })
// }

// async function func2() {
//     try {
//         const r = await func()
//         return r + 4
//     } catch {
//         return 232323
//     }
// }

// func2().then(function (result) {
//     alert(result)
// }).catch(function (error) {
//     alert(error)
// })
///////////////////////////////

// function makeSound(input) {
//     switch (input) {
//         case 'dog':
//             alert('wooof')
//             break
//         case 'cat':
//             alert('mew')
//             break
//         case 'duck':
//             alert('quack')
//             break
//         default:
//             alert('hay huy')
//     }

// }
// makeSound('duck')\
///////////////////////////////////////////

// function* foo() {
//     let a = 3
//     b = 5
//     yield a + b

//     let c = 34
//     yield c + a
// }
// let iterate = foo()

// let obj = iterate.next()
// for(const value of iterate){
//     alert(value)
// }
//////////////////////
