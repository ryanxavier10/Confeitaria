function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/close.svg";
    } 
}


let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 +slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 7000);