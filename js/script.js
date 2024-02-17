"use strict";
/* modal window */
const modalButtons = document.querySelectorAll(".button-play--modal");
const modalWindow = document.getElementById("modal");
modalButtons.forEach((button) => {
    button.addEventListener("click", handleModal);
    function handleModal() {
        let close = document.querySelector(".close");
        modalWindow.classList.add("fixed");
        close.onclick = () => {
            modalWindow.classList.remove("fixed");
        };
        window.onclick = (event) => {
            if (event.target === modalWindow) {
                modalWindow.classList.remove("fixed");
            }
        };
    }
});
/* radio buttons */
const radioAction = document.querySelectorAll(".action");
const radioComplexity = document.querySelectorAll(".complexity");
const chooseButtons = document.querySelectorAll(".choose__button");
chooseButtons.forEach(btn => {
    btn.addEventListener("click", handleRadio);
    function handleRadio() {
        for (let i = 0; i <= radioAction.length; i++) {
            for (let j = 0; j <= radioComplexity.length; j++) {
                if (radioAction[i].checked && radioComplexity[j].checked) {
                    let actionValue = radioAction[i].value;
                    let complexityValue = radioComplexity[j].value;
                    window.location.href = `./${actionValue}-${complexityValue}.html`;
                }
            }
        }
    }
});
/* sliders */
const advItems = document.querySelectorAll(".advantages__item");
const advDots = document.querySelectorAll(".advantages--dot");
const advButtons = document.querySelectorAll(".advantages__btn");
const reviewsItems = document.querySelectorAll(".reviews__item");
const reviewsDots = document.querySelectorAll(".reviews--dot");
let slideIndexAdv = 1;
let slideIndexReviews = 1;
let interval = 0;
makeSlidesAnimation();
function showSlides(index, items, dots, buttons) {
    if (index > items.length) {
        index = 1;
    }
    for (let item of items) {
        item.classList.remove("active");
    }
    for (let dot of dots) {
        dot.classList.remove("active");
    }
    if (buttons) {
        for (let btn of buttons) {
            btn.classList.remove("active");
        }
    }
    items[index - 1].classList.add("active");
    dots[index - 1].classList.add("active");
    if (buttons) {
        buttons[index - 1].classList.add("active");
    }
}
function showCurrentSlide(event, index) {
    const target = event.target;
    if (target.classList.contains("reviews--dot")) {
        slideIndexReviews = index;
        showSlides(slideIndexReviews, reviewsItems, reviewsDots);
    }
    else {
        slideIndexAdv = index;
        showSlides(slideIndexAdv, advItems, advDots, advButtons);
    }
}
function makeSlidesAnimation() {
    if (!interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        slideIndexAdv++;
        slideIndexReviews++;
        showSlides(slideIndexAdv, advItems, advDots, advButtons);
        showSlides(slideIndexReviews, reviewsItems, reviewsDots);
    }, 5000);
}
