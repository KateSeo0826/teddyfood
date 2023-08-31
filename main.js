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

// Cocktail Section 
let radius = 240;
let autoRotate = true;
let rotateSpeed = -60;
let imgWidth = 120;
let imgHeight = 170;

// Start
setTimeout(init, 1000);
let odrag = document.getElementById('drag-container');
let ospin = document.getElementById('spin-container');
let aImg = ospin.getElementsByTagName('img');
let aEle = [...aImg];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

let ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px"

function init(delayTime) {
    for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
}
function applyTransform(obj) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}
function playSpin(yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

let sX, sY, nX, nY, desX = 0;
desY = 0;
tX = 0;
tY = 10;
if (autoRotate) {
    let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert')
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}


// odrag.onpointerdown = (e) => {
//     clearInterval(odrag.timer)
//     sX = e.clientX;
//     sY = e.clientY;
//     odrag.onpointermove = (e) => {
//         nX = e.clientX;
//         nY = e.clientY;
//         desX = nX - sX;
//         desY = nY - sY;
//         tX += desX * 0.1;
//         tY += desY * 0.1;
//         applyTransform(odrag);
//         sX = nX;
//         sY = nY;
//     }
//     odrag.onpointerup = (e) => {
//         odrag.timer = setInterval(function () {
//             desX *= 0.95;
//             desY *= 0.95;
//             tX += desX * 0.1;
//             tY += desY * 0.1;
//             applyTransform(odrag);
//             playSpin(false);
//             if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//                 clearInterval(odrag.timer)
//                 playSpin(true)
//             }
//         }, 17);
//         onpointermove = onpointerup = null;
//     };
//     return false;
// }

document.onpointerdown = function (e) {
    clearInterval(odrag.timer)
    e = e || window.event;
    sX = e.clientX;
    sY = e.clientY;
    this.onpointermove = function (e) {
        e = e || window.event;
        nX = e.clientX;
        nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
    };
    this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag);
            playSpin(false);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                clearInterval(odrag.timer)
                playSpin(true)
            }
        }, 17);
        this.onpointermove = this.onpointerup = null;
    };
    return false;
}

addEventListener("mousewheel", (e) => {
    let d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
})

// Login button hover effect
$(".book-btn").hover(
    function () {
        $(this).find('span').animate({
            marginTop: "-20px",
            opacity: '0'
        }, 500);
    },
    function () {
        $(this).find('span').animate({
            marginTop: "0px",
            opacity: '1'
        }, 500);
    }
);

$(document).ready(function () {
    $(".overDiv").hover(function () {
        $(this).find('.itemContentInfo').animate({ height: 310 }, 300);
        $(this).find('.itemContentTitle').addClass('itemContentTitleHover');
    }, function () {
        $(this).find('.itemContentInfo').animate({ height: 0 }, 300);
        $(this).find('.itemContentTitle').removeClass('itemContentTitleHover');
    });
});   