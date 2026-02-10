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
    <div className="min-h-screen bg-dark-bg">
      <div className="page-section">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>
            ★ Blog ★
          </h1>
          <p className="text-cyan-300 mb-12 text-lg font-mono" style={{background: '#000000', padding: '8px 16px', border: '2px solid #00ffff'}}>
            Tips, tutorials, and insights about mathematics and our calculator.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card block y2k-link"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 y2k-bevel text-blue-800 text-xs font-bold font-y2k">
                    {post.category}
                  </span>
                  <span className="text-black text-sm font-mono">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <h2 className="card-title text-xl mb-2">★ {post.title}</h2>
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
    title: '★ Blog ★ - CalcMaster',
    description: 'Tips, tutorials, and insights about mathematics and our scientific calculator.',
  }
}