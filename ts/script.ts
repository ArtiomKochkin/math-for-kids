type TypeListButtons = NodeListOf<HTMLButtonElement>
type TypeListInputs = NodeListOf<HTMLInputElement>
type TypeListELements = NodeListOf<HTMLElement>

/* modal window */

const modalButtons: TypeListButtons = document.querySelectorAll(".button-play--modal");
const modalWindow = document.getElementById("modal") as HTMLElement;

modalButtons.forEach((button) => {
    button.addEventListener("click", handleModal);

    function handleModal(): void {
        let close = document.querySelector(".close") as HTMLElement;

        modalWindow.classList.add("fixed");

        close.onclick = () => {
            modalWindow.classList.remove("fixed");
        }

        window.onclick = (event: Event) => {
            if (event.target === modalWindow) {
                modalWindow.classList.remove("fixed");
            }
        }
    }
});


/* radio buttons */

const radioAction: TypeListInputs = document.querySelectorAll(".action");
const radioComplexity: TypeListInputs = document.querySelectorAll(".complexity");
const chooseButtons: TypeListButtons = document.querySelectorAll(".choose__button");

chooseButtons.forEach(btn => {
    btn.addEventListener("click", handleRadio);

    function handleRadio(): void {
        for (let i = 0; i <= radioAction.length; i++) {
            for (let j = 0; j <= radioComplexity.length; j++) {
                if (radioAction[i].checked && radioComplexity[j].checked) {
                    let actionValue: string = radioAction[i].value;
                    let complexityValue: string = radioComplexity[j].value;
                    window.location.href = `./${actionValue}-${complexityValue}.html`;
                }
            }
        }  
    }
});


/* sliders */

const advItems: TypeListELements = document.querySelectorAll(".advantages__item");
const advDots: TypeListELements = document.querySelectorAll(".advantages--dot");
const advButtons: TypeListButtons = document.querySelectorAll(".advantages__btn");
const reviewsItems: TypeListELements = document.querySelectorAll(".reviews__item");
const reviewsDots: TypeListELements = document.querySelectorAll(".reviews--dot");
let slideIndexAdv: number = 1;
let slideIndexReviews: number = 1;
let interval: number | undefined = 0;

makeSlidesAnimation();

function showSlides(index: number, items: TypeListELements, dots: TypeListELements, buttons?: TypeListButtons): void {
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

function showCurrentSlide(event: Event, index: number): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains("reviews--dot")) {
        slideIndexReviews = index;
        showSlides(slideIndexReviews, reviewsItems, reviewsDots);
    } else {
        slideIndexAdv = index;
        showSlides(slideIndexAdv, advItems, advDots, advButtons);
    }
}

function makeSlidesAnimation(): void {
    if (!interval) {
        clearInterval(interval);
    }
    interval = setInterval((): void => {
        slideIndexAdv++;
        slideIndexReviews++;
        showSlides(slideIndexAdv, advItems, advDots, advButtons);
        showSlides(slideIndexReviews, reviewsItems, reviewsDots);
    }, 5000);
}