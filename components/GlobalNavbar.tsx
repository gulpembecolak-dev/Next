"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItem = { label: string; href: string }

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Project", href: "/project" },
  { label: "Login", href: "/login" },
]

export default function GlobalNavbar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (!pathname) return false
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand / Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight text-black">
          StarterKit
        </Link>

        {/* Horizontal links */}
        <div className="flex items-center gap-2 sm:gap-4">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href)
            const isLogin = item.href === "/login"

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-gray-100 font-semibold text-black"
                    : "text-gray-700 hover:bg-gray-50 hover:text-black",
                  isLogin ? "ml-1 border bg-white hover:bg-gray-50" : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
