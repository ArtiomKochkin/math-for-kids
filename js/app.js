"use strict";
const answers = document.querySelectorAll(".answer");
const answer1 = document.querySelector(".answer--red");
const answer2 = document.querySelector(".answer--blue");
const answer3 = document.querySelector(".answer--yellow");
const reset = document.querySelector(".equation__reset");
const equation = document.querySelector(".equation");
const num1 = document.querySelector(".equation__num1");
const num2 = document.querySelector(".equation__num2");
const num3 = document.querySelector(".equation__num3");
const audio = document.querySelector("audio");
const page = window.location.pathname.match(/\/([^/]+)\.html$/)[1];
const action = page.split("-")[0];
const complexity = page.split("-")[1];
let trueAnswer = 0;
function checkPage() {
    let args = [];
    switch (action) {
        case "add":
            {
                switch (complexity) {
                    case "easy":
                        {
                            args = [10, 10, 10];
                        }
                        break;
                    case "middle":
                        {
                            args = [30, 30, 30];
                        }
                        break;
                    case "hard":
                        {
                            args = [30, 30, 50];
                        }
                        break;
                }
            }
            break;
        case "sub":
            {
                switch (complexity) {
                    case "easy":
                        {
                            args = [13, 13, 10];
                        }
                        break;
                    case "middle":
                        {
                            args = [30, 30, 15];
                        }
                        break;
                    case "hard":
                        {
                            args = [30, 30, 20];
                        }
                        break;
                }
            }
            break;
        case "mul":
            {
                switch (complexity) {
                    case "easy":
                        {
                            args = [10, 10, 15];
                        }
                        break;
                    case "middle":
                        {
                            args = [20, 20, 40];
                        }
                        break;
                    case "hard":
                        {
                            args = [10, 10, 50];
                        }
                        break;
                }
            }
            break;
        case "div":
            {
                switch (complexity) {
                    case "easy":
                        {
                            args = [50, 20, 10];
                        }
                        break;
                    case "middle":
                        {
                            args = [70, 50, 10];
                        }
                        break;
                    case "hard":
                        {
                            args = [70, 50, 10];
                        }
                        break;
                }
            }
            break;
    }
    generateEquation(num3, action, args[0], args[1], args[2]);
}
checkPage();
reset.onclick = checkPage;
answers.forEach(checkAnswer);
function checkAnswer(answer) {
    answer.addEventListener("click", () => {
        let answerText = Number(answer.textContent);
        let equationClass = "";
        let timeout1 = 0;
        let timeout2 = 0;
        if (answerText === trueAnswer) {
            checkPage();
            equationClass = "equation--true";
        }
        else {
            audio.play();
            equationClass = "equation--false";
        }
        timeout1 = setTimeout(() => {
            equation.classList.add(equationClass);
        }, 100);
        timeout2 = setTimeout(() => {
            equation.classList.remove(equationClass);
        }, 600);
    });
}
function generateEquation(num3, operator, ...numbers) {
    let number1 = Math.floor(Math.random() * numbers[0]);
    let number2 = Math.floor(Math.random() * numbers[1]);
    let number3 = 0;
    let falseAnswer1 = Math.floor(Math.random() * numbers[2]);
    let falseAnswer2 = Math.floor(Math.random() * numbers[2]);
    let allAnswers = [];
    let switchAnswers = [];
    if (num3)
        number3 = Math.floor(Math.random() * numbers[1]);
    switch (operator) {
        case "add":
            {
                trueAnswer = number1 + number2 + number3;
            }
            break;
        case "sub":
            {
                trueAnswer = number1 - number2 - number3;
            }
            break;
        case "mul":
            {
                trueAnswer = number1 * number2 * number3;
            }
            break;
        case "div":
            {
                if (number3 === 0)
                    number3 = 1;
                trueAnswer = number1 / number2 / number3;
            }
            break;
    }
    num1.textContent = String(number1);
    num2.textContent = String(number2);
    if (num3)
        num3.textContent = String(number3);
    allAnswers = [trueAnswer, falseAnswer1, falseAnswer2];
    for (let i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }
    switch (operator) {
        case "div":
            {
                if (switchAnswers[0] == switchAnswers[1] ||
                    switchAnswers[0] == switchAnswers[2] ||
                    switchAnswers[1] == switchAnswers[2] ||
                    number1 < number2 || number3 == 0 ||
                    number1 == 0 || number2 == 0 ||
                    !Number.isInteger(trueAnswer)) {
                    return checkPage();
                }
            }
            break;
        case "sub":
            {
                if (switchAnswers[0] == switchAnswers[1] ||
                    switchAnswers[0] == switchAnswers[2] ||
                    switchAnswers[1] == switchAnswers[2] ||
                    trueAnswer < 0) {
                    return checkPage();
                }
            }
            break;
        default:
            {
                if (switchAnswers[0] == switchAnswers[1] ||
                    switchAnswers[0] == switchAnswers[2] ||
                    switchAnswers[1] == switchAnswers[2]) {
                    return checkPage();
                }
            }
            break;
    }
    answer1.innerHTML = String(switchAnswers[0]);
    answer2.innerHTML = String(switchAnswers[1]);
    answer3.innerHTML = String(switchAnswers[2]);
}
