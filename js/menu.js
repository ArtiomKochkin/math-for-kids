"use strict";
const menu = document.querySelector(".menu");
const operators = document.querySelector(".operators");
const operatorItems = document.querySelectorAll(".operators__item");
const closeApp = document.querySelector(".close-app");
menu.addEventListener("click", openMenu);
closeApp.addEventListener("click", closeMenu);
operatorItems.forEach(toggleMenuItems);
function openMenu() {
    operators.style.display = "flex";
    closeApp.style.display = "block";
    menu.style.display = "none";
}
function closeMenu() {
    operators.style.display = "none";
    closeApp.style.display = "none";
    menu.style.display = "block";
    operatorItems.forEach(item => {
        let itemList = item.querySelector(".operators__list");
        itemList.classList.remove("active");
    });
}
function toggleMenuItems(item) {
    item.addEventListener("click", () => {
        operatorItems.forEach(other => {
            if (item !== other) {
                let otherList = other.querySelector(".operators__list");
                otherList.classList.remove("active");
            }
        });
        let operatorList = item.querySelector(".operators__list");
        operatorList.classList.toggle("active");
    });
}
