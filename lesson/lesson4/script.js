// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')

// const backgraoundImg = document.createElement('img')
// backgraoundImg.src = 'https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'

// const heroImg = document.createElement('img')
// heroImg.src = 'https://cdn.pixabay.com/photo/2013/07/12/12/31/pacman-145858__340.png'

// const starImg = document.createElement('img')
// starImg.src = 'https://static.vecteezy.com/system/resources/previews/003/192/594/original/ninja-star-shuriken-vector.jpg'

// const audio = document.createElement('audio')
// audio.src = 'http://www.slspencer.com/Sounds/Star Trek Sounds/sounds/PhotonTorp.mp3'



// let data = {
//     hero: {
//         xDelta: 0,
//         yDelta: 0,
//         x: 10,
//         y: 10,
//         width: 100,
//         height: 100,
//     },
//     bullets: []
// }

// function updata() {
//     data.hero.x += data.hero.xDelta
//     data.hero.y += data.hero.yDelta

//     data.bullets.forEach(function (bullet) {
//         bullet.x += bullet.xDelta
//     })

//     data.bullets = data.bullets.filter(function (bullet) {
//         if (bullet.x > canvas.width) {
//             return false
//         }
//         return true
//     })
// }

// function draw() {
//     context.drawImage(backgraoundImg, 0, 0, canvas.width, canvas.height)

//     context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height,)

//     data.bullets.forEach(function (bullet) {
//         context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height)
//     })
// }

// function loop() {
//     requestAnimationFrame(loop)
//     updata()
//     draw()
// }
// loop()

// document.addEventListener('keydown', function (eve) {
//     if(eve.code === 'ArrowRight'){
//         data.hero.xdelta = 1
//     }else if(eve.code === 'ArrowLeft'){
//         data.hero.xDelta = -1
//     }else {
//         audio.currentTime = 0
//         audio.play(
//             data.bullets.push({
//                 xDelta:5,
//                 x:data.hero.x + data.hero.width,
//                 y: data.hero.height/2,
//                 width:20,
//                 height:20
//             })
//         )
//     }

// })
// document.addEventListener('keyup', function (eve) {
//     data.hero.xDelta = 0
// })

///////////////////2 VERSION/////////////////
// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// const backgroundImg = document.createElement("img");
// backgroundImg.src = "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?region=0,0,1920,1080";

// const heroImg = document.createElement("img");
// heroImg.src = "https://1001freedownloads.s3.amazonaws.com/vector/thumb/135655/nicubunu_Game_baddie_Ninja.png";

// const starImg = document.createElement("img");
// starImg.src = "https://blog.knife-depot.com/wp-content/uploads/2020/03/shuriken-676x676.png";


// const audio = document.createElement("audio");
// audio.src = "http://www.slspencer.com/Sounds/Star Trek Sounds/sounds/PhotonTorp.mp3";

// let data = {
//   hero: {
//     xDelta: 0,
//     yDelta: 0,
//     x: 10,
//     y: 140,
//     width: 100,
//     height: 100
//   },
//   bullets: []
// };

// function update() {
//   data.hero.x += data.hero.xDelta;
//   data.hero.y += data.hero.yDelta;

//   data.bullets.forEach(function(bullet) {
//     bullet.x += bullet.xDelta;
//   });

//   data.bullets = data.bullets.filter(function(bullet) {
//     if (bullet.x > canvas.width) {
//       return false;
//     }
//     return true;
//   });
// }

// function draw() {
//   context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

//   context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height);

//   data.bullets.forEach(function(bullet) {
//     context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height);
//   });

// }

// function loop() {
//   requestAnimationFrame(loop);
//   update();
//   draw();
// }

// loop();

// document.addEventListener("keydown", function(evt) {
//   if (evt.code === "ArrowRight") {
//     data.hero.xDelta = 1;
//   } else if (evt.code === "ArrowLeft") {
//     data.hero.xDelta = -1;
//   } else {
//     audio.currentTime = 0;
//     audio.play();
//     data.bullets.push({
//       xDelta: 5,
//       x: data.hero.x + data.hero.width,
//       y: data.hero.y + data.hero.height / 2,
//       width: 20,
//       height: 20
//     });
//   }
// });
// document.addEventListener("keyup", function(evt) {
//   data.hero.xDelta = 0;
// // });

