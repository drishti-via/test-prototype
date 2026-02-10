# CalcMaster - Scientific Calculator Website

A modern, full-featured scientific calculator website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Calculator Application
- **Basic Arithmetic**: Addition, subtraction, multiplication, division
- **Scientific Functions**: sin, cos, tan with support for both degrees and radians
- **Angle Mode Toggle**: Switch between DEG and RAD modes
- **Keyboard Support**: Full keyboard integration for fast input
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Error Handling**: Graceful handling of division by zero and invalid inputs
- **Pi Constant**: Quick access to the mathematical constant π

### Multi-Page Website
- **Home Page**: Marketing overview with feature highlights
- **Calculator Page**: The main scientific calculator tool
- **Documentation Pages**: Comprehensive guides covering:
  - Getting Started
  - Keyboard Shortcuts
  - Scientific Functions
- **Blog Section**: Educational content about mathematics and calculator usage
- **About Page**: Information about the project and team

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: React with TypeScript
- **Testing**: Jest (unit tests included)
- **Code Quality**: ESLint

## 📁 Project Structure

```
.
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── page.tsx             # Home page
│   │   ├── calculator/          # Calculator page
│   │   ├── docs/                # Documentation pages
│   │   ├── blog/                # Blog pages
│   │   ├── about/               # About page
│   │   ├── layout.tsx           # Root layout with header/footer
│   │   ├── globals.css          # Global styles
│   │   └── sitemap.ts           # SEO sitemap
│   ├── components/              # Shared React components
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   ├── features/
│   │   └── calculator/          # Calculator feature module
│   │       ├── engine.ts        # Pure calculator logic (testable)
│   │       ├── CalculatorWidget.tsx  # UI component
│   │       └── calculator.css   # Calculator-specific styles
│   └── styles/
│       └── tokens.css           # Design system tokens
├── tests/                       # Unit tests
│   └── calculator.test.ts       # Calculator engine tests
├── public/                      # Static assets
│   └── robots.txt               # SEO robots file
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
└── README.md                    # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run unit tests (Jest)

## 🧪 Testing

The project includes comprehensive unit tests for the calculator engine:

```bash
npm test
```

Test coverage includes:
- Basic arithmetic operations
- Trigonometric functions (sin, cos, tan)
- Angle mode switching (DEG/RAD)
- Error handling (division by zero)
- Edge cases and floating point precision
- State management

## 🎨 Design System

The project uses a custom design system built with Tailwind CSS:

### Colors
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Secondary**: Purple accents (#a855f7)
- **Dark Theme**: Dark backgrounds (#0f0f1a, #1a1a2e)
- **Action Colors**: Green (#00d4aa), Red (#e74c3c)

### Typography
- Font Family: Inter (Google Fonts)
- Clear hierarchy with responsive sizing

### Component Styles
- Consistent border radius and spacing
- Smooth hover and active states
- Accessible focus indicators

## 📱 Pages Overview

### [Home Page](/)
Marketing landing page featuring:
- Hero section with CTA buttons
- Feature highlights
- Responsive layout

### [Calculator Page](/calculator)
The scientific calculator application:
- Full keyboard support
- Scientific function panel (toggle)
- Angle mode switcher
- Keyboard shortcuts reference

### [Documentation](/docs)
 Comprehensive guides:
- **Getting Started**: Basic usage guide
- **Keyboard Shortcuts**: Efficient calculation tips
- **Scientific Functions**: Trigonometry explanation

### [Blog](/blog)
Educational content:
- Announcements
- Tutorials
- Tips and tricks
- Mathematics insights

### [About Page](/about)
Project information:
- Mission and values
- Technology stack
- Team overview

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Other Platforms

The project works on any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables

#### Basic Configuration
No environment variables are required for basic functionality. You can add:
- `NEXT_PUBLIC_SITE_URL` - Production URL for SEO
- `NEXT_PUBLIC_ANALYTICS_ID` - Analytics tracking

#### Logging Configuration

The project includes a comprehensive logging system with the following environment variables:

**Log Levels (Client & Server):**
- `NEXT_PUBLIC_LOG_LEVEL` - Controls logging verbosity (`info`, `warning`, `error`)
  - `info` - All log messages (default)
  - `warning` - Only warnings and errors
  - `error` - Only errors

**File-based Logging (Server/Node.js only):**
- `LOG_FILE_PATH` - Path to log file (e.g., `./logs/app.log`)
- `LOG_ROTATE_MAX_BYTES` - Maximum file size before rotation (default: 1048576 = 1MB)
- `LOG_ROTATE_MAX_FILES` - Maximum number of rotated files to keep (default: 5)
- `LOG_RETENTION_DAYS` - Days to retain log files before automatic cleanup (default: 14)

**Python Module Logging (Drishti.py):**
- `DRISHTI_LOG_LEVEL` - Log level for Python module (`INFO`, `WARNING`, `ERROR`, `DEBUG`, `CRITICAL`)
- `DRISHTI_LOG_FILE_PATH` - Path to Python log file (default: `./logs/drishti.log`)
- `DRISHTI_LOG_ROTATE_MAX_BYTES` - Maximum bytes before rotation (default: 1048576)
- `DRISHTI_LOG_ROTATE_MAX_FILES` - Maximum backup files (default: 5)
- `DRISHTI_LOG_RETENTION_DAYS` - Days to retain logs (default: 14)

**Python Module Logging (rose.py):**
- `ROSE_LOG_LEVEL` - Log level for Rose module (`INFO`, `WARNING`, `ERROR`, `DEBUG`, `CRITICAL`)
- `ROSE_LOG_FILE_PATH` - Path to Rose log file (default: `./logs/rose.log`)
- `ROSE_LOG_ROTATE_MAX_BYTES` - Maximum bytes before rotation (default: 1048576)
- `ROSE_LOG_ROTATE_MAX_FILES` - Maximum backup files (default: 5)
- `ROSE_LOG_RETENTION_DAYS` - Days to retain logs (default: 14)
- `ROSE_LOG_FORMAT` - Log format type: `structured` (default) or `simple`

**Python Module Logging (rose.py):**
- `ROSE_LOG_LEVEL` - Log level for Rose module (`INFO`, `WARNING`, `ERROR`, `DEBUG`, `CRITICAL`)
- `ROSE_LOG_FILE_PATH` - Path to Rose log file (default: `./logs/rose.log`)
- `ROSE_LOG_ROTATE_MAX_BYTES` - Maximum bytes before rotation (default: 1048576)
- `ROSE_LOG_ROTATE_MAX_FILES` - Maximum backup files (default: 5)
- `ROSE_LOG_RETENTION_DAYS` - Days to retain logs (default: 14)
- `ROSE_LOG_FORMAT` - Log format type: `structured` (default) or `simple`

**Example `.env` file:**
```bash
# Client-side log level
NEXT_PUBLIC_LOG_LEVEL=info

