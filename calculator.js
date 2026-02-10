class ScientificCalculator {
    constructor() {
        this.display = document.getElementById('display');
        this.currentValue = '0';
        this.operator = null;
        this.previousValue = null;
        this.waitingForOperand = false;
        this.angleMode = 'rad'; // 'rad' or 'deg'
        this.scientificPanelVisible = false;
        
        this.init();
    }
    
    init() {
        // Number buttons
        document.querySelectorAll('.btn.number').forEach(btn => {
            btn.addEventListener('click', () => {
                const value = btn.dataset.value;
                if (value === 'pi') {
                    this.inputNumber(Math.PI.toString());
                } else {
                    this.inputNumber(value);
                }
            });
        });
        
        //其实_operator buttons
        document.querySelectorAll('.btn.operator').forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleOperator(btn.dataset.value);
            });
        });
        
        // Scientific function buttons
        document.querySelectorAll('.btn.scientific').forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleScientificFunction(btn.dataset.func);
            });
        });
        
        // Calculate button
        document.querySelector('.btn.equals').addEventListener('click', () => {
            this.calculate();
        });
        
        // Clear button
        document.querySelector('.btn.clear[data-action="clear"]').addEventListener('click', () => {
            this.clear();
        });
        
        // Backspace button
        document.querySelector('.btn.clear[data-action="backspace"]').addEventListener('click', () => {
            this.backspace();
        });
        
        // Toggle scientific panel
        document.getElementById('toggleScientific').addEventListener('click', () => {
            this.toggleScientificPanel();
        });
        
        // Angle mode buttons
        document.getElementById('degBtn').addEventListener('click', () => {
            this.setAngleMode('deg');
        });
        
        document.getElementById('radBtn').addEventListener('click', () => {
            this.setAngleMode('rad');
        });
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            this.handleKeyboard(e);
        });
    }
    
    inputNumber(value) {
        if (this.waitingForOperand) {
            this.currentValue = value;
            this.waitingForOperand = false;
        } else {
            this.currentValue = this.currentValue === '0' ? value : this.currentValue + value;
        }
        this.updateDisplay();
    }
    
    handleOperator(nextOperator) {
        const inputValue = parseFloat(this.currentValue);
        
        if (this.previousValue === null) {
            this.previousValue = inputValue;
        } else if (this.operator) {
            const result = this.performCalculation();
            this.currentValue = String(result);
            this.previousValue = result;
        }
        
        this.waitingForOperand = true;
        this.operator = nextOperator;
        this.updateDisplay();
    }
    
    performCalculation() {
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        
        switch (this.operator) {
            case '+':
                return prev + current;
            case '-':
                return prev - current;
            case '*':
                return prev * current;
            case '/':
                if (current === 0) {
                    throw new Error('Division by zero');
                }
                return prev / current;
            default:
                return current;
        }
    }
    
    calculate() {
        if (this.operator && this.previousValue !== null) {
            try {
                const result = this.performCalculation();
                this.currentValue = this.formatResult(result);
                this.previousValue = null;
                this.operator = null;
                this.waitingForOperand = true;
                this.updateDisplay();
            } catch (error) {
                this.display.value = 'Error';
                this.currentValue = '0';
                this.previousValue = null;
                this.operator = null;
            }
        }
    }
    
    handleScientificFunction(func) {
        const value = parseFloat(this.currentValue);
        let result = 0;
        
        try {
            switch (func) {
                case 'sin':
                    result = this.sin(value);
                    break;
                case 'cos':
                    result = this.cos(value);
                    break;
                case 'tan':
                    result = this.tan(value);
                    break;
            }
            
            this.currentValue = this.formatResult(result);
            this.waitingForOperand = true;
            this.updateDisplay();
        } catch (error) {
            this.display.value = 'Error';
            this.currentValue = '0';
        }
    }
    
    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    
    toDegrees(radians) {
        return radians * (180 / Math.PI);
    }
    
    sin(x) {
        return this.angleMode === 'deg' 
            ? Math.sin(this.toRadians(x)) 
            : Math.sin(x);
    }
    
    cos(x) {
        return this.angleMode === 'deg' 
            ? Math.cos(this.toRadians(x)) 
            : Math.cos(x);
    }
    
    tan(x) {
        return this.angleMode === 'deg' 
            ? Math.tan(this.toRadians(x)) 
            : Math.tan(x);
    }
    
    formatResult(number) {
        // Handle floating point precision
        const rounded = Math.round(number * 1000000000000) / 1000000000000;
        return rounded.toString();
    }
    
    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForOperand = false;
        this.updateDisplay();
    }
    
    backspace() {
        if (this.waitingForOperand) {
            this.clear();
            return;
        }
        
        if (this.currentValue.length === 1) {
            this.currentValue = '0';
        } else {
            this.currentValue = this.currentValue.slice(0, -1);
        }
        this.updateDisplay();
    }
    
    toggleScientificPanel() {
        this.scientificPanelVisible = !this.scientificPanelVisible;
        const panel = document.getElementById('scientificPanel');
        const toggleBtn = document.getElementById('toggleScientific');
        
        if (this.scientificPanelVisible) {
            panel.classList.add('visible');
            toggleBtn.classList.add('active');
        } else {
            panel.classList.remove('visible');
            toggleBtn.classList.remove('active');
        }
    }
    
    setAngleMode(mode) {
        this.angleMode = mode;
        document.getElementById('degBtn').classList.toggle('active', mode === 'deg');
        document.getElementById('radBtn').classList.toggle('active', mode === 'rad');
    }
    
    updateDisplay() {
        // Display current expression if we have an operator
        if (this.operator && this.previousValue !== null && !this.waitingForOperand) {
            this.display.value = `${this.previousValue} ${this.operator} ${this.currentValue}`;
        } else {
            // Truncate long numbers for display
            let displayValue = this.currentValue;
            if (displayValue.length > 15 && displayValue.includes('.')) {
                const parts = displayValue.split('.');
                if (parts[0].length > 15) {
                    displayValue = parts[0].substring(0, 15);
                } else {
                    const decimalsAllowed = 15 - parts[0].length;
                    displayValue = parts[0] + '.' + parts[1].substring(0, decimalsAllowed);
                }
            }
            this.display.value = displayValue;
        }
    }
    
    handleKeyboard(e) {
        const key = e.key;
        
        if (key >= '0' && key <= '9') {
            this.inputNumber(key);
        } else if (key === '.') {
            this.inputNumber('.');
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            this.handleOperator(key);
        } else if (key === 'Enter' || key === '=') {
            e.preventDefault();
            this.calculate();
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            this.clear();
        } else if (key === 'Backspace') {
            this.backspace();
        }
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ScientificCalculator();
});