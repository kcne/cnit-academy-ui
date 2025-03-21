"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserNavigation() {
  const pathname = usePathname();
  const nav_link = `inline-flex rounded-full px-3 py-1.5 text-slate-500 hover:text-indigo-500 [&.active]:bg-indigo-100 [&.active]:text-indigo-600 `;
  return (
    <>
      <div className="flex space-x-4 space-y-2">
        <div
          className={`${nav_link} ${
            pathname === "/user/dashboard" ? "active" : ""
          }`}
        >
          <Link href="/user/dashboard">Dashboard</Link>
        </div>
        <div
          className={`${nav_link} ${
            pathname === "/user/profile" ? "active" : ""
          }`}
        >
          <Link href="/user/profile">Profile</Link>
        </div>
        <div
          className={`${nav_link} ${
            pathname === "/user/my_courses" ? "active" : ""
          }`}
        >
          <Link href="/user/my_courses">My Courses</Link>
        </div>
        <div
          className={`${nav_link} ${
            pathname === "/user/my_notes" ? "active" : ""
          }`}
        >
          <Link href="/user/my_notes">My Notes</Link>
        </div>
      </div>
    </>
  );
}