// ///////////////////////////////
// function zoo(){
//     alert(this.name)
// }


// let person = {
//     name : 'joe',
//     age: 33,
//     printName: function(){
//         alert(this.name)
//     }
// }

// let person2 ={
//     name: 'Mike',
//     age: 39
// }

// let p = person
// person = 9
// p.printName()

// person.printName()

// let p = person
// person =9
// p.printName()

// person.foo= zoo
// person.foo()


////////////////////////////


// function func(a) {
//     alert(this)
//     alert(a)
// }

// const obj = {
//     func: func
// }

//1. obj.func(5)

//2. func(5)

//3. func.apply(obj, [4])

//   func.call(obj, 5)

//4. const boundFunc = func.bind(obj) 
//   boundFunc(7)

//5. new func(5)

////////////////////////////

// const a = {
//     name: 'Joe',
//     foo: function(f){
//         // f()
//         alert(this.name)
//     }
// }
// // a.foo(function(){
// //     alert(this)
// // })\
// a.foo()
//////////////////////
// const a = {
//     age : 23,
//     foo: function(arr){
//         arr.forEach(function(val){
//             alert(this.age + val)
//         }.bind(this))
//     },
// }
// a.foo([22])

///////////////////////

// function zoo(){
//     alert(this.age)
// }
// const b ={
//     age: 44
// }

// const a ={
//     age: 23,
//     foo: zoo.bind(b)
// }

// a.foo()
////////////////////////

// const a = {
//     name: 'Joe',
//     f: function () {
//         alert(this.name)
//     }
// }

// const b = {
//     name: 'Mike'
// }
// a.f.call(b)
// a.f.apply(b)

/////////////

// function Person() {
//     this.name = 'Mike'
//     this.age = 33
// }
// const a = new Person()
// alert(JSON.stringify(a, undefined, 2))
////////
// 'use strict'
// function func(){
//     alert(this)
// }
// func()

////////////////////////////////////////

// const canvas = document.querySelector("canvas");
// const btn = document.querySelector("button");
// const context = canvas.getContext("2d");

// let data = {
//   balls: []
// };

// function update() {
//   data.balls.forEach(function(ball) {
//     ball.update();
//   });
// }

// function draw() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   data.balls.forEach(function(ball) {
//     ball.draw();
//   });
// }

// function loop() {
//   requestAnimationFrame(loop);
//   update();
//   draw();
// }
// loop();

// function Ball() {
//   this.r = random(5, 40);
//   this.x = random(this.r, canvas.width - this.r);
//   this.y = random(this.r, canvas.height - this.r);

//   this.xDelta = random(-5, 5);
//   this.yDelta = random(-5, 5);

//   this.color = "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";

//   this.update = function() {
//     if ((this.x + this.r) > canvas.width ||
//       this.x - this.r < 0) {
//       this.xDelta *= -1;
//     }
//     if ((this.y + this.r) > canvas.height ||
//       this.y - this.r < 0) {
//       this.yDelta *= -1;
//     }

//     this.x += this.xDelta;
//     this.y += this.yDelta;
//   };

//   this.draw = function() {
//     context.fillStyle = this.color;
//     context.beginPath();
//     context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
//     context.fill();
//   };
// }

// btn.addEventListener("click", function() {
//   const ball = new Ball();
//   data.balls.push(ball);
// });


// function random(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

////////////////////////////////////

// const a = {
//   age: 22,
//   name: 'Joe',
//   getName: function(){
//     return this.name
//   },
//   getAge:()=>{
//     return this.age
//   }
// }

// alert(a.getName())// 'Joe'
// alert(a.getAge( ))// undefined

///////////////////
// const f = () => this.name

// const a = {
//   name: 'Mike'
// }
// alert(f.call(a))
/////////////////////////////////////////////////////
// let a = [5, 40, 29, 44, 33]

