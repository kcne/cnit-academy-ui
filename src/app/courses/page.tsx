import Link from 'next/link'
import CourseCard from '../components/CourseCard'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4">
     <CourseCard title='' users={4.9} rating={128631} points={479} hours={84} />
    </div>
  )
}

