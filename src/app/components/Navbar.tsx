"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Code2, UserIcon, Settings, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ProfileDropdown } from "./ProfileDropdown";
import { useUser } from "../providers/userContext";
import type { User } from "../providers/userContext";
import { Skeleton } from "@/components/ui/skeleton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, fetchUserInfo, loading } = useUser();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const navItems = [
    // vec moze da ide na home preko ikonice
    // { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/aboutUs" },
    { name: "For professors", href: "/roleRequest" },
  ];

  const getUserInitials = (user: User | undefined) => {
    if (!user) return "";
    return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center lg:gap-12 w-full mr-4 lg:mr-12">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="text-xl font-bold">CentarNit&nbsp;Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center w-full justify-evenly lg:justify-start lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Auth Buttons or Profile Dropdown */}
        <div className="hidden md:flex items-center gap-4">
          {loading ? (
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          ) : user ? (
            <ProfileDropdown user={user} onSignOut={logout} />
          ) : (
            <>
              <Link
                href="/login"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Sign in
              </Link>
              <Link href="/register" className={buttonVariants({ size: "sm" })}>
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed right-0 z-50 md:hidden",
          isOpen ? "block" : "hidden",
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Navigation Panel */}
        <div className="relative h-full w-full max-w-sm bg-background border-l shadow-lg">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-6 w-6" />
              <span className="text-xl font-bold">CentarNit Academy</span>
            </Link>
            {/*  <Button */}
            {/*   variant="ghost" */}
            {/*   size="icon" */}
            {/*   onClick={() => setIsOpen(false)} */}
            {/* > */}
            {/*   <X className="h-6 w-6" /> */}
            {/* </Button> */}
          </div>
          <nav className="flex flex-col gap-4 px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              {loading ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 p-2">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-9 w-full" />
                </div>
              ) : user ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 p-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <span className="text-sm font-medium">
                        {getUserInitials(user)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {user.firstName} {user.lastName}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {user.email}
                      </span>
                    </div>
                  </div>
                  <Link href="/dashboard">
                    <div className="flex ml-2" onClick={() => setIsOpen(false)}>
                      <UserIcon className="mr-2 h-4 w-4" />
                      <span className="text-sm">Dashboard</span>
                    </div>
                  </Link>
                  <Link href="/user/profile" onClick={() => setIsOpen(false)}>
                    <div className="flex ml-2">
                      <UserCircle className="mr-2 h-4 w-4" />
                      <span className="text-sm">Profile</span>
                    </div>
                  </Link>
                  <Link href="/settings" onClick={() => setIsOpen(false)}>
                    <div className="flex ml-2">
                      <Settings className="mr-2 h-4 w-4" />
                      <span className="text-sm">Settings</span>
                    </div>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {}}
                  >
                    Sign out
                  </Button>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                      className: "w-full",
                    })}
                    onClick={() => setIsOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/register"
                    className={buttonVariants({
                      size: "sm",
                      className: "w-full",
                    })}
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
