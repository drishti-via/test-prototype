# Scientific Calculator

A modern, interactive web-based scientific calculator with basic arithmetic and trigonometric functions.

## Features

### Basic Arithmetic
- Addition, subtraction, multiplication, division
- Decimal numbers support
- π constant
- Backspace and clear functions

### Scientific Functions
- **sin** - Sine function
- **cos** - Cosine function
- **tan** - Tangent function

### Angle Modes
- **RAD** (Radians) - Default mode
- **DEG** (Degrees) - Toggle between modes

### Interactive UI
- **Toggle button** - Expand/collapse the scientific panel
- **Responsive design** - Works on desktop and mobile
- **Keyboard support** - Use your keyboard for quick input
- **Modern UI** - Gradient background with smooth animations

## Usage

### Running the Calculator

Simply open `index.html` in any modern web browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use Python simple server
python -m http.server 8000
# Then navigate to http://localhost:8000

# Option 3: Use Node.js http-server
npx http-server
# Then navigate to the provided URL
```

### How to Use

1. **Basic Operations**
   - Enter numbers and operators (e.g., `5 + 3`)
   - Press `=` or Enter to calculate
   - Use `C` to clear and `⌫` to backspace

2. **Scientific Functions**
   - Click the `+ Scientific Functions` button to expand the panel
   - Enter a number, then click a scientific function (sin, cos, or tan)
   - Example: Enter `90`, ensure DEG mode is active, click `sin` → Result: `1`

3. **Angle Mode**
   - Toggle between **RAD** (radians) and **DEG** (degrees)
   - RAD is used for mathematical calculations
   - DEG is intuitive for everyday use

### Examples

| Expression | Mode | Result |
|------------|------|--------|
| `sin(π/2)` | RAD | `1` |
| `sin(90)` | DEG | `1` |
| `cos(0)` | RAD | `1` |
| `cos(180)` | DEG | `-1` |
| `tan(45)` | DEG | `1` |
| `tan(π/4)` | RAD | `1` |
| `π / 2` | - | `1.570796...` |
| `e^2` | - | `7.389056...` |

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `0-9` | Enter number |
| `.` | Decimal point |
| `+ - * /` | Operators |
| `=` or `Enter` | Calculate |
| `Escape` or `C` | Clear |
| `Backspace` | Delete last digit |

## Technical Details

- **Language**: Pure HTML, CSS, and JavaScript (no dependencies)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Responsive**: Works on all screen sizes

## File Structure

```
.
├── index.html          # Main HTML structure
├── calculator.css      # Styling and animations
├── calculator.js       # Calculator logic and event handling
└── README.md          # This file
```

## License

This is a prototype project for demonstration purposes.