let SearchForm = document.querySelector("header .SearchForm");
let LoginForm =document.querySelector("header .LoginForm");
let Information =document.querySelector("header .InfoMain");

document.querySelector("#SearchBtn").onclick = () => {
    SearchForm.classList.toggle("active");
    LoginForm.classList.remove("active");
    ThemeToggle.classList.remove("active");
};


document.querySelector("#LoginBtn").onclick = () => {
    LoginForm.classList.toggle("active");
    SearchForm.classList.remove("active");
    ThemeToggle.classList.remove("active");
};



document.querySelector("#InfoBtn").onclick = () => {
    Information.classList.add("active");
};

document.querySelector("#InformationClass").onclick = () => {
    Information.classList.remove("active");
};



var swiper = new Swiper(".HomeSlider", {
    loop: true,
    grabCursor: true,
});



var swiper = new Swiper(".ReviewSlider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        991: {
            slidesPerView:3,
        },
    },
});


var swiper = new Swiper(".BlogSlider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        991: {
            slidesPerView:3,
        },
    },
});


let ThemeToggle = document.querySelector(".ThemeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");


ToggleBtn.onclick = () => {
    ThemeToggle.classList.toggle("active");
    LoginForm.classList.remove("active");
    SearchForm.classList.remove("active");
};


document.querySelectorAll(".ThemeToggle .theme-btn").forEach((btn) => {
    btn.onclick = () => {
        let color =btn.style.background;
        document.querySelector(":root").style.setProperty("--main",color);
    }
})
