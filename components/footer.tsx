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
                <Image src="/images/oz-lotto-logo.png" alt="OZ Lotto" width={180} height={90} className="h-6 w-auto" />
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
          </div>

          <div>
            <h4 className="font-bold mb-4">🎰 Responsible Gaming</h4>
            <p className="text-white/90 text-sm">
              Please play responsibly. If you need help, contact Gambling Help Online or call 1800 858 858.
            </p>
          </div>
        </div>

        {/* 18+ Badge and Responsible Gambling Organizations */}
        <div className="border-t border-slate-700 mt-12 pt-8"> <div className="flex flex-wrap justify-center items-center gap-8"> {/* 18+ Badge */} <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg"> 18+ </div>
          {/* Gambler's Help */}
          <Link
            href="https://gamblershelp.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gambler's Help"
            className="hover:opacity-80 transition-opacity group"
          >
            <Image src="/gamblershelp.svg" alt="Gambler's Help" width={100} height={100} />
          </Link>

          {/* Victoria Government */}
          <Link
            href="https://www.vic.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Victoria Government"
            className="hover:opacity-80 transition-opacity group bg-white/70 p-2 rounded-lg"
          >
            <Image src="/victoria.svg" alt="Victoria Government" width={100} height={100} />
          </Link>

          {/* Reset App */}
          <Link
            href="https://resetapp.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reset App"
            className="hover:opacity-80 transition-opacity group"
          >
            <Image src="/reset.svg" alt="Victoria Government" width={100} height={100} />
          </Link>

          {/* BeGambleAware */}
          <Link
            href="https://www.gambleaware.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Be Gamble Aware"
            className="hover:opacity-80 transition-opacity group"
          >
            <Image src="/bgambleaware.svg" alt="Victoria Government" width={100} height={100} />
          </Link>
        </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>
            &copy; 2025 Ozbigchance. All rights reserved. Licensed and regulated by Australian gaming
            authorities.
          </p>
        </div>
      </div>
    </footer>
  )
}
