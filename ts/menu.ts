type TypeListElements = NodeListOf<HTMLElement>;

const menu = document.querySelector(".menu") as HTMLElement;
const operators = document.querySelector(".operators") as HTMLElement;
const operatorItems: TypeListElements = document.querySelectorAll(".operators__item");
const closeApp = document.querySelector(".close-app") as HTMLElement;

menu.addEventListener("click", openMenu);
closeApp.addEventListener("click", closeMenu);
operatorItems.forEach(toggleMenuItems);

function openMenu(): void {
    operators.style.display = "flex";
    closeApp.style.display = "block";
    menu.style.display = "none";
}

function closeMenu(): void {
    operators.style.display = "none";
    closeApp.style.display = "none";
    menu.style.display = "block";
    operatorItems.forEach(item => {
        let itemList = item.querySelector(".operators__list") as HTMLElement;
        itemList.classList.remove("active");
    });
}

function toggleMenuItems(item: HTMLElement): void {
    item.addEventListener("click", () => {
        operatorItems.forEach(other => {
            if (item !== other) {
                let otherList = other.querySelector(".operators__list") as HTMLElement;
                otherList.classList.remove("active");
            }
        });

        let operatorList = item.querySelector(".operators__list") as HTMLElement;
        operatorList.classList.toggle("active");
    });
}