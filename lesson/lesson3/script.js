// // let inp = document.querySelector('#inp')
// let div = document.querySelector('#esh')

// // inp.addEventListener('keyup', function(eve){
// //     div.innerHTML = eve.target.value
// // })
// div.addEventListener('mouseleave', function(){
//     div.style.backgroundColor ='red'
// })



// let data ={ 
//     x: 10,
//     y: 10,
//     width: 50,
//     heigth: 50,
//     fillStyle: 'red'
// }

// const canvas = document.querySelector('canvas')

// // alert(canvas.width)
// // canvas.width = 200

// const context = canvas.getContext('2d')

// // context.fillStyle = 'red'
// // context.fillRect(10, 50, 50, 50)



// // context.lineWidth = 2
// // context.strokeStyle='green'
// // context.strokeRect(100, 50, 50, 50)

// function drow(){
//     context.fillStyle = data.fillStyle
//     context.fillRect(data.x, data.y, data.width, data.heigth)
// }

// drow()
// let canvas = document.querySelector('canvas')
// let context = canvas.getContext('2d')

// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     heigth: 50,
//     fellStyle:'red'
// }

// let xDelta = 10

// function update(){
//     if(data.x + data.width > canvas.width || data.x < 0){
//         x.xDelta*=1
//     }
//     data.x += xDelta
// }

// function drow(){
//     context.clearRect(0,0,convas.width, convas.heigth)
//     context.fillStyle = data.fellStyle
//     context.fillRect(data.x, data.y, data.width, data.heigth)
// }

// function loop(){
//     requestAnimationFrame(loop)
// }
// loop()\

////////////////////////////////


// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')

// let data = {
//     xDelta: 0,
//     x: 10,
//     y: 10,
//     width: 50,
//     heigth: 50
// }

// function updata() {
//     data.x += data.xDelta

// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.heigth)
//     context.fillRect(data.x, data.y, data.width, data.heigth)

// }

// function loop() {
//     requestAnimationFrame(loop)

//     updata()
//     draw()
// }

// loop()

// document.addEventListener('keydown', function (eve) {
//     if(eve.code === 'ArrowRight'){
//     data.xDelta = 5
//     } else if(eve.code === 'ArrowLeft'){
//         data.xDelta =-5
//     }
// })

// document.addEventListener('keyup', function (eve) {
//     data.xDelta = 0
// })
////////////////////////

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

let backgroundImg = document.createElement('img')
backgroundImg.src = 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?cs=srgb&dl=pexels-peng-liu-169647.jpg&fm=jpg'

const heroImg = document.createElement('img')
heroImg.src = 'https://st.depositphotos.com/2400497/3428/v/950/depositphotos_34287663-stock-illustration-cartoon-ninja.jpg'

const starImg = document.createElement('img')
starImg.src = 'https://thumbs.dreamstime.com/b/golden-star-glitter-texture-isolated-white-background-christmas-decoration-golden-star-glitter-texture-isolated-135772527.jpg'

let data = {
    hero: {
        xDelta: 0,
        yDelta: 0,
        x: 10,
        y: 200,
        width: 100,
        height: 100,
    },
    bulletes: [
        {
            xDelta: 5,
            x: 20,
            y: 200,
            width: 10,
            height: 10,
        }
    ]


}
function updata() {
    data.hero.x += data.hero.xDelta
    data.hero.y += data.hero.yDelta
    data.bulletes.forEach(function (bullet) {
        bullet.x += bullet.xDelta
    })
}

function draw() {
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width,
        data.hero.height)

        data.bullet.forEach(function(bullet){

        })
}

function loop() {
    requestAnimationFrame(loop)
    updata()
    draw()
}

loop()

document.addEventListener('keydown', function (eve) {
    if (eve.code === 'ArrowRigth') {
        data.hero.xDelta = 1
    } else if (eve.code === 'ArrowLeft') {
        data.hero.xDelta = -1
    }
})
document.addEventListener('keyup', function (eve) {
    data.hero.xDelta = 0
})