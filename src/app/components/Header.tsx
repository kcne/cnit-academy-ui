import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="border-b border-gray-300 bg-white p-4 flex justify-between items-center">
        <div className="text-blue-600 text-lg font-bold">PatikaAcademy</div>
        <div className="space-x-4">
          <Link href="/">Homepage</Link>
          <a href="#" className="hover:text-gray-500">
            Courses
          </a>
          <a href="#" className="hover:text-gray-500">
            Programs
          </a>
          <a href="#" className="hover:text-gray-500">
            Leaderboard
          </a>
          <a href="#" className="hover:text-gray-500">
            Blogs
          </a>
          <a href="#" className="hover:text-gray-500">
            Projects
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#">🔍</a>
          <a href="#">
            <i className="fa fa-book text-lg"></i>
          </a>
          <a href="#" className="text-yellow-500">
            <i className="fa fa-diamond"></i> <b>0000</b>
          </a>
          <a href="#" className="text-red-500">
            <i className="fa fa-heart"></i> <b>0000</b>
          </a>
          <Link href={`/user/profile`}>Enes Korac ▼</Link>
        </div>
      </nav>
    </>
  );
}
