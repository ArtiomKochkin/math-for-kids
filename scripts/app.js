/* menu */

let menu = document.querySelector(".menu");
let operators = document.querySelector(".operators");
let closeApp = document.querySelector(".close-app");


menu.onclick = function() {
    operators.style.display = "flex";
    closeApp.style.display = "block";
    menu.style.display = "none";
}

closeApp.onclick = function() {
    operators.style.display = "none";
    closeApp.style.display = "none";
    menu.style.display = "block";
}