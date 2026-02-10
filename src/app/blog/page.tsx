import Link from 'next/link'

const blogPosts = [
  {
    slug: 'introducing-scientific-calculator',
    title: 'Introducing Our New Scientific Calculator',
    date: '2024-01-15',
    excerpt: 'We are thrilled to announce the launch of our powerful online scientific calculator with advanced trigonometric functions.',
    category: 'Announcements',
  },
  {
    slug: 'understanding-trigonometry',
    title: 'Understanding Trigonometry: A Beginner\'s Guide',
    date: '2024-01-10',
    excerpt: 'Learn the basics of trigonometric functions and how to use them effectively in your calculations.',
    category: 'Tutorial',
  },
  {
    slug: 'degrees-vs-radians',
    title: 'Degrees vs Radians: When to Use Each',
    date: '2024-01-05',
    excerpt: 'Understanding the difference between degrees and radians is crucial for accurate trigonometric calculations.',
    category: 'Educational',
  },
  {
    slug: 'keyboard-shortcuts-pro-tips',
    title: 'Keyboard Shortcuts: Pro Tips for Faster Calculations',
    date: '2024-01-01',
    excerpt: 'Discover how keyboard shortcuts can dramatically improve your calculation speed and efficiency.',
    category: 'Tips & Tricks',
  },
]

export default function BlogPage() {
  return (
    <div>
      <div className="page-section">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-ink-400 mb-4">
            Blog
          </h1>
          <p className="text-ink-200 mb-12 text-lg">
            Tips, tutorials, and insights about mathematics and our calculator.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card block transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-forest-100 text-forest-600 text-xs font-medium rounded">
                    {post.category}
                  </span>
                  <span className="text-ink-100 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <h2 className="card-title text-xl mb-2">{post.title}</h2>
                <p className="card-description">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: 'Blog - CalcMaster',
    description: 'Tips, tutorials, and insights about mathematics and our scientific calculator.',
  }
}