import Link from "next/link";

export default function UserNavigation() {
  const nav_link =
    "px-4 py-2 rounded-lg hover:bg-gray-200 active:text-blue-600 active:underline my-2";
  return (
    <>
      <div className="flex space-x-4">
        <div className={nav_link}>
          <Link href="/user/dashboard">Dashboard</Link>
        </div>
        <div className={nav_link}>
          <Link href="/user/profile">Profile</Link>
        </div>
        <div className={nav_link}>
          <Link href="/user/my_courses">My Courses</Link>
        </div>
        <div className={nav_link}>
          <Link href="/user/my_notes">My Notes</Link>
        </div>
      </div>
    </>
  );
}
