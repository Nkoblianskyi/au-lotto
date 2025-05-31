"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { CountdownTimer } from "@/components/countdown-timer"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Shield, Zap, CheckCircle, Star, Target, Calendar } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with OZ Lotto Timer */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-3 text-lg font-bold mb-6">
                  🏆 Official OZ Lotto Promotion
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                    WIN BIG WITH
                  </span>
                  <br />
                  <span className="text-white">OZ LOTTO</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    AUSTRALIA'S #1
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Experience Australia's biggest lottery jackpots with OZ Lotto. Managed by{" "}
                  <strong className="text-green-300">The Lott</strong>, every Tuesday brings you closer to your
                  life-changing moment with jackpots starting at $2 million!
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    onClick={() => {
                      scrollToTop()
                      router.push("/register")
                    }}
                    className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black font-black px-10 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110"
                  >
                    🎯 PLAY OZ LOTTO NOW
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      scrollToTop()
                      router.push("/about")
                    }}
                    className="border-3 border-white/70 text-green-600 hover:bg-white hover:text-blue-900 font-bold px-10 py-6 text-xl rounded-2xl backdrop-blur-sm"
                  >
                    📖 HOW TO PLAY
                  </Button>
                </div>
              </div>

              {/* Right Content - OZ Lotto Timer */}
              <div className="flex flex-col items-center space-y-8">
                <div className="w-full max-w-md">
                  <CountdownTimer />
                </div>

                {/* OZ Lotto Current Jackpot */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 w-full max-w-md">
                  <div className="text-center space-y-4">
                    <Image
                      src="/images/oz-lotto-logo.png"
                      alt="OZ Lotto"
                      width={200}
                      height={100}
                      className="h-16 w-auto mx-auto opacity-90"
                    />
                    <h3 className="text-2xl font-bold text-yellow-300">CURRENT JACKPOT</h3>
                    <div className="text-5xl font-black text-green-300">$47M</div>
                    <p className="text-white/80">Next Draw: Tuesday 8:30pm AEST</p>
                    <div className="bg-white/20 rounded-xl p-3">
                      <p className="text-sm text-white/90">Pick 7 numbers from 1-47</p>
                      <p className="text-sm text-white/90">+ 2 supplementary numbers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OZ Lotto Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                OZ LOTTO SUCCESS STORIES
              </h2>
              <p className="text-xl text-gray-300">Real numbers from Australia's biggest lottery</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: "$100M+",
                  label: "Biggest OZ Lotto Jackpot",
                  icon: "💰",
                  color: "from-green-400 to-emerald-600",
                },
                { value: "2.8M+", label: "OZ Lotto Winners", icon: "🌟", color: "from-yellow-400 to-orange-600" },
                { value: "7", label: "Prize Divisions", icon: "🏆", color: "from-purple-400 to-pink-600" },
                { value: "30+", label: "Years of OZ Lotto", icon: "⭐", color: "from-blue-400 to-cyan-600" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-2xl group-hover:shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is OZ Lotto Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                  <Image
                    src="/images/oz-lotto-logo.png"
                    alt="OZ Lotto"
                    width={200}
                    height={100}
                    className="h-20 w-auto"
                  />
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                WHAT IS
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  OZ LOTTO?
                </span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                Australia's premier national lottery operated by <strong className="text-green-600">The Lott</strong>.
                Every Tuesday night at 8:30pm AEST, we draw 7 winning numbers plus 2 supplementary numbers, creating 7
                different ways to win amazing prizes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Trophy className="w-12 h-12 text-yellow-600" />,
                  title: "7 Prize Divisions",
                  description: "Multiple ways to win with every OZ Lotto draw",
                  detail: "From Division 1 jackpot to Division 7 prizes",
                },
                {
                  icon: <Target className="w-12 h-12 text-green-600" />,
                  title: "$2M Minimum Jackpot",
                  description: "Guaranteed minimum Division 1 prize every draw",
                  detail: "Often grows to $20M, $50M or even $100M+",
                },
                {
                  icon: <Calendar className="w-12 h-12 text-purple-600" />,
                  title: "Tuesday Night Draws",
                  description: "Every Tuesday at 8:30pm AEST sharp",
                  detail: "Live draws broadcast across Australia",
                },
                {
                  icon: <Shield className="w-12 h-12 text-blue-600" />,
                  title: "100% Secure & Licensed",
                  description: "Operated by The Lott under strict regulation",
                  detail: "Australian government licensed and monitored",
                },
                {
                  icon: <Star className="w-12 h-12 text-red-600" />,
                  title: "Pick 7 Numbers",
                  description: "Choose 7 numbers from 1 to 47",
                  detail: "Plus 2 supplementary numbers are drawn",
                },
                {
                  icon: <Zap className="w-12 h-12 text-indigo-600" />,
                  title: "Instant Notifications",
                  description: "Know immediately if you've won",
                  detail: "Automatic prize payments to your account",
                },
              ].map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="mx-auto mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <p className="text-sm text-gray-500 italic">{feature.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Play OZ Lotto */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                HOW TO PLAY
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  OZ LOTTO
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-white/90">Three simple steps to your OZ Lotto winning moment</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Pick Your Numbers",
                  description: "Choose 7 numbers from 1 to 47, or use QuickPick for random selection",
                  icon: <Target className="w-16 h-16" />,
                  color: "from-blue-500 to-cyan-500",
                  detail: "You can play the same numbers every week or try new combinations",
                },
                {
                  step: "02",
                  title: "Buy Your Ticket",
                  description: "Purchase online through The Lott or at authorized retailers across Australia",
                  icon: <Shield className="w-16 h-16" />,
                  color: "from-green-500 to-emerald-500",
                  detail: "Tickets close at 7:30pm AEST every Tuesday",
                },
                {
                  step: "03",
                  title: "Check Results",
                  description: "Watch the live draw Tuesday 8:30pm or check results online instantly",
                  icon: <Trophy className="w-16 h-16" />,
                  color: "from-yellow-500 to-orange-500",
                  detail: "Winners are notified automatically and prizes paid directly",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div
                    className={`w-32 h-32 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-6xl font-black text-white/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-4">{item.description}</p>
                  <p className="text-sm text-white/60 italic">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OZ Lotto Prize Structure */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <Image
                    src="/images/oz-lotto-logo.png"
                    alt="OZ Lotto"
                    width={200}
                    height={100}
                    className="h-20 w-auto"
                  />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                OZ LOTTO
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  PRIZE STRUCTURE
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600">Seven divisions, seven ways to win every Tuesday</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { division: "Division 1", prize: "$2M+", match: "7 numbers", odds: "1 in 45,379,620", highlight: true },
                { division: "Division 2", prize: "$50K+", match: "6 + 1 supp", odds: "1 in 3,241,401" },
                { division: "Division 3", prize: "$5K+", match: "6 numbers", odds: "1 in 180,078" },
                { division: "Division 4", prize: "$500+", match: "5 + 1 supp", odds: "1 in 29,602" },
                { division: "Division 5", prize: "$100+", match: "5 numbers", odds: "1 in 3,430" },
                { division: "Division 6", prize: "$50+", match: "4 numbers", odds: "1 in 154" },
                { division: "Division 7", prize: "$25+", match: "3 + 1 supp", odds: "1 in 87" },
              ].map((prize, index) => (
                <Card
                  key={index}
                  className={`text-center hover:shadow-lg transition-all duration-300 hover:scale-105 ${prize.highlight ? "ring-2 ring-blue-500 bg-blue-50" : ""
                    }`}
                >
                  <CardContent className="p-6">
                    <Trophy className={`w-8 h-8 mx-auto mb-4 ${prize.highlight ? "text-blue-900" : "text-gray-400"}`} />
                    <h3 className="font-semibold text-gray-900 mb-2">{prize.division}</h3>
                    <div className={`text-xl font-bold mb-2 ${prize.highlight ? "text-blue-900" : "text-gray-700"}`}>
                      {prize.prize}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{prize.match}</p>
                    <p className="text-xs text-gray-500">{prize.odds}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OZ Lotto Winner Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                REAL OZ LOTTO
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  WINNERS
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600">Meet the Australians whose lives were changed by OZ Lotto</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  quote:
                    "I've been playing the same OZ Lotto numbers for 8 years - my family's birthdays. When they finally came up in Division 1, I won $22.4 million! We've paid off our mortgage, secured our children's education, and I've started a scholarship program for local students.",
                  name: "Jennifer K.",
                  win: "$22.4 Million OZ Lotto Winner",
                  location: "Ballarat, VIC",
                  image: "👩‍💼",
                },
                {
                  quote:
                    "As a retired teacher, I played OZ Lotto every Tuesday for 15 years. My $38.6 million win means I can travel the world, help my grandchildren, and donate to the local library. OZ Lotto gave me the retirement I never dreamed possible.",
                  name: "Robert & Helen M.",
                  win: "$38.6 Million OZ Lotto Winner",
                  location: "Bendigo, VIC",
                  image: "👴👵",
                },
                {
                  quote:
                    "Working three jobs as a single dad was exhausting. My $15.9 million OZ Lotto win changed everything! Now I run my own business, my kids attend great schools, and we've helped other single parents in our community through our foundation.",
                  name: "Michael T.",
                  win: "$15.9 Million OZ Lotto Winner",
                  location: "Geelong, VIC",
                  image: "👨‍💼",
                },
              ].map((story, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-purple-100"
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{story.image}</div>
                      <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                      <div className="text-lg font-bold text-purple-600 mt-1">{story.win}</div>
                      <div className="text-sm text-gray-600">{story.location}</div>
                    </div>

                    <blockquote className="text-gray-700 italic leading-relaxed text-center">
                      "{story.quote}"
                    </blockquote>

                    <div className="flex justify-center mt-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-600 font-medium">Verified OZ Lotto Winner</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/images/oz-lotto-logo.png"
                alt="OZ Lotto"
                width={300}
                height={150}
                className="h-20 w-auto mx-auto mb-6 opacity-90"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              YOUR OZ LOTTO
              <span className="block text-yellow-300">MOMENT AWAITS</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
              Join millions of Australians who play OZ Lotto every Tuesday. With jackpots starting at $2 million and
              growing to $100 million+, your life-changing moment could be just one ticket away.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  scrollToTop()
                  router.push("/register")
                }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-black px-16 py-8 text-2xl rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110"
              >
                🎯 PLAY OZ LOTTO NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  scrollToTop()
                  router.push("/login")
                }}
                className="border-4 border-white text-green-600 hover:bg-white hover:text-blue-900 font-bold px-16 py-8 text-2xl rounded-2xl"
              >
                🔐 MEMBER LOGIN
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
