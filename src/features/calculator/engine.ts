/**
 * Pure calculator engine - no DOM operations
 * Can be tested independently and reused across different UI implementations
 */

export type AngleMode = 'deg' | 'rad'
export type Operator = '+' | '-' | '*' | '/' | null
export type ScientificFunction = 'sin' | 'cos' | 'tan'

export interface CalculatorState {
  currentValue: string
  previousValue: number | null
  operator: Operator
  waitingForOperand: boolean
  angleMode: AngleMode
  error: string | null
}

export class CalculatorEngine {
  private state: CalculatorState

  constructor() {
    this.state = this.getInitialState()
  }

  private getInitialState(): CalculatorState {
    return {
      currentValue: '0',
      previousValue: null,
      operator: null,
      waitingForOperand: false,
      angleMode: 'rad',
      error: null,
    }
  }

  getState(): Readonly<CalculatorState> {
    return { ...this.state }
  }

  inputNumber(value: string): CalculatorState {
    let newValue: string
    if (value === 'pi') {
      newValue = Math.PI.toString()
      this.state.waitingForOperand = true
    } else {
      if (this.state.waitingForOperand) {
        newValue = value
        this.state.waitingForOperand = false
      } else {
        newValue = this.state.currentValue === '0' ? value : this.state.currentValue + value
      }
    }
    this.state.currentValue = newValue
    this.state.error = null
    return this.getState()
  }

  handleOperator(nextOperator: string): CalculatorState {
    if (!['+', '-', '*', '/'].includes(nextOperator)) {
      return this.getState()
    }

    const inputValue = parseFloat(this.state.currentValue)

    if (this.state.previousValue === null) {
      this.state.previousValue = inputValue
    } else if (this.state.operator) {
      const result = this.performCalculation()
      this.state.currentValue = this.formatResult(result)
      this.state.previousValue = result
    }

    this.state.waitingForOperand = true
    this.state.operator = nextOperator as Operator
    this.state.error = null
    return this.getState()
  }

  private performCalculation(): number {
    if (this.state.previousValue === null || !this.state.operator) {
      return parseFloat(this.state.currentValue)
    }

    const prev = this.state.previousValue
    const current = parseFloat(this.state.currentValue)

    switch (this.state.operator) {
      case '+':
        return prev + current
      case '-':
        return prev - current
      case '*':
        return prev * current
      case '/':
        if (current === 0) {
          throw new Error('Division by zero')
        }
        return prev / current
      default:
        return current
    }
  }

  calculate(): CalculatorState {
    if (this.state.operator && this.state.previousValue !== null) {
      try {
        const result = this.performCalculation()
        this.state.currentValue = this.formatResult(result)
        this.state.previousValue = null
        this.state.operator = null
        this.state.waitingForOperand = true
        this.state.error = null
      } catch (error) {
        this.state.error = error instanceof Error ? error.message : 'Error'
        this.state.currentValue = '0'
        this.state.previousValue = null
        this.state.operator = null
      }
    }
    return this.getState()
  }

  handleScientificFunction(func: ScientificFunction): CalculatorState {
    const value = parseFloat(this.state.currentValue)
    let result: number

    try {
      switch (func) {
        case 'sin':
          result = this.sin(value)
          break
        case 'cos':
          result = this.cos(value)
          break
        case 'tan':
          result = this.tan(value)
          break
      }

      this.state.currentValue = this.formatResult(result)
      this.state.waitingForOperand = true
      this.state.error = null
    } catch (error) {
      this.state.error = error instanceof Error ? error.message : 'Error'
      this.state.currentValue = '0'
    }

    return this.getState()
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180)
  }

  private sin(x: number): number {
    return this.state.angleMode === 'deg'
      ? Math.sin(this.toRadians(x))
      : Math.sin(x)
  }

  private cos(x: number): number {
    return this.state.angleMode === 'deg'
      ? Math.cos(this.toRadians(x))
      : Math.cos(x)
  }

  private tan(x: number): number {
    return this.state.angleMode === 'deg'
      ? Math.tan(this.toRadians(x))
      : Math.tan(x)
  }

  private formatResult(number: number): string {
    // Handle floating point precision
    const rounded = Math.round(number * 1000000000000) / 1000000000000
    return rounded.toString()
  }

  clear(): CalculatorState {
    this.state = this.getInitialState()
    return this.getState()
  }

  backspace(): CalculatorState {
    if (this.state.waitingForOperand) {
      this.clear()
      return this.getState()
    }

    if (this.state.currentValue.length === 1) {
      this.state.currentValue = '0'
    } else {
      this.state.currentValue = this.state.currentValue.slice(0, -1)
    }
    this.state.error = null
    return this.getState()
  }

  setAngleMode(mode: AngleMode): CalculatorState {
    this.state.angleMode = mode
    return this.getState()
  }

  getDisplayValue(): string {
    const { operator, previousValue, currentValue, error } = this.state

    if (error) {
      return error
    }

    // Display current expression if we have an operator
    if (operator && previousValue !== null && !this.state.waitingForOperand) {
      return `${previousValue} ${operator} ${currentValue}`
    }

    // Truncate long numbers for display
    let displayValue = currentValue
    if (displayValue.length > 15 && displayValue.includes('.')) {
      const parts = displayValue.split('.')
      if (parts[0].length > 15) {
        displayValue = parts[0].substring(0, 15)
      } else {
        const decimalsAllowed = 15 - parts[0].length
        displayValue = parts[0] + '.' + parts[1].substring(0, decimalsAllowed)
      }
    }
    return displayValue
  }
}

// Factory function to create a calculator engine instance
export function createCalculator(): CalculatorEngine {
  return new CalculatorEngine()
}