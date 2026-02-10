import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ghibli-sky flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-ink-400 mb-4">404</h1>
        <p className="text-xl text-ink-200 mb-8">Page not found</p>
        <Link href="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  )
}