/* show modal window */

const buttonModal = document.querySelectorAll(".button-play--modal");
const modalWindow = document.getElementById("modal");

buttonModal.forEach(function(button){
    button.addEventListener("click", function() {
        let close = document.querySelector(".close");

        modalWindow.classList.add("fixed");

        close.onclick = function() {
            modalWindow.classList.remove("fixed");
        }

        window.onclick = function(event) {
            if (event.target == modalWindow) {
                modalWindow.classList.remove("fixed");
            }
        }
    });
});


/* advatanges */

let slideIndex = 1;
let interval = 0;
showAdvatange(slideIndex);
makeInterval();

function showAdvatange(n) {
    let advatangesItems = document.querySelectorAll(".advantages__item");
    let advatangesDots = document.querySelectorAll(".advantages--dot");
    let advantagesButtons = document.querySelectorAll(".advantages__btn");

    if (n > advatangesItems.length) {
        slideIndex = 1;
    }

    for (let item of advatangesItems) {
        item.classList.remove("active");
    }
    for (let dot of advatangesDots) {
        dot.classList.remove("active");
    }
    for (let button of advantagesButtons) {
        button.classList.remove("active");
    }

    advatangesItems[slideIndex - 1].classList.add("active");
    advatangesDots[slideIndex - 1].classList.add("active");
    advantagesButtons[slideIndex - 1].classList.add("active");
}

function currentAdvatange(n) {
    slideIndex = n;
    showAdvatange(slideIndex);
}

function makeInterval() {
    clearInterval(interval);
    interval = setInterval(function() {
        slideIndex++;
        showAdvatange(slideIndex);
        showReviews(slideIndex);
    }, 5000);
}

/* reviews */  

showReviews(slideIndex);

function showReviews(n) {
    let reviewsItems = document.querySelectorAll(".reviews__item");
    let reviewsDots = document.querySelectorAll(".reviews--dot");

    if (n > reviewsItems.length) {
        slideIndex = 1;
    }

    for (let item of reviewsItems) {
        item.classList.remove("active");
    }
    for (let dot of reviewsDots) {
        dot.classList.remove("active");
    }

    reviewsItems[slideIndex - 1].classList.add("active");
    reviewsDots[slideIndex - 1].classList.add("active");
}

function currentReviews(n) {
    slideIndex = n;
    showReviews(slideIndex);
}


/* links */


let radioAction = document.getElementsByName("action");
let radioComplexity = document.getElementsByName("complexity");
let buttons = document.querySelectorAll(".choose__button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        for (i = 0; i <= radioAction.length; i++) {
            for (j = 0; j <= radioComplexity.length; j++) {
                if (radioAction[i].checked && radioComplexity[j].checked) {
                    let actionValue = radioAction[i].value;
                    let complexityValue = radioComplexity[j].value;
                    window.location.href = `./${actionValue} ${complexityValue}.html`;
                } 
            }
        }
    });
});


/* advatanges button title*/

// function addSubtitle() {
//     let sliderButtons = document.querySelectorAll(".advantages__btn");
//     let sliderTitles = document.querySelectorAll(".advantages__subtitle");
    
//     for (let i = 0; i < sliderButtons.length; i++) {
//         for (let j = 0; j < sliderTitles.length; j++) {
//             if ( i == j) {
//                 let sliderTitleText = sliderTitles[j].innerHTML;
//                 sliderButtons[i].innerHTML = sliderTitleText;
//             }
//         }
//     }
// }

// addSubtitle();