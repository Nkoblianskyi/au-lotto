"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Heart, Check, Star, Clock, Users } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"

export default function AboutPage() {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-black leading-tight animate-fade-in-up">
              DISCOVER OZ LOTTO
              <span className="block text-amber-400 animate-slide-in-right animation-delay-300">
                AUSTRALIA'S PREMIER LOTTERY
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                onClick={() => {
                  scrollToTop()
                  router.push("/login")
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                🎫 BUY TICKET NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  scrollToTop()
                  router.push("/login")
                }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-6 text-xl font-bold rounded-xl hover:scale-105 transition-all duration-300"
              >
                📱 GET APP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">WHO WE ARE</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full animate-expand"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 flex justify-center animate-fade-in-up">
                <div className="relative w-80 h-80">
                  <AnimatedLogo />
                </div>
              </div>

              <div className="lg:w-1/2 animate-fade-in-up animation-delay-300">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Since 1994, OZ Lotto has been Australia's most trusted lottery experience, bringing dreams to life
                  across the nation. As part of The Lott family, we combine three decades of expertise with cutting-edge
                  technology to deliver an unparalleled gaming experience that puts our players first.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Seamless Digital Experience – Play anywhere, anytime</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Maximum Security – Your personal data is fully protected</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Instant Notifications – Never miss a winning moment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  value: "$2.8B+",
                  label: "Total Prize Money Awarded",
                  icon: <Star className="w-10 h-10 text-yellow-500" />,
                },
                {
                  value: "1.2M+",
                  label: "Active Players Nationwide",
                  icon: <Users className="w-10 h-10 text-blue-500" />,
                },
                {
                  value: "30+",
                  label: "Years of Excellence",
                  icon: <Clock className="w-10 h-10 text-green-500" />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-8 text-center shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <div className="flex justify-center mb-4 animate-bounce-slow">{stat.icon}</div>
                  <div className="text-4xl font-bold text-blue-900 mb-2 animate-number-flip">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-4">OUR PROMISE</h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full animate-expand"></div>
              <p className="text-xl mt-6 text-white/90">
                Your trust drives everything we do. Here's our commitment to you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-16 h-16" />,
                  title: "UNCOMPROMISING SECURITY",
                  description: "Your safety is our top priority. We employ:",
                  items: ["256-bit SSL Encryption", "Multi-Factor Authentication", "Regular Security Audits"],
                },
                {
                  icon: <Award className="w-16 h-16" />,
                  title: "TRANSPARENT & FAIR",
                  description: "Every draw is completely random and independently verified.",
                  items: [
                    "Certified Random Number Generation",
                    "Public Draw Verification",
                    "Independent Third-Party Audits",
                  ],
                },
                {
                  icon: <Heart className="w-16 h-16" />,
                  title: "COMMUNITY IMPACT",
                  description: "Every ticket purchased supports Australian communities:",
                  items: ["Local Hospital Funding", "Environmental Conservation", "Youth Education Programs"],
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6 animate-bounce-slow">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-white/90 mb-6">{feature.description}</p>
                    <ul className="space-y-2 text-left">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">REAL WINNERS, REAL STORIES</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full animate-expand"></div>
              <p className="text-xl mt-6 text-gray-700">
                These are the moments that make everything worthwhile – real Australians whose lives changed forever
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "I've been playing the same numbers for eight years – my kids' birthdays and our wedding anniversary. When they finally came up, I couldn't believe it! We've paid off our mortgage, secured our children's university education, and I've started a scholarship program for underprivileged students in our community.",
                  name: "Jennifer K.",
                  win: "$22.4 Million – Ballarat, VIC",
                },
                {
                  quote:
                    "As a retired teacher living on a pension, I never imagined I'd be able to travel the world. Now I've visited 15 countries, helped my grandchildren buy their first homes, and donated to the local library that meant so much to me during my teaching career. OZ Lotto gave me the retirement I never dared dream of.",
                  name: "Robert & Helen M.",
                  win: "$38.6 Million – Bendigo, VIC",
                },
                {
                  quote:
                    "Working three jobs to support my family was exhausting. When I won, the first thing I did was cry – then I called my boss to quit! Now I run a successful small business, my children attend private school, and we've established a foundation to help other single parents in our community.",
                  name: "Michael T.",
                  win: "$15.9 Million – Geelong, VIC",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white border-2 border-blue-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                    <div className="text-center">
                      <p className="font-bold text-blue-900">{testimonial.name}</p>
                      <p className="text-amber-600">{testimonial.win}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
