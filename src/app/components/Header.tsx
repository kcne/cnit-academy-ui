import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="border-b border-gray-300 bg-white p-4 flex justify-between items-center">
        <div className="text-blue-600 text-lg font-bold">PatikaAcademy</div>
        <div className="space-x-4">
          <Link href="/user/dashboard" className="hover:text-gray-500">
            Homepage
          </Link>
          <Link href="/courses" className="hover:text-gray-500">
            Courses
          </Link>
          <Link href="/programs" className="hover:text-gray-500">
            Programs
          </Link>
          <Link href="/leaderboard" className="hover:text-gray-500">
            Leaderboard
          </Link>
          <Link href="/blogs" className="hover:text-gray-500">
            Blogs
          </Link>
          <Link href="/aboutUs" className="hover:text-gray-500">
            About us
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#">🔍</a>
          <a href="#">
            <i className="fa fa-book text-lg"></i>
          </a>
          <a href="#" className="text-yellow-500">
            🟡 <b>0000</b>
          </a>
          <a href="#" className="text-red-500">
            ❤ <b>0000</b>
          </a>
          <Link href={`/user/profile`}>Enes Korac ▼</Link>
        </div>
      </nav>
    </>
  );
}
