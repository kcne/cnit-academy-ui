"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  isActive?: boolean
}

interface ResponsiveNavProps {
  logo?: React.ReactNode
  items?: NavItem[]
  rightElements?: React.ReactNode
  className?: string
}

export default function ResponsiveNav({
  logo = "CentarNit Academy",
  items = [
    { title: "Home", href: "/", isActive: true },
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  rightElements,
  className,
}: ResponsiveNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={cn("border-b bg-background", className)}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              {logo}
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    item.isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side elements (shown on desktop) */}
          {rightElements && <div className="hidden md:block">{rightElements}</div>}

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "block rounded-md px-3 py-2 text-base font-medium",
                item.isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-muted hover:text-foreground",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          {/* Right elements in mobile menu */}
          {rightElements && <div className="mt-4 border-t pt-4">{rightElements}</div>}
        </div>
      </div>
    </nav>
  )
}

