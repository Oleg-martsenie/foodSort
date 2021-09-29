//areas
let searchForm = document.querySelector('.search-form');
let cart = document.querySelector('.shopping-cart');
let login = document.querySelector('.login-form');
let navbr = document.querySelector('.navbar');

//clickable
let searchBtn = document.querySelector('#search-btn');
let cartBtn = document.querySelector('#cart-btn');
let userBtn = document.querySelector('#user-btn');
let mobileBtn = document.querySelector('#menu-btn')

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    navbr.classList.remove('active');
}

cartBtn.onclick = () => {
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
    navbr.classList.remove('active');
}

userBtn.onclick = () => {
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbr.classList.remove('active');
}

mobileBtn.onclick = () => {
    navbr.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
    navbr.classList.remove('active');
}

var swiper = new Swiper(".producuts-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disbleOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});


var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disbleOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});