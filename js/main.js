/*
Problem:
    Built a calculator which allows to realice basic mathematical operations
    such as addition, substraction, multiplication and division. Allow user to
    reset the calculator state and delete introduced data.

Plan:
    - User interface:
        Interaction will be done throught webpage where the user clicks in the
        numbers and operators.
    - Data inputs:
        Clicking in numbers and operators should introduce such numbers and
        operators as values to iterate with.
    - Desired outputs:
        When the user makes an addition the result should be an addition
        between the input numbers.
        When the user makes a substraction the result should be a substraction
        between the input numbers.
        When the user makes a division the result should be a division
        between the input numbers.
        When the user makes a multiplication the result should be a
        multiplication between the input numbers.
        Clearing (C) should reset the calculator state to that of a fresh
        loaded webpage.
        Deleting (Del) should delete the last number input by the user.
*/

const calcDisplay = document.querySelector("#result");

const numbers = document.querySelectorAll(".number");

const add = document.querySelector("#add");
const substract = document.querySelector("#substract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const percent = document.querySelector("#percent");

const equal = document.querySelector("#equal");

const clear = document.querySelector("#clear");
const deleteNumber = document.querySelector("#delete");

let inputNumber = "",
    holdNumber,
    result,
    operator;

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        const value = e.target.textContent;
        inputNumber += value;
        calcDisplay.textContent = inputNumber;
        console.log(inputNumber)
    })    
});

add.addEventListener("click", () => {
    if (operator === "equal") {
        inputNumber = "";
        holdNumber = result;
        return operator = "add"
    }
    holdNumber = inputNumber;
    inputNumber = "";
    operator = "add";
})

equal.addEventListener("click", () => {
    const firstNum = parseFloat(holdNumber);
    const secondNum = parseFloat(inputNumber);
    switch (operator) {
        case "add":
            result = addition(firstNum, secondNum)
            calcDisplay.textContent = result;
            operator = "equal";
            console.log(result);
            break;
    
        default:
            break;
    }
})

function addition(first, second) {
    return first + second
}