"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg border-b-2 border-blue-200 relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={120} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-blue-900 hover:text-blue-700 transition-colors font-semibold"
              onClick={scrollToTop}
            >
              Home
            </Link>
            <Link
              href="/lotteries"
              className="text-blue-900 hover:text-blue-700 transition-colors font-semibold"
              onClick={scrollToTop}
            >
              Oz Lotto
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

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
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

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-blue-900 hover:text-blue-700 transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                className="text-blue-900 hover:text-blue-700 transition-colors font-semibold py-2"
                onClick={() => {
                  scrollToTop()
                  setIsMenuOpen(false)
                }}
              >
                Home
              </Link>
              <Link
                href="/lotteries"
                className="text-blue-900 hover:text-blue-700 transition-colors font-semibold py-2"
                onClick={() => {
                  scrollToTop()
                  setIsMenuOpen(false)
                }}
              >
                All Lotteries
              </Link>
              <Link
                href="/about"
                className="text-blue-900 hover:text-blue-700 transition-colors font-semibold py-2"
                onClick={() => {
                  scrollToTop()
                  setIsMenuOpen(false)
                }}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-blue-900 hover:text-blue-700 transition-colors font-semibold py-2"
                onClick={() => {
                  scrollToTop()
                  setIsMenuOpen(false)
                }}
              >
                Contact Us
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={() => {
                    scrollToTop()
                    router.push("/login")
                    setIsMenuOpen(false)
                  }}
                  className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    scrollToTop()
                    router.push("/register")
                    setIsMenuOpen(false)
                  }}
                  className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-semibold"
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