// function o(arr) {
//   let b = []
//   arr.map(function (val) {
//     b.push(val + 1)
//   })


// let z = b.filter(function (val) {
//   return val % 2 === 0
// })

// return z

// }
// alert(o(a))
////////////////////////

// let x = 7

// function a(y){
//   return x + y
// }

// function b(z){
//   let x = 99
//   return z(4)
// }
// alert(b(a))

// function a(x) {
//   return (y) => x + y
// }
// alert(a(2)(4))
//////////
// function a(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z
//     }
//   }
// }
// alert(a)  //
// alert(a(2))
// alert(a(2)(4))
// alert(a(2)(4)(9))

// /////////////////////////////
// function Cat() {
//   let numLives = 7
//   let name = 'Jack'

//   this.age = 5
//   this.getName = () => {
//     return name
//   }

//   this.getAge = () => {
//     return this.age
//   }
//   this.catDies = () => {
//     numLives--
//   }
//   this.isDead = () => {
//     return numLives <= 0
//   }

// }
///////////////////////

// function Person(name, lastName, age) {
//   this.name = name,
//     this.lastName = lastName,
//     this.age = age,
//     this.friends = [],
//     this.getFullName = () => {
//       return this.name + ' ' + this.lastName 
//     }

// }

// let Person1 = new Person('Joe', 'Jaspers', 55, 'Gago')
// let person2 = new Person('Tigran', 'Tumanyan', 24)
// alert(JSON.stringify(Person1, undefined,2) )
//////////////
// class Animal {
//     constructor(name) {
//         this._name = name
//     }
//     toString() {
//         return this._name
//     }
// }
// class Dog extends Animal {
//     constructor(name, age) {
//         super(name)
//         this._age = age
//     }

//     talk() {
//         alert(this._name + ' says woof - ' + super.toString())
//     }
//     toString() {
//         return 'Dog named ' + super.toString()
//     }
// }

// class Cat extends Animal {
//     talk() {
//         alert(this._name + ' says mew ')
//     }
// }
// const dog1 = new Dog(' Pickles ', 18)
// dog1.talk()
// // alert(dog1)
////////////////////////

// function hi(...args) {
//     if (args.length === 0) {
//         alert('hi')
//     } else if (args.length === 1) {
//         alert('Hello ' + args[0])
//     } else if (args.length === 2) {
//         alert('Greetings ' + args[0] + ' ' + args[1])
//     }
// }

// hi()
// hi('Michael')
// hi('Michael ', 'Jackson')
//////////////

// let data = [
//     { name: 'Joe', age: 33 },
//     { name: 'Mike', age: 22 },
//     { name: 'Susan', age: 19 }
// ]
// function find(...args) {
//     if (typeof (args[0]) === 'number') {
//         return data.filter(function(obj) {
//             return obj.age === args[0]

//         })

//     } else {
//         return data.filter(obj => obj.name === args[0])
//     }
// }
// alert(JSON.stringify(find('Joe',12),undefined,2))
// alert(JSON.stringify(find(19)))
//////////////////////////////////

// class Person {
//     sayHi() {// voch statik function
//         alert('hi')
//     }
//     sayBye() { // voch statik function
//         alert('bye')
//     }
//     static zoo(){ // statik function
//         alert('zoo')
//     }
// }
// const obj = new Person()
// obj.sayBye()

// Person.boo = function () {//  statik function
//     alert('good job')
// }
// Person.boo()
// Person.zoo()
/////////////////////////////

// let obj = new Object//{}
// let a = new Array // []
// a[0] = 5
// a[1] = 7

// alert(a.forEach((val)=>{alert(val)}))
/////////////////////////////

// let age = 54

// // let message
// // if(age=>28){
// //     alert('yes')
// // }else{
// //     alert('no')
// // }
// //////////
// let message = age >= 34 ? 'ues' : "df"
// alert(message)

// let a = [3, 55, 32, 65, 777, 5566].map(function (val) {
//     if (val % 2 === 0) {
//         return 'even'
//     }
//     return 'odd'
// })

