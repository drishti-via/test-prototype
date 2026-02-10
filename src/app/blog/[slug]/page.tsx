import Link from 'next/link'
import { notFound } from 'next/navigation'

const blogPosts: Record<string, any> = {
  'introducing-scientific-calculator': {
    title: 'Introducing Our New Scientific Calculator',
    date: '2024-01-15',
    category: 'Announcements',
    content: `
We are thrilled to announce the launch of our new online scientific calculator! This powerful tool is designed to help students, engineers, and professionals perform complex mathematical calculations with ease.

## Key Features

Our scientific calculator includes:

- **Basic Arithmetic**: Addition, subtraction, multiplication, and division
- **Trigonometric Functions**: sin, cos, and tan with support for both degrees and radians
- **Keyboard Support**: Full keyboard integration for faster input
- **Responsive Design**: Works perfectly on all devices

## Why We Built This

We believe that mathematical tools should be accessible to everyone. Traditional calculators can be expensive and often lack the features needed for advanced calculations. Our web-based solution provides:

1. **Cost-Effective**: Completely free to use
2. **Always Available**: No need to carry a physical calculator
3. **Regular Updates**: We continuously improve based on user feedback
4. **Cross-Platform**: Works on any modern web browser

## What's Next

We have exciting plans for the future, including:
- More advanced scientific functions
- Graphing capabilities
- History tracking
- Custom themes

Stay tuned for more updates!

We'd love to hear from you. Share your feedback and feature requests with us.
    `,
  },
  'understanding-trigonometry': {
    title: 'Understanding Trigonometry: A Beginner\'s Guide',
    date: '2024-01-10',
    category: 'Tutorial',
    content: `
Trigonometry is a branch of mathematics that deals with the relationships between the sides and angles of triangles. In this guide, we'll explore the basics of trigonometric functions and how to use them.

## The Three Main Functions

### Sine (sin)
The sine of an angle in a right triangle is the ratio of the length of the side opposite the angle to the length of the hypotenuse.

\`\`\`
sin(θ) = opposite / hypotenuse
\`\`\`

### Cosine (cos)
The cosine is the ratio of the adjacent side to the hypotenuse.

\`\`\`
cos(θ) = adjacent / hypotenuse
\`\`\`

### Tangent (tan)
The tangent is the ratio of the opposite side to the adjacent side.

\`\`\`
tan(θ) = opposite / adjacent = sin(θ) / cos(θ)
\`\`\`

## Practical Examples

### Calculating Height
If you know the distance from an object and the angle to its top:
\`\`\`
Height = distance × tan(angle)
\`\`\`

### Wave Periods
In physics, sine waves describe periodic phenomena:
- Sound waves
- Light waves
- Electromagnetic signals

## Using Our Calculator

Simply enter your angle and click the desired function:
1. Enter the angle value
2. Click sin, cos, or tan
3. View the result on the display

Remember to set the correct angle mode (DEG or RAD) before calculating!

## Common Values to Remember

| Angle | sin | cos | tan |
|-------|-----|-----|-----|
| 0° | 0 | 1 | 0 |
| 30° | 0.5 | √3/2 | 1/√3 |
| 45° | √2/2 | √2/2 | 1 |
| 90° | 1 | 0 | ∞ |

Understanding these fundamentals will make you more confident in using trigonometric calculations.
    `,
  },
  'degrees-vs-radians': {
    title: 'Degrees vs Radians: When to Use Each',
    date: '2024-01-05',
    category: 'Educational',
    content: `
Understanding when to use degrees versus radians is essential for accurate trigonometric calculations. Let's explore both systems and their applications.

## Degrees (°)

Degrees are the most common way to measure angles in everyday life.
- A full circle = 360°
- A right angle = 90°

**When to use degrees:**
- Navigation and geography
- Construction and architecture
- Everyday measurements
- When working with familiar angle values (90°, 180°, 270°)

### Common Degree Values
- 0° = Starting position
- 90° = Right angle
- 180° = Half circle
- 270° = Three-quarter circle
- 360° = Full circle (same as 0°)

## Radians (rad)

Radians are the standard unit in mathematics and physics.
- A full circle = 2π radians
- A right angle = π/2 radians

**When to use radians:**
- Higher mathematics (calculus, differential equations)
- Physics calculations
- Engineering applications
- When working with π-based formulas

### Radian Conversion
\`\`\`
radians = degrees × (π / 180)
degrees = radians × (180 / π)
\`\`\`

## Why Radians in Mathematics?

Radians are "natural" because:
1. The arc length formula is simple: s = r × θ
2. They simplify derivative formulas in calculus
3. Many mathematical formulas assume radian input

## Examples

### Using Degrees
\`\`\`
sin(90°) = 1
cos(180°) = -1
tan(45°) = 1
\`\`\`

### Using Radians
\`\`\`
sin(π/2) = 1
cos(π) = -1
tan(π/4) = 1
\`\`\`

## Quick Conversion Table

| Degrees | Radians |
|---------|---------|
| 0° | 0 |
| 30° | π/6 |
| 45° | π/4 |
| 60° | π/3 |
| 90° | π/2 |
| 180° | π |
| 270° | 3π/2 |
| 360° | 2π |

## Pro Tips

1. **Always check your mode**: Before using trigonometric functions, verify if you're in DEG or RAD mode
2. **Conversion formula**: Remember π = 180° for quick mental conversions
3. **Calculator behavior**: Our calculator maintains the selected mode across all operations

Understanding both systems will make you a more versatile mathematician!
    `,
  },
  'keyboard-shortcuts-pro-tips': {
    title: 'Keyboard Shortcuts: Pro Tips for Faster Calculations',
    date: '2024-01-01',
    category: 'Tips & Tricks',
    content: `
If you want to calculate faster and more efficiently, mastering keyboard shortcuts is essential. Here are our pro tips for maximizing your productivity with our scientific calculator.

## Essential Shortcuts

### Numbers and Operators
- **0-9**: Direct input of numbers
- **+ - * /**: Mathematical operators
- **.**: Decimal point

### Action Keys
- **Enter or =**: Calculate result
- **Escape or C**: Clear all
- **Backspace**: Delete last digit

## Pro Level Techniques

### Chain Calculations
Don't calculate intermediate results manually - let the calculator handle it:

\`\`\`
10 + 5 * 3 - 2 = ✓
\`\`\`

The calculator automatically handles the correct order of operations!

### Quick Clear and Reset
Made a mistake? Press Escape to instantly clear everything. This is faster than clicking the C button multiple times.

### Efficient Trigonometric Functions
1. Enter your angle value
2. Use the keyboard shortcut if available, or click the function button
3. Immediately see the result

## Workflow Optimization

### For Students
When solving homework problems:
1. Set your angle mode (usually DEG for geometry, RAD for calculus)
2. Work through calculations sequentially
3. Use Escape between different problems

### For Engineers
When performing complex calculations:
1. Plan your calculation steps
2. Use chain calculations to avoid manual re-entry
3. Document intermediate values if needed

## Common Mistakes to Avoid

### ⚠️ Wrong Angle Mode
Always verify you're in the correct mode (DEG vs RAD) before using trigonometric functions. This is the #1 cause of calculator "errors."

### ⚠️ Clearing Too Early
Don't clear if you want to keep your previous result for the next calculation. The operator buttons automatically use the current result.

### ⚠️ Ignoring Order of Operations
The calculator follows PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction). Use this to your advantage!

## Advanced Tips

### Using π Constant
Instead of typing 3.14159..., click the π button for maximum precision.

### Continuous Calculation
After calculating a result, start your next operation directly:
\`\`\`
sin(π/2) = 1 → * 2 = 2 → + 3 = 5
\`\`\`

### Keyboard Focus
The shortcuts are only active on the Calculator page, so they won't interfere with browser navigation or other page elements.

## Practice Makes Perfect

Try these exercises to build muscle memory:
1. Calculate a series of operations without using the mouse
2. Practice switching between angle modes
3. Work through trigonometric problems using only keyboard and function buttons

## Conclusion

Mastering keyboard shortcuts will dramatically improve your calculation speed. Start with the essential keys, then gradually incorporate the more advanced techniques into your workflow.

Happy calculating! 🚀
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="text-primary-400 hover:text-primary-300 transition-colors mb-8 inline-block"
          >
            ← Back to Blog
          </Link>

          <div className="mb-8">
            <span className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm font-medium rounded">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <p className="text-gray-500 mb-12">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <article className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 whitespace-pre-line leading-relaxed">
              {post.content}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}