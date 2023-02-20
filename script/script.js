const images = document.querySelectorAll('.slider-img')
const sliderLine = document.querySelector('.slider-line')

let count = 0;
let width;

const rollSlider = () => {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)'
}

const init = () => {
    width = document.querySelector('.main-slider').offsetWidth
    sliderLine.style.width = width*images.length + 'px'
    images.forEach(elem => {
        elem.style.width = width + 'px';
    })
    rollSlider();
}
window.addEventListener('resize', init)
init()

document.querySelector('.button-prev').addEventListener('click', function(){
    count--;
    if(count < 0){
        count = images.length - 1
    }
    rollSlider()
})


document.querySelector('.button-next').addEventListener('click', function(){
    count++;
    if(count >= images.length){
        count = 0
    }
    rollSlider()
})



const headerBurger = document.querySelector('.main-header-burger')
const mainHeaderNav = document.querySelector('.main-header-nav')

headerBurger.addEventListener('click', function(){
    headerBurger.classList.toggle('active')
    mainHeaderNav.classList.toggle('active')
})

mainHeaderNav.addEventListener('click', function(){
    mainHeaderNav.classList.remove('active')
    headerBurger.classList.remove('active')
})

