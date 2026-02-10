'use client'

import { useState, useEffect, useRef } from 'react'
import { createCalculator, CalculatorState } from './engine'
import { createLogger } from '@/lib/logger'

const logger = createLogger('CalculatorWidget')

export default function CalculatorWidget() {
  const [calculator] = useState(createCalculator)
  const [state, setState] = useState(calculator.getState())
  const [scientificPanelVisible, setScientificPanelVisible] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  const handleNumber = (value: string) => {
    calculator.inputNumber(value)
    setState(calculator.getState())
    logger.info('Number input', { value, currentValue: calculator.getState().currentValue })
  }

  const handleOperator = (value: string) => {
    calculator.handleOperator(value)
    setState(calculator.getState())
    logger.info('Operator input', { operator: value, previousValue: calculator.getState().previousValue })
  }

  const handleScientificFunction = (func: 'sin' | 'cos' | 'tan') => {
    calculator.handleScientificFunction(func)
    setState(calculator.getState())
    logger.info('Scientific function called', { function: func })
  }

  const handleCalculate = () => {
    const previousState = calculator.getState()
    calculator.calculate()
    const newState = calculator.getState()
    setState(newState)
    if (newState.error) {
      logger.warning('Calculation resulted in error', { error: newState.error, previousState })
    }
  }

  const handleClear = () => {
    calculator.clear()
    setState(calculator.getState())
    logger.info('Calculator cleared by user')
  }

  const handleBackspace = () => {
    calculator.backspace()
    setState(calculator.getState())
    logger.info('Backspace pressed')
  }

  const handleAngleMode = (mode: 'deg' | 'rad') => {
    calculator.setAngleMode(mode)
    setState(calculator.getState())
    logger.info('Angle mode toggled by user', { mode })
  }

  const toggleScientificPanel = () => {
    setScientificPanelVisible(!scientificPanelVisible)
    logger.info('Scientific panel toggled', { visible: !scientificPanelVisible })
  }

  const getDisplayValue = () => calculator.getDisplayValue()

  // Keyboard support - only when widget is focused or calculator page
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      // Check if the keyboard event originated from the calculator page
      const isCalculatorPage = window.location.pathname === '/calculator'
      const isWidgetFocused = widgetRef.current?.contains(document.activeElement)

      if (!isCalculatorPage || (!isWidgetFocused && document.activeElement?.tagName === 'INPUT')) {
        return
      }

      const key = e.key

      if (key >= '0' && key <= '9') {
        e.preventDefault()
        handleNumber(key)
      } else if (key === '.') {
        e.preventDefault()
        handleNumber('.')
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        e.preventDefault()
        handleOperator(key)
      } else if (key === 'Enter' || key === '=') {
        e.preventDefault()
        handleCalculate()
      } else if (key === 'Escape' || key === 'c' || key === 'C') {
        e.preventDefault()
        handleClear()
      } else if (key === 'Backspace') {
        e.preventDefault()
        handleBackspace()
      } else {
        // Log unexpected keys for debugging (only in development or if info level is enabled)
        logger.info('Keyboard key ignored (not a calculator key)', { key })
      }
    }

    document.addEventListener('keydown', handleKeyboard)
    return () => document.removeEventListener('keydown', handleKeyboard)
  }, [])

  // Log widget mount
  useEffect(() => {
    logger.info('Calculator widget mounted', { scientificPanelVisible })
    return () => {
      logger.info('Calculator widget unmounted')
    }
  }, [])

  return (
    <div className="calculator" ref={widgetRef} aria-label="Scientific Calculator">
      <h1 className="text-2xl text-ink-400 text-center mb-5 font-medium">
        Scientific Calculator
      </h1>

      {/* Toggle Button */}
      <button
        className="toggle-btn"
        onClick={toggleScientificPanel}
        aria-expanded={scientificPanelVisible}
        aria-controls="scientificPanel"
      >
        <span
          className={`transition-transform duration-300 ${scientificPanelVisible ? 'rotate-45' : ''}`}
        >
          +
        </span>
        {' '}
        Scientific Functions
      </button>

      {/* Scientific Panel */}
      <div
        id="scientificPanel"
        className={`scientific-panel ${scientificPanelVisible ? 'visible' : ''}`}
        aria-hidden={!scientificPanelVisible}
      >
        <button
          className="btn scientific"
          onClick={() => handleScientificFunction('sin')}
          aria-label="Sine function"
        >
          sin
        </button>
        <button
          className="btn scientific"
          onClick={() => handleScientificFunction('cos')}
          aria-label="Cosine function"
        >
          cos
        </button>
        <button
          className="btn scientific"
          onClick={() => handleScientificFunction('tan')}
          aria-label="Tangent function"
        >
          tan
        </button>
      </div>

      {/* Display */}
      <div className="display">
        <input
          type="text"
          value={getDisplayValue()}
          readOnly
          aria-live="polite"
          aria-label="Calculator display"
        />
      </div>

      {/* Basic Calculator Buttons */}
      <div className="buttons">
        <button
          className="btn number"
          onClick={() => handleNumber('7')}
          aria-label="Number 7"
        >
          7
        </button>
        <button
          className="btn number"
          onClick={() => handleNumber('8')}
          aria-label="Number 8"
        >
          8
        </button>
        <button
          className="btn number"
          onClick={() => handleNumber('9')}
          aria-label="Number 9"
        >
          9
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperator('/')}
          aria-label="Divide"
        >
          /
        </button>
        <button
          className="btn clear"
          onClick={handleClear}
          aria-label="Clear all"
        >
          C
        </button>

        <button
          className="btn number"
          onClick={() => handleNumber('4')}
          aria-label="Number 4"
        >
          4
        </button>
        <button
          className="btn number"
          onClick={() => handleNumber('5')}
          aria-label="Number 5"
        >
          5
        </button>
        <button
          className="btn number"
          onClick={() => handleNumber('6')}
          aria-label="Number 6"
        >
          6
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperator('*')}
          aria-label="Multiply"
        >
          ×
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperator('-')}
          aria-label="Subtract"
        >
          −
        </button>

        <button
          className="btn number"
          onClick={() => handleNumber('1')}
          aria-label="Number 1"
        >
          1
        </button>
        <button
          className="btn number"
          onClick={() => handleNumber('2')}
          aria-label="Number 2"
        >
          2
        </button>
        <button
          className="btn number"
          onClick={() => handleNumber('3')}
          aria-label="Number 3"
        >
          3
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperator('+')}
          aria-label="Add"
        >
          +
        </button>
        <button
          className="btn equals row-span-2"
          onClick={handleCalculate}
          aria-label="Equals"
        >
          =
        </button>

        <button
          className="btn number"
          onClick={() => handleNumber('0')}
          aria-label="Number 0"
        >
          0
        </button>
        <button
          className="btn number"
          onClick={() => handleNumber('.')}
          aria-label="Decimal point"
        >
          .
        </button>
        <button
          className="btn operator"
          onClick={() => handleNumber('pi')}
          aria-label="Pi constant"
        >
          π
        </button>
        <button
          className="btn clear"
          onClick={handleBackspace}
          aria-label="Backspace"
        >
          ⌫
        </button>
      </div>

      {/* Angle Mode Toggle */}
      <div className="angle-mode">
        <button
          className={`angle-btn ${state.angleMode === 'deg' ? 'active' : ''}`}
          onClick={() => handleAngleMode('deg')}
          aria-pressed={state.angleMode === 'deg'}
        >
          DEG
        </button>
        <button
          className={`angle-btn ${state.angleMode === 'rad' ? 'active' : ''}`}
          onClick={() => handleAngleMode('rad')}
          aria-pressed={state.angleMode === 'rad'}
        >
          RAD
        </button>
      </div>
    </div>
  )
}