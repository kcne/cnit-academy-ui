"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function UserNavigation() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const nav_link = `inline-flex rounded-full px-3 py-1.5 text-slate-500 hover:text-indigo-500 [&.active]:bg-indigo-100 [&.active]:text-indigo-600 `;
  return (
    <>
      <div className="flex space-x-4 mb-4">
        <div
          className={`${nav_link} ${
            pathname === "/user/dashboard" ? "active" : ""
          }`}
        >
          <Link href="/user/dashboard">{t("userNavigation.dashboard")}</Link>
        </div>
        <div
          className={`${nav_link} ${
            pathname === "/user/profile" ? "active" : ""
          }`}
        >
          <Link href="/user/profile">{t("userNavigation.profile")}</Link>
        </div>
        <div
          className={`${nav_link} ${
            pathname === "/user/my_courses" ? "active" : ""
          }`}
        >
          <Link href="/user/my_courses">{t("userNavigation.myCourses")}</Link>
        </div>
        <div
          className={`${nav_link} ${
            pathname === "/user/my_notes" ? "active" : ""
          }`}
        >
          <Link href="/user/my_notes">{t("userNavigation.myNotes")}</Link>
        </div>
      </div>
    </>
  );
}
