class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = '0'
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    if (this.currentOperand === '0') {
      return
    }

    if (this.currentOperand.length === 1) {
      this.currentOperand = '0'
      return
    }

    this.currentOperand = this.currentOperand.slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) {
      return
    }

    if (this.currentOperand === '0' && number !== '.') {
      this.currentOperand = number
      return
    }

    this.currentOperand = `${this.currentOperand}${number}`
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') {
      return
    }

    if (this.previousOperand !== '') {
      this.compute()
    }

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = '0'
  }

  compute() {
    const prev = Number.parseFloat(this.previousOperand)
    const current = Number.parseFloat(this.currentOperand)

    if (Number.isNaN(prev) || Number.isNaN(current)) {
      return
    }

    let computation

    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        if (current === 0) {
          this.currentOperand = 'Error'
          this.previousOperand = ''
          this.operation = undefined
          return
        }

        computation = prev / current
        break
      default:
        return
    }

    this.currentOperand = String(computation)
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    if (number === 'Error') {
      return number
    }

    const stringNumber = number.toString()
    const integerDigits = Number.parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]

    let integerDisplay

    if (Number.isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      })
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    }

    return integerDisplay
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)

    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})

calculator.updateDisplay()
