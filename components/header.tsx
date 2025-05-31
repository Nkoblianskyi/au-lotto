"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="bg-white shadow-lg border-b-2 border-blue-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={120} height={60} className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-blue-900 hover:text-blue-700 transition-colors font-semibold"
              onClick={scrollToTop}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-blue-900 hover:text-blue-700 transition-colors font-semibold"
              onClick={scrollToTop}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-blue-900 hover:text-blue-700 transition-colors font-semibold"
              onClick={scrollToTop}
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => {
                scrollToTop()
                router.push("/login")
              }}
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold"
            >
              Login
            </Button>
            <Button
              onClick={() => {
                scrollToTop()
                router.push("/register")
              }}
              className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
