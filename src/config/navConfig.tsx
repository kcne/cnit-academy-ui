import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  UsersIcon,
  SettingsIcon,
} from "lucide-react";

export const mainNavConfig = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "My Courses",
    href: "/my-courses",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "My Programs",
    href: "/my-programs",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <UsersIcon className="h-5 w-5" />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <SettingsIcon className="h-5 w-5" />,
  },
];
