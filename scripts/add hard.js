const answers = document.querySelectorAll(".answer");
const answer1 = document.querySelector(".answer--red");
const answer2 = document.querySelector(".answer--blue");
const answer3 = document.querySelector(".answer--yellow");
const audio = document.querySelector("audio");
const reset = document.querySelector(".equation__reset-img");
const equation = document.querySelector(".equation");
const num1 = document.querySelector(".equation__num1");
const num2 = document.querySelector(".equation__num2");
const num3 = document.querySelector(".equation__num3");
let trueAnswer = 0;

generateEquation();

function generateEquation() {
    let number1 = Math.floor(Math.random() * 30);
    let number2 = Math.floor(Math.random() * 30);
    let number3 = Math.floor(Math.random() * 30);
    let falseAnswer1 = Math.floor(Math.random() * 50);
    let falseAnswer2 = Math.floor(Math.random() * 50);
    let allAnswers = [];
    let switchAnswers = [];
    
    trueAnswer = eval(number1 + number2 + number3);

    num1.innerHTML = number1;
    num2.innerHTML = number2;
    num3.innerHTML = number3;

    allAnswers = [trueAnswer, falseAnswer1, falseAnswer2];

    for (i = allAnswers.length; i--;) {
       switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }
    
    if (switchAnswers[0] == switchAnswers[1] ||
        switchAnswers[0] == switchAnswers[2] ||
        switchAnswers[1] == switchAnswers[2]) {
            return generateEquation();
    }

    answer1.innerHTML = switchAnswers[0];
    answer2.innerHTML = switchAnswers[1];
    answer3.innerHTML = switchAnswers[2];
    
}

reset.onclick = function() {
    generateEquation();
}

answers.forEach(function(answer) {
    answer.onclick = function() {
        if (answer.innerHTML == trueAnswer) {
            generateEquation();
            let timeout1 = setTimeout(function() {
                equation.classList.add("equation--true");
            }, 100);
            let timeout2 = setTimeout(function() {
                equation.classList.remove("equation--true");
            }, 600);
            
        } else {
            audio.play();
            let timeout1 = setTimeout(function() {
                equation.classList.add("equation--false");
            }, 100);
            let timeout2 = setTimeout(function() {
                equation.classList.remove("equation--false");
            }, 600);
        }
    }
});