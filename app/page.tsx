"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { CountdownTimer } from "@/components/countdown-timer"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Shield, Zap, CheckCircle, Award, Star, Users, DollarSign } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Clean & Responsive */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-6">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                  Official Australian Lottery
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                  Win Big with
                  <span className="block text-yellow-300">OZ Lotto</span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-lg mx-auto lg:mx-0">
                  Australia's trusted lottery since 1994. Managed by{" "}
                  <strong className="text-green-400">The Lott</strong> with millions in prizes every week.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    onClick={() => {
                      scrollToTop()
                      router.push("/register")
                    }}
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    🎯 Play Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      scrollToTop()
                      router.push("/about")
                    }}
                    className="border-2 border-white text-black hover:bg-white hover:text-blue-900 font-bold px-6 py-3 rounded-lg"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Right Content - Countdown */}
              <div className="flex flex-col items-center lg:items-end space-y-6">
                <div className="w-full max-w-md">
                  <CountdownTimer />
                </div>

                {/* Logo after timer */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Image
                    src="/images/oz-lotto-logo.png"
                    alt="OZ Lotto"
                    width={200}
                    height={100}
                    className="h-20 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "$47M", label: "Current Jackpot", icon: "💰" },
                { value: "2.8M+", label: "Winners This Year", icon: "🏆" },
                { value: "30+", label: "Years Trusted", icon: "⭐" },
                { value: "7", label: "Ways to Win", icon: "🎯" },
              ].map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 md:p-6">
                    <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
                    <div className="text-xl md:text-2xl font-bold text-blue-900 mb-1">{stat.value}</div>
                    <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                  <Image
                    src="/images/oz-lotto-logo.png"
                    alt="OZ Lotto"
                    width={160}
                    height={80}
                    className="h-14 w-auto"
                  />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What is OZ Lotto?</h2>
              <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Australia's premier national lottery operated by <strong className="text-green-600">The Lott</strong>.
                Every Tuesday night, we draw 7 winning numbers creating multiple ways to win.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <Trophy className="w-8 h-8 text-yellow-600" />,
                  title: "7 Prize Divisions",
                  description: "Multiple ways to win with every draw",
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-green-600" />,
                  title: "$2M Minimum",
                  description: "Guaranteed minimum Division 1 prize",
                },
                {
                  icon: <Star className="w-8 h-8 text-purple-600" />,
                  title: "Weekly Draws",
                  description: "Every Tuesday at 8:30pm AEST",
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-900" />,
                  title: "100% Secure",
                  description: "Licensed and regulated",
                },
                {
                  icon: <Users className="w-8 h-8 text-red-600" />,
                  title: "Millions of Players",
                  description: "Trusted by Australians nationwide",
                },
                {
                  icon: <Award className="w-8 h-8 text-indigo-600" />,
                  title: "30+ Years",
                  description: "Established lottery experience",
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4">{feature.icon}</div>
                    <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
                  <Image
                    src="/images/oz-lotto-logo.png"
                    alt="OZ Lotto"
                    width={160}
                    height={80}
                    className="h-14 w-auto"
                  />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How to Play</h2>
              <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600">Three simple steps to start your winning journey</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Numbers",
                  description: "Pick 7 numbers from 1-47 or use QuickPick",
                  icon: <Zap className="w-8 h-8" />,
                },
                {
                  step: "2",
                  title: "Buy Ticket",
                  description: "Purchase online or at authorized retailers",
                  icon: <Shield className="w-8 h-8" />,
                },
                {
                  step: "3",
                  title: "Check Results",
                  description: "Draws every Tuesday 8:30pm AEST",
                  icon: <Trophy className="w-8 h-8" />,
                },
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-blue-900">{item.icon}</div>
                    </div>
                    <div className="text-4xl font-bold text-blue-900 mb-4">{item.step}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                  <Image
                    src="/images/oz-lotto-logo.png"
                    alt="OZ Lotto"
                    width={160}
                    height={80}
                    className="h-14 w-auto"
                  />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Winner Stories</h2>
              <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600">Real stories from our community of winners</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  name: "Sarah M.",
                  location: "Melbourne, VIC",
                  amount: "$18.7 Million",
                  story:
                    "Playing family birthdays for 12 years finally paid off. Now I can help my children with their first homes and support the local animal shelter.",
                },
                {
                  name: "David & Margaret S.",
                  location: "Bendigo, VIC",
                  amount: "$31.2 Million",
                  story:
                    "After 40 years of marriage and hard work, we never imagined retirement could be like this. We've traveled the world and started a scholarship fund.",
                },
                {
                  name: "James M.",
                  location: "Geelong, VIC",
                  amount: "$9.4 Million",
                  story:
                    "As a single dad working two jobs, this win means my daughter can pursue her medical degree without debt. Her future is now secure.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="font-bold text-blue-900">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                    </div>

                    <div className="text-xl md:text-2xl font-bold text-green-600 mb-4">{testimonial.amount}</div>

                    <blockquote className="text-gray-700 italic">"{testimonial.story}"</blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prize Structure */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl p-4 border border-yellow-200">
                  <Image
                    src="/images/oz-lotto-logo.png"
                    alt="OZ Lotto"
                    width={160}
                    height={80}
                    className="h-14 w-auto"
                  />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Prize Structure</h2>
              <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600">Seven ways to win every draw</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { division: "Division 1", prize: "$2M+", match: "7 numbers", highlight: true },
                { division: "Division 2", prize: "$50K+", match: "6 + 1 supp" },
                { division: "Division 3", prize: "$5K+", match: "6 numbers" },
                { division: "Division 4", prize: "$500+", match: "5 + 1 supp" },
                { division: "Division 5", prize: "$100+", match: "5 numbers" },
                { division: "Division 6", prize: "$50+", match: "4 numbers" },
                { division: "Division 7", prize: "$25+", match: "3 + 1 supp" },
              ].map((prize, index) => (
                <Card
                  key={index}
                  className={`text-center hover:shadow-lg transition-all duration-300 ${
                    prize.highlight ? "ring-2 ring-blue-500 bg-blue-50" : ""
                  }`}
                >
                  <CardContent className="p-4 md:p-6">
                    <Trophy className={`w-8 h-8 mx-auto mb-4 ${prize.highlight ? "text-blue-900" : "text-gray-400"}`} />
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{prize.division}</h3>
                    <div
                      className={`text-lg md:text-xl font-bold mb-2 ${prize.highlight ? "text-blue-900" : "text-gray-700"}`}
                    >
                      {prize.prize}
                    </div>
                    <p className="text-xs md:text-sm text-gray-600">{prize.match}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Ready to Play?</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join millions of Australians and start your winning journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  scrollToTop()
                  router.push("/register")
                }}
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🎯 Start Playing
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  scrollToTop()
                  router.push("/login")
                }}
                className="border-2 border-white text-black hover:bg-white hover:text-blue-900 font-bold px-8 py-4 text-lg rounded-lg"
              >
                Member Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
