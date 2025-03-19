import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4">
      <Link
        href="/login"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
      >
        Register
      </Link>
    </div>
  )
}