// let b = [3, 55, 32, 65, 777, 5566].map((val) =>  val % 2 === 0 ? 'even' : 'odd'
// )
// alert(b)
//////////////
// function getHTML(name1, name2) {
//     return `<div>
//     <a href='https://www.youtube.com/watch?v=abaRbeqVubo&list=PLkVo56yGU5Pqld7f3jtoE-g_755aPT0NV&index=104'> Click me ${name1.toUpperCase()}</a>
//     <h1>${name2}</h1>

//     </div>`
// }
// const html = getHTML('Abel','Vachagan')
// document.body.innerHTML = html
/////////////////////////////
////////////falsy
// false
// ''
// 0
// undefined
// nall
// Nan

// let a = ''
// if(!a){
//     alert('yay')
// }else{
//     alert('noo')
// }
// alert(a)

// let s = ''
// let b = !!a
// alert(b)
///////////
// function foo(a){
//     let name = a && a.know && a.know.name
//     alert(name)
// }
// foo({
//     know:{
//         name:'Mike'
//     }
// })
/////////////////////////////////////

// const person = {
//     firstName: 'Joe',
//     lastName: 'Smith',
//     // age: 33,
//     friends:[],
//     favoritColor:'red'

// }
// function printInfo({ firstName:x, lastName, age='unknown' }) {


//     // function printInfo(personObj) {
//     //     const { firstName, lastName, age } = personObj


//     // const firstName = personObj.firstName
//     // const lastName = personObj.lastName
//     // const age = personObj.age

//     alert(x + ' ' + lastName + ' is ' + age + ' yares old')
// }
// printInfo(person)
////////////////////////////
// let list = [
//     3, 5, 64, 32
// ]
// let [a = 73, b] = list
// alert(a)
///////////////////////////////////
// import {sayHi, pi, Dog} from './hello.js';

// sayHi();
// console.log(pi);

// const a = new Dog()
// alert(a)
// //////////////////////
// import acceptedValue,{sayHi} from "/hello.js"
// acceptedValue()
/////////////////////////////////////

// let sum = 0
// let input=0

// do{
//     input =prompt('enter number')
//     sum= sum+(+input)
// }while(input !=='exit')
// alert(sum)

// try{
//  const data = localStorage.getItem('data', JSON.parse()) 
// }catch(error){

// }finally{

// }
//////////////////////////////

// console.log('start');

// const id = setTimeout(function () {
//     console.log('yay');
// }, 0)

// clearTimeout(id)

// setTimeout(function(){
//     console.log('ok');
// },0)

// console.log('end');
/////////////////////////////


// let list = [
//     'Joe',
//     'Rob',
//     'Mike',
//     'Lisa',
//     'Zara'
// ]

// let searchText =''



// let input =document.querySelector('#input')

// input.addEventListener('kayup', function(e){
// searchText = e.target.value
// refresh()
// })

// let id
// function refresh(){
//     if(id !== undefined){
//         clearTimeout(id)
//     }
//     id = setTimeout(function(){
//         return render()
//       }, 1000) 

// }

// const root = document.querySelector('#root')

// function render() {
//     root.innerHTML=''


// list.filter(function(name){
//     return name.indexOf(searchText) !== -1
// }).map(function(name){
//     const div = document.createElement('div')
//     div.innerText = name
//     return div
// }).forEach(function(el){
//     root.appendChild(el)
// })
// }
// render()
/////////////////////////////////////

// function func(x, y, callback) {
//     const a = x + 2
//     const b = y + 2
//     const c = x + y
//     setTimeout(function () {
//         callback(c * 2)
//     }, 1000)
// }

//     func(2, 4, function(result) {
//         alert(result)
//     })

///////////////////////// 2versia
// function func(x, y) {
//     const a = x + 2
//     const b = y + 2
//     const c = x + y
//     return new Promise(function (resolv, reject) {
//         setTimeout(function () {
//             resolv(c * 2)
//         }, 1000)
//     })


// }

// let any=  func(2, 4,)
// any.then(function(result){
//     alert(result)
// })
///////////////////////////////
// function func() {
//     return new Promise(function (resolv, reject) {
//         setTimeout(function () {
//             resolv(8)
//         }, 1000)
//     })
// }

