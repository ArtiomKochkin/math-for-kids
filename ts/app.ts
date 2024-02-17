const menu = document.querySelector(".menu") as HTMLElement;
const operators = document.querySelector(".operators") as HTMLElement;
const closeApp = document.querySelector(".close-app") as HTMLElement;

menu.onclick = () => {
    operators.style.display = "flex";
    closeApp.style.display = "block";
    menu.style.display = "none";
}

closeApp.onclick = () => {
    operators.style.display = "none";
    closeApp.style.display = "none";
    menu.style.display = "block";
}