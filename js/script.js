
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//User

const user = document.querySelector(".user-action")
const userLink = document.querySelector(".user-action__list")

user.addEventListener("click", e => {
    userLink.classList.toggle("active")
})

document.documentElement.addEventListener("click", e => {
    if (e.target.closest(".user-action__list")) {
        userLink.classList.add("active")
    }else if (!e.target.closest(".user-action")) {
        userLink.classList.remove("active")
    }

})

///////////////////


//Burger

const burger = document.querySelector(".header__icon")
const headerMenu = document.querySelector(".header__menu")
const body = document.querySelector("body")

burger.addEventListener("click", e => {
    burger.classList.toggle("active")
    headerMenu.classList.toggle("active")
    body.classList.toggle("lock")
})

///////////////////


//Swiper

const mainScreen = new Swiper('.main-screen', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination

    // Navigation arrows
    navigation: {
        nextEl: '.control-main-screen__arrow_next',
        prevEl: '.control-main-screen__arrow_prev',
    },

    // And if we need scrollbar
});

const lots = new Swiper(".lots__swiper", {
    loop: true,
    slidesPerView: 3,
    // If we need pagination



    // Navigation arrows
    navigation: {
        nextEl: '.control-lots__arrow_next',
        prevEl: '.control-lots__arrow_prev',
    },
    breakpoints: {
        860: {
            slidesPerView: 3
        },
        510: {
            slidesPerView: 2
        },
        10: {
            slidesPerView: 1
        }
    },
})

const pageSlider = new Swiper('.header-interesting__slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination

    // Navigation arrows

    // And if we need scrollbar
});
