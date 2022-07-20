class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = underfined
    }

    delete() {}

    appendNumber(number){}

    //Θα συμβαίνει όταν ο χρήστης πατάει κάποιο operation
    chooseOperation() {
}

    compute() {

    }

updateDisplay() {

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data--current-operand]')