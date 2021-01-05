// Navigation
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
    console.log("Clicked nav")
    menu.classList.add("open");
    document.body.classList.add("active");
    navContainer.style.left = "0";
    navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
    menu.classList.remove("open");
    document.body.classList.remove("active");
    navContainer.style.left = "-30rem";
    navContainer.style.width = "0";
});


// pop up
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

if (popup){
    closePopup.addEventListener("click", () => {
        popup.classList.add('hide__popup');
    });

    window.addEventListener("load", () => {
        setTimeout( ()=> {
            popup.classList.remove("hide__popup");
        }, 500)
    })
}

// AOS init
AOS.init();