//Navbar menu click 
const navbarMenu = document.querySelector('.header-menu')
const toggleBtn = document.querySelector('.navbar-toggleBtn')
const home = document.querySelector('.home')

toggleBtn.addEventListener('click', () => {

    let toggle = navbarMenu.classList.toggle('open')
    if (toggle) {
        home.className += " responsive";
        // home.classList.toggle('responsive')
    }
    else {
        home.className += "home";
    }
});

navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open')
});

//Slide Main Background Images
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.img-slide');
const contents = document.querySelectorAll('.content')

let sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove('active')
    })
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    contents.forEach((content) => {
        content.classList.remove('active')
    })
    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');
};
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i)
    })
});

