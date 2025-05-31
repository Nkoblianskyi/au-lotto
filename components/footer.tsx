"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <div className="bg-white/10 rounded-lg p-2 mr-2">
                <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={80} height={40} className="h-6 w-auto" />
              </div>
            </h3>
            <p className="text-white/90 text-sm">
              Australia's premier lottery experience since 1994. Play responsibly and dream big with us!
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-white/80 hover:text-white transition-colors" onClick={scrollToTop}>
                  All Games
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-white/80 hover:text-white transition-colors" onClick={scrollToTop}>
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Lottery Games</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/games" className="text-white/80 hover:text-white transition-colors" onClick={scrollToTop}>
                  OZ Lotto
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-white/80 hover:text-white transition-colors" onClick={scrollToTop}>
                  Powerball
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-white/80 hover:text-white transition-colors" onClick={scrollToTop}>
                  Saturday Lotto
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-white/80 hover:text-white transition-colors" onClick={scrollToTop}>
                  Set for Life
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-bold mb-2">🎰 Responsible Gaming</h5>
              <p className="text-white/90 text-xs">
                Please play responsibly. If you need help, contact Gambling Help Online or call 1800 858 858.
              </p>
            </div>
          </div>
        </div>

        {/* 18+ Badge and Responsible Gambling Organizations */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* 18+ Badge */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
              18+
            </div>

            {/* Gambler's Help */}
            <Link
              href="https://gamblershelp.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gambler's Help"
              className="hover:opacity-80 transition-opacity group"
            >
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <div className="w-24 h-12 bg-green-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Gambler's Help</span>
                </div>
              </div>
            </Link>

            {/* Help Youth */}
            <Link
              href="https://www.helpyouth.org.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Help Youth"
              className="hover:opacity-80 transition-opacity group"
            >
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <div className="w-24 h-12 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Help Youth</span>
                </div>
              </div>
            </Link>

            {/* Reset App */}
            <Link
              href="https://resetapp.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reset App"
              className="hover:opacity-80 transition-opacity group"
            >
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <div className="w-24 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Reset!</span>
                </div>
              </div>
            </Link>

            {/* BeGambleAware */}
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Be Gamble Aware"
              className="hover:opacity-80 transition-opacity group"
            >
              <div className="bg-white rounded-lg p-2 shadow-lg">
                <div className="w-24 h-12 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">BeGambleAware</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>
            &copy; 2025 OZ Big Chance Australia. All rights reserved. Licensed and regulated by Australian gaming
            authorities.
          </p>
        </div>
      </div>
    </footer>
  )
}