// function func2(val){
//     return new Promise(function(resolv, reject){
//         setTimeout(function() {
//             resolv(val + 9)
//         }, 1000);
//     })
// }




// const p = func()

// p.then(function (result) {
//     return func2(result)
// }).then(function (result) {
//     return result + 2
// }).then(function (result) {
//     alert(result)
// })


///////////////////////
// function func(){
//     return new Promise(function(resolv, reject){
//         setTimeout(function(){
//             reject(new Error('unexpected token'))
//         },1000)
//     })
// }
// const p = func()

// // p.then(function(result){
// //     alert(result)
// // })
// p.catch(function(error){
//     alert(error)
// })
///////////////////////////////
// function func(){
//     return new Promise(function(resolv, reject){
//         setTimeout(function(){
//             reject(new Error('Unexpected token'))
//         },1000)
//     })
// }
// const p = func()

// p.then(function(result){
//     alert(result)
// }).catch(function(error){
//     alert(error)
// })
///////////////////////
// function func(){
//     return new Promise(function(resolv, reject){
//         setTimeout(function(){
//             reject(new Error('Unexpected token'))
//         },1000)
//     })
// }
// const p = func()
// const p2= p.catch(function(error){
//     throw new Error('Syntax error')
// })

// p2.then(function(result){
//     alert(result)
// })
// p2.catch(function(error){
//     alert(error)
// })
///////////////////////////////////////////////////////
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
//         alert(result)
//         throw new Error('oops')
//     })
//     .then((result) => func3(result))
//     .catch((error) => func1(2))
//     .then((result) => func2(result))
//     .then((result) => alert(result))
////////////////////

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve('success')
//         } else {
//             reject('error')
//         }
//     })
// }

// job(true).then(function (data) {
//     console.log(data);
//     return job(true)
// }).then(function (data) {
//     if (data !== 'victory') {
//         throw 'Defeat'
//     }
//     return job(true);
// }).then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
//     return job(false);
// }).then(function (data) {
//     console.log(data);
//     return job(true);
// }).catch(function (error) {
//     console.log(error);
//     return 'Error caught';
// }).then(function (data) {
//     console.log(data);
//     return new Error('test');
// }).then(function (data) {
//     console.log('Success:', data.message);
// }).catch(function (data) {
//     console.log('Error:', data.message);
// });
///////////////////////////// 1

// function makeSound(input) {
//     if (input === 'dog') {
//         alert('woof')
//     } else if (input === 'cat') {
//         alert('mew')
//     } else if (input === 'duck') {
//         alert('quack')
//     } else {
//         alert('esim')
//     }
// }
// makeSound('dog')
// ////////////////////// 2
// function makeSound(input) {
//     switch (input) {
//         case 'dog':
//             alert('woof')
//             break
//         case 'cat':
//             alert('mew')
//             break
//         case 'duck':
//             alert('quack')
//             break
//         default:
//             alert('esim')

//     }
// }
// makeSound('cat')
// ///////////////////////////////// 3
// const soundObj = {
//     'dog': function () {
//         alert('woof')
//     },
//     'cat': function () {
//         alert('mew')
//     },
//     'duck': function () {
//         alert('quack')
//     }
// }

// function makeSound(input) {
//     const f = soundObj[input]
//     if (f !== undefined) {
//         f()
//     } else {
//         alert('esim')
//     }
// }
// makeSound('duck')
////////////////////////////////////
// function foo() {
//     let a = 9
//     b = 10
//     return a + b

//     let c = 20
//     return c + a

//     return b + c
// }
// const iter = foo()
// alert(iter)

////////////////////
// function* foo() {
//     let a = 9
//     b = 10
//     yield a + b

//     let c = 20
//     yield c + a

//     yield b + c
// }
// const iter = foo()
// // let obj = iter.next()
// // while(obj.done !== true){
// //     alert(obj.value)
// //     obj = iter.next()
// // }
// ////
// for (const val of iter) {
//     alert(val)
// }
//////////////////////////////////////////