# Server-side file logging
LOG_FILE_PATH=./logs/app.log
LOG_ROTATE_MAX_BYTES=5242880    # 5MB
LOG_ROTATE_MAX_FILES=10
LOG_RETENTION_DAYS=30

# Python logging - Drishti module
DRISHTI_LOG_LEVEL=INFO
DRISHTI_LOG_FILE_PATH=./logs/drishti.log
DRISHTI_LOG_RETENTION_DAYS=14

# Python logging - Rose module
ROSE_LOG_LEVEL=INFO
ROSE_LOG_FILE_PATH=./logs/rose.log
ROSE_LOG_FORMAT=structured
```

### SEO and Meta Tags
The site includes:
- Dynamic sitemap generation
- Robots.txt configuration
- OpenGraph metadata
- Page-specific titles and descriptions

## 📄 License

This is a prototype project for demonstration purposes.

## 📝 Logging System Documentation

### Overview

The project implements a comprehensive, structured logging system for both JavaScript/TypeScript and Python codebases. Key features include:

- **Structured Logging**: Consistent format with timestamps, levels, and metadata
- **Log Levels info, warning, error
- **Timestamped Entries**: ISO 8601 format (`2024-01-15T10:30:45.123Z`)
- **Multiple Sinks**: Console (always available) and File (Node.js/server)
- **Scoped Loggers**: Create module-specific loggers for better traceability
- **Log Rotation**: Size-based rotation to prevent disk bloat
- **Retention Policies**: Automatic cleanup of old log files
- **Environment Configuration**: Full control via environment variables

### Log Level Hierarchy

Lower levels include higher levels:
- `info` (lowest) - General informational messages
- `warning` - Warnings and issues that don't stop execution
- `error` (highest) - Errors and critical failures

Example: When level is set to `warning`, `info` messages are suppressed but `warning` and `error` messages are shown.

### TypeScript/JavaScript Usage

**Basic Logging:**
```typescript
import { logger } from '@/lib/logger'

logger.info('User logged in', { userId: 123, accountType: 'premium' })
logger.warning('High memory usage detected', { mb: 8192, threshold: 8192 })
logger.error('Database connection failed', error, { retries: 3 })
```

**Scoped Logger:**
```typescript
import { createLogger } from '@/lib/logger'

const engineLogger = createLogger('CalculatorEngine')
engineLogger.info('Calculation performed', { result: 42 })
// Output: [2024-01-15T10:30:45.123Z] [INFO] [CalculatorEngine] Calculation performed {"result":42}
```

**Configuration:**
```typescript
import { logger } from '@/lib/logger'

