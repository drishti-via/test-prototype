import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold font-y2k text-yellow-300 mb-4" style={{textShadow: '2px 2px 0 #000000'}}>★ 404 ★</h1>
        <p className="text-xl text-cyan-300 mb-8 font-mono" style={{background: '#000000', padding: '8px 16px', border: '2px solid #00ffff'}}>Page not found</p>
        <p className="text-black mb-8 font-serif">Oops! The page you're looking for has been moved or doesn't exist.</p>
        <Link href="/" className="btn btn-primary">
          [ Go Home ]
        </Link>
      </div>
    </div>
  )
}