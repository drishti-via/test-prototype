/**
 * Unit tests for the Calculator Engine
 * Pure logic tests without DOM dependencies
 */

import { CalculatorEngine, createCalculator } from '../src/features/calculator/engine'

describe('CalculatorEngine', () => {
  let calculator: CalculatorEngine

  beforeEach(() => {
    calculator = createCalculator()
  })

  describe('Basic Arithmetic', () => {
    test('should add two numbers', () => {
      calculator.inputNumber('5')
      calculator.handleOperator('+')
      calculator.inputNumber('3')
      calculator.calculate()
      expect(calculator.getDisplayValue()).toBe('8')
    })

    test('should subtract two numbers', () => {
      calculator.inputNumber('10')
      calculator.handleOperator('-')
      calculator.inputNumber('4')
      calculator.calculate()
      expect(calculator.getDisplayValue()).toBe('6')
    })

    test('should multiply two numbers', () => {
      calculator.inputNumber('6')
      calculator.handleOperator('*')
      calculator.inputNumber('7')
      calculator.calculate()
      expect(calculator.getDisplayValue()).toBe('42')
    })

    test('should divide two numbers', () => {
      calculator.inputNumber('20')
      calculator.handleOperator('/')
      calculator.inputNumber('4')
      calculator.calculate()
      expect(calculator.getDisplayValue()).toBe('5')
    })

    test('should handle decimal numbers', () => {
      calculator.inputNumber('3')
      calculator.inputNumber('.')
      calculator.inputNumber('5')
      expect(calculator.getDisplayValue()).toBe('3.5')
    })
  })

  describe('Division by Zero', () => {
    test('should handle division by zero gracefully', () => {
      calculator.inputNumber('10')
      calculator.handleOperator('/')
      calculator.inputNumber('0')
      calculator.calculate()
      expect(calculator.getState().error).toBe('Division by zero')
      expect(calculator.getDisplayValue()).toBe('Division by zero')
    })
  })

  describe('Trigonometric Functions - RAD Mode', () => {
    test('should calculate sin in radians', () => {
      calculator.inputNumber('1')
      calculator.handleScientificFunction('sin')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(Math.sin(1), 12)
    })

    test('should calculate sin(π/2) = 1', () => {
      calculator.inputNumber('pi')  // This inputs Math.PI
      calculator.handleOperator('/')
      calculator.inputNumber('2')
      calculator.calculate()
      calculator.handleScientificFunction('sin')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(1, 12)
    })

    test('should calculate cos(0) = 1', () => {
      calculator.inputNumber('0')
      calculator.handleScientificFunction('cos')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(1, 12)
    })

    test('should calculate cos(π) = -1', () => {
      calculator.inputNumber('pi')
      calculator.handleScientificFunction('cos')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(-1, 12)
    })

    test('should calculate tan(π/4) = 1', () => {
      calculator.inputNumber('pi')
      calculator.handleOperator('/')
      calculator.inputNumber('4')
      calculator.calculate()
      calculator.handleScientificFunction('tan')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(1, 12)
    })
  })

  describe('Trigonometric Functions - DEG Mode', () => {
    beforeEach(() => {
      calculator.setAngleMode('deg')
    })

    test('should calculate sin in degrees', () => {
      calculator.inputNumber('90')
      calculator.handleScientificFunction('sin')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(1, 12)
    })

    test('should calculate sin(0) = 0', () => {
      calculator.inputNumber('0')
      calculator.handleScientificFunction('sin')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(0, 12)
    })

    test('should calculate cos(90) = 0', () => {
      calculator.inputNumber('90')
      calculator.handleScientificFunction('cos')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(0, 12)
    })

    test('should calculate cos(180) = -1', () => {
      calculator.inputNumber('180')
      calculator.handleScientificFunction('cos')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(-1, 12)
    })

    test('should calculate tan(45) = 1', () => {
      calculator.inputNumber('45')
      calculator.handleScientificFunction('tan')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(1, 12)
    })

    test('should calculate sin(30) = 0.5', () => {
      calculator.inputNumber('30')
      calculator.handleScientificFunction('sin')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(0.5, 12)
    })

    test('should calculate tan(60)', () => {
      calculator.inputNumber('60')
      calculator.handleScientificFunction('tan')
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(Math.sqrt(3), 12)
    })
  })

  describe('Angle Mode Switching', () => {
    test('should start in RAD mode', () => {
      expect(calculator.getState().angleMode).toBe('rad')
    })

    test('should switch to DEG mode', () => {
      calculator.setAngleMode('deg')
      expect(calculator.getState().angleMode).toBe('deg')
    })

    test('should switch back to RAD mode', () => {
      calculator.setAngleMode('deg')
      calculator.setAngleMode('rad')
      expect(calculator.getState().angleMode).toBe('rad')
    })

    test('should produce different results for sin(90) in DEG vs RAD', () => {
      // In radians: sin(90) ≈ 0.893997
      calculator.inputNumber('90')
      calculator.handleScientificFunction('sin')
      const radResult = parseFloat(calculator.getDisplayValue())

      calculator.clear()
      calculator.setAngleMode('deg')

      // In degrees: sin(90°) = 1
      calculator.inputNumber('90')
      calculator.handleScientificFunction('sin')
      const degResult = parseFloat(calculator.getDisplayValue())

      expect(Math.abs(degResult - radResult)).toBeGreaterThan(0.1)
      expect(degResult).toBeCloseTo(1, 12)
    })
  })

  describe('Clear and Backspace', () => {
    test('should clear calculator', () => {
      calculator.inputNumber('5')
      calculator.handleOperator('+')
      calculator.inputNumber('3')
      calculator.clear()
      expect(calculator.getDisplayValue()).toBe('0')
      expect(calculator.getState().currentValue).toBe('0')
      expect(calculator.getState().previousValue).toBe(null)
      expect(calculator.getState().operator).toBe(null)
    })

    test('should backspace single digit', () => {
      calculator.inputNumber('5')
      calculator.backspace()
      expect(calculator.getDisplayValue()).toBe('0')
    })

    test('should backspace last digit', () => {
      calculator.inputNumber('5')
      calculator.inputNumber('2')
      calculator.inputNumber('3')
      calculator.backspace()
      expect(calculator.getDisplayValue()).toBe('52')
    })

    test('should backspace decimal', () => {
      calculator.inputNumber('3')
      calculator.inputNumber('.')
      calculator.inputNumber('5')
      calculator.backspace()
      expect(calculator.getDisplayValue()).toBe('3')
    })
  })

  describe('Chained Operations', () => {
    test('should handle chained multiplication and addition', () => {
      calculator.inputNumber('2')
      calculator.handleOperator('*')
      calculator.inputNumber('3')
      calculator.calculate()
      calculator.handleOperator('+')
      calculator.inputNumber('4')
      calculator.calculate()
      expect(calculator.getDisplayValue()).toBe('10')
    })

    test('should handle multiple operations in sequence', () => {
      calculator.inputNumber('10')
      calculator.handleOperator('+')
      calculator.inputNumber('5')
      calculator.handleOperator('*')
      calculator.inputNumber('2')
      calculator.calculate()
      expect(calculator.getDisplayValue()).toBe('20')
    })

    test('should correctly follow order of operations', () => {
      calculator.inputNumber('5')
      calculator.handleOperator('+')
      calculator.inputNumber('3')
      calculator.handleOperator('*')
      calculator.inputNumber('4')
      calculator.calculate()
      expect(calculator.getDisplayValue()).toBe('17')
    })
  })

  describe('Pi Constant', () => {
    test('should input pi value', () => {
      calculator.inputNumber('pi')
      const value = parseFloat(calculator.getState().currentValue)
      expect(value).toBeCloseTo(Math.PI, 12)
    })

    test('should use pi in calculations', () => {
      calculator.inputNumber('pi')
      calculator.handleOperator('*')
      calculator.inputNumber('2')
      calculator.calculate()
      const result = parseFloat(calculator.getDisplayValue())
      expect(result).toBeCloseTo(2 * Math.PI, 12)
    })
  })

  describe('Display Formatting', () => {
    test('should display single number', () => {
      calculator.inputNumber('5')
      calculator.inputNumber('3')
      expect(calculator.getDisplayValue()).toBe('53')
    })

    test('should display expression during calculation', () => {
      calculator.inputNumber('5')
      calculator.handleOperator('+')
      calculator.inputNumber('3')
      expect(calculator.getDisplayValue()).toBe('5 + 3')
    })

    test('should truncate long decimal numbers', () => {
      calculator.inputNumber('0')
      calculator.inputNumber('.')
      for (let i = 0; i < 20; i++) {
        calculator.inputNumber('1')
      }
      const display = calculator.getDisplayValue()
      expect(display.length).toBeLessThanOrEqual(15)
    })
  })

  describe('State Management', () => {
    test('should return immutable state', () => {
      calculator.inputNumber('5')
      const state = calculator.getState()
      state.currentValue = '999'
      expect(calculator.getState().currentValue).toBe('5')
    })

    test('should reflect correct state changes', () => {
      expect(calculator.getState().waitingForOperand).toBe(false)

      calculator.inputNumber('5')
      expect(calculator.getState().waitingForOperand).toBe(false)

      calculator.handleOperator('+')
      expect(calculator.getState().waitingForOperand).toBe(true)

      calculator.inputNumber('3')
      expect(calculator.getState().waitingForOperand).toBe(false)
    })
  })

  describe('Edge Cases', () => {
    test('should handle multiple decimal points correctly', () => {
      calculator.inputNumber('1')
      calculator.inputNumber('.')
      calculator.inputNumber('5')
      calculator.inputNumber('.')
      calculator.inputNumber('2')
      expect(calculator.getDisplayValue()).toBe('1.52')
    })

    test('should handle leading zero', () => {
      calculator.inputNumber('0')
      calculator.inputNumber('5')
      expect(calculator.getDisplayValue()).toBe('5')
    })

    test('should handle calculation with negative result', () => {
      calculator.inputNumber('5')
      calculator.handleOperator('-')
      calculator.inputNumber('10')
      calculator.calculate()
      expect(calculator.getDisplayValue()).toBe('-5')
    })

    test('should handle floating point precision', () => {
      calculator.inputNumber('0')
      calculator.inputNumber('.')
      calculator.inputNumber('1')
      calculator.inputNumber('5')
      calculator.handleOperator('+')
      calculator.inputNumber('0')
      calculator.inputNumber('.')
      calculator.inputNumber('2')
      calculator.inputNumber('5')
      calculator.calculate()
      expect(calculator.getDisplayValue()).toBe('0.4')
    })
  })
})