// Configure logger
logger.configure({
  level: 'warning',
  file: {
    path: './logs/app.log',
    rotate: {
      maxBytes: 5242880,  // 5MB
      maxFiles: 10
    },
    retentionDays: 30
  }
})

// Change level at runtime
logger.setLevel('error')
```

### Python Usage

**Basic Logging:**
```python
from Drishti import get_logger

logger = get_logger('MyModule')
logger.info('Processing started', {'items': 100})
logger.warning('Cache miss', {'key': 'user_123'})
logger.error('Failed to process', exc_info=True)
```

**Scoped Logger:**
```python
from Drishti import get_logger

calc_logger = get_logger('Calculator')
calc_logger.info('Calculation completed', {'result': 42})
```

**Runtime Configuration:**
```python
from Drishti import set_level, configure

# Change level
set_level('ERROR')

# Full configuration
configure(
    level='DEBUG',
    file_path='./logs/custom.log',
    max_bytes=2097152,  # 2MB
    max_files=7,
    retention_days=21
)
```

**Rose Module (Enhanced Python Logging):**
```python
from rose import get_logger, log_execution, LogContext

logger = get_logger('MyModule')
logger.info('Processing started', {'items': 100})

# Use decorator for automatic execution logging
@log_execution()
def process_data(items):
    return [x * 2 for x in items]

# Use context manager for scoped logging
with LogContext('BatchProcessing', level='DEBUG'):
    logger.info('Processing batch')
    # All logs here are at DEBUG level
```

**Rose Module Features:**
- **Decorators**: `@log_execution()` for automatic function entry/exit logging
- **Context Managers**: `LogContext()` for temporary configuration changes
- **Type Safety**: `LogLevel` enum for type-safe level values
- **Format Options**: Structured or simple log formats
- **Full Compatibility**: Same environment variable pattern as Drishti

### Log Format

All log entries follow this structured format:

```
[timestamp] [level] [source] message {metadata}
```

**Example outputs:**

```
[2024-01-15T10:30:45.123Z] [INFO] [CalculatorEngine] Calculator engine initialized
[2024-01-15T10:30:46.456Z] [INFO] [CalculatorWidget] Number input {"value":"5","currentValue":"5"}
[2024-01-15T10:30:47.789Z] [WARNING] [CalculatorEngine] Division by zero attempted {"previousValue":10,"currentValue":0,"operator":"/"}
[2024-01-15T10:30:48.012Z] [ERROR] [CalculatorEngine] Calculation failed Error: Division by zero {"previousValue":10,"operator":"/","currentValue":"0"}
Error: Division by zero
    at CalculatorEngine.performCalculation (engine.ts:102)
    ...
```

### Client vs Server Behavior

**Client-side (Browser):**
- Console-only logging (no file access)
- Level controlled via `NEXT_PUBLIC_LOG_LEVEL`
- Safe for production with `NEXT_PUBLIC_LOG_LEVEL=error`

**Server-side (Node.js):**
- Console + File logging supported
- Full rotation and retention features
- Automatic log cleanup on startup
- Environment-based configuration

### Log Rotation & Retention

**Size-based Rotation:**
- When log file exceeds `maxBytes`, it's renamed with `.1` suffix
- Existing rotated files are shifted (`.1` → `.2`, etc.)
- Files beyond `maxFiles` are deleted automatically

**Time-based Retention:**
- Logs older than `retentionDays` are deleted on startup
- Works with rotated files
- Prevents disk space issues

**Example Rotation Pattern:**
```
logs/app.log          - Current logs
logs/app.log.1        - First rotation (1st backup)
logs/app.log.2        - Second rotation (2nd backup)
logs/app.log.3        - Third rotation (3rd backup, oldest)
```

### Best Practices

1. **Use Scoped Loggers:** Create a logger for each module/file
   ```typescript
   const logger = createLogger('AuthService')
   ```

2. **Include Relevant Metadata:** Pass context as metadata
   ```typescript
   logger.info('User action', { userId, action, timestamp })
   ```

3. **Log at Appropriate Levels:**
   - Use `info` for normal operations
   - Use `warning` for recoverable issues
   - Use `error` for failures requiring attention

4. **Pass Error Objects:** Always pass actual Error objects to `error()`
   ```typescript
   logger.error('Operation failed', error, { operation: 'save' })
   ```

5. **Production Configuration:** Set appropriate levels for production
   ```bash
   NEXT_PUBLIC_LOG_LEVEL=error    # Client
   LOG_FILE_PATH=./logs/app.log  # Server
   ```

## 🤝 Contributing

This is a demonstration project showcasing modern web development practices with Next.js, TypeScript, and Tailwind CSS.

## 📞 Support

For issues or questions:
1. Check the [Documentation](/docs)
2. Read the [Blog](/blog) for tips
3. Review the included examples

---

Built with ❤️ using Next.js and TypeScript