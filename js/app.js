"use strict";
const menu = document.querySelector(".menu");
const operators = document.querySelector(".operators");
const closeApp = document.querySelector(".close-app");
menu.onclick = () => {
    operators.style.display = "flex";
    closeApp.style.display = "block";
    menu.style.display = "none";
};
closeApp.onclick = () => {
    operators.style.display = "none";
    closeApp.style.display = "none";
    menu.style.display = "block";
};
