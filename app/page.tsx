"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { CountdownTimer } from "@/components/countdown-timer"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Shield, Zap, CheckCircle, Star, Target } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* COMPLETELY NEW Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* NEW Left Content */}
              <div className="text-center lg:text-left space-y-8">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-3 text-lg font-bold mb-6">
                  🏆 Australia's #1 Lottery Platform
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                    TRANSFORM
                  </span>
                  <br />
                  <span className="text-white">YOUR DREAMS</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    INTO REALITY
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Experience the thrill of Australia's most exciting lottery games. With{" "}
                  <strong className="text-yellow-300">The Lott</strong>, every ticket is a chance to rewrite your story
                  and create the life you've always imagined.
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
                    🚀 START WINNING TODAY
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      scrollToTop()
                      router.push("/lotteries")
                    }}
                    className="border-3 border-white/70 text-green-900 hover:bg-white hover:text-teal-900 font-bold px-10 py-6 text-xl rounded-2xl backdrop-blur-sm"
                  >
                    🎮 EXPLORE GAMES
                  </Button>
                </div>
              </div>

              {/* NEW Right Content */}
              <div className="flex flex-col items-center space-y-8">
                <div className="w-full max-w-md">
                  <CountdownTimer />
                </div>

                {/* NEW Prize Showcase */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 w-full max-w-md">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-yellow-300">THIS WEEK'S PRIZES</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 rounded-xl p-4">
                        <div className="text-3xl font-black text-green-300">$47M</div>
                        <div className="text-sm text-white/80">OZ Lotto</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-4">
                        <div className="text-3xl font-black text-red-300">$30M</div>
                        <div className="text-sm text-white/80">Powerball</div>
                      </div>
                    </div>
                    <Image
                      src="/images/oz-lotto-logo.png"
                      alt="The Lott"
                      width={200}
                      height={100}
                      className="h-16 w-auto mx-auto opacity-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETELY NEW Success Metrics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                INCREDIBLE SUCCESS STORIES
              </h2>
              <p className="text-xl text-gray-300">Real numbers, real winners, real life changes</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "$2.8B+", label: "Total Winnings Paid", icon: "💰", color: "from-green-400 to-emerald-600" },
                { value: "847,293", label: "Lives Changed", icon: "🌟", color: "from-yellow-400 to-orange-600" },
                { value: "156", label: "New Millionaires This Year", icon: "👑", color: "from-purple-400 to-pink-600" },
                { value: "30+", label: "Years of Trust", icon: "🏆", color: "from-blue-400 to-cyan-600" },
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

      {/* COMPLETELY NEW Game Spotlight Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                DISCOVER YOUR
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  WINNING GAME
                </span>
              </h2>
              <div className="w-40 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
                From massive jackpots to instant wins, find the perfect game that matches your dreams and budget
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "OZ Lotto",
                  tagline: "The Jackpot King",
                  prize: "$47 Million",
                  description: "Australia's biggest lottery jackpots with life-changing prizes every Tuesday",
                  features: ["7 Prize Divisions", "Biggest Jackpots", "Tuesday Draws"],
                  color: "from-blue-600 to-blue-800",
                  icon: <Trophy className="w-12 h-12 text-yellow-400" />,
                  highlight: true,
                },
                {
                  name: "Powerball",
                  tagline: "The Millionaire Maker",
                  prize: "$30 Million",
                  description: "Creates more millionaires than any other Australian lottery game",
                  features: ["9 Prize Divisions", "Most Winners", "Thursday Draws"],
                  color: "from-red-600 to-red-800",
                  icon: <Zap className="w-12 h-12 text-yellow-400" />,
                  highlight: false,
                },
                {
                  name: "Saturday Lotto",
                  tagline: "The Classic Choice",
                  prize: "$8 Million",
                  description: "Australia's original lottery with the best odds for substantial wins",
                  features: ["6 Prize Divisions", "Great Odds", "Saturday Draws"],
                  color: "from-green-600 to-green-800",
                  icon: <Star className="w-12 h-12 text-yellow-400" />,
                  highlight: false,
                },
              ].map((game, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 ${game.highlight ? "ring-4 ring-yellow-400 ring-opacity-50" : ""
                    }`}
                >
                  <div className={`bg-gradient-to-br ${game.color} p-8 text-white relative`}>
                    {game.highlight && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="flex items-center gap-4 mb-6">
                      {game.icon}
                      <div>
                        <h3 className="text-2xl font-black">{game.name}</h3>
                        <p className="text-white/90 font-semibold">{game.tagline}</p>
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-4xl font-black text-yellow-300 mb-2">{game.prize}</div>
                      <div className="text-white/80">Current Jackpot</div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">{game.description}</p>

                    <div className="space-y-3 mb-8">
                      {game.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white font-bold py-4 rounded-xl"
                      onClick={() => {
                        scrollToTop()
                        router.push("/register")
                      }}
                    >
                      Play {game.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                size="lg"
                onClick={() => {
                  scrollToTop()
                  router.push("/lotteries")
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-xl"
              >
                🎮 VIEW ALL LOTTERY GAMES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETELY NEW How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                YOUR PATH TO
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  WINNING BIG
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-white/90">Simple steps to start your winning journey today</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Choose Your Numbers",
                  description: "Select your lucky numbers or use our QuickPick for random selection",
                  icon: <Target className="w-16 h-16" />,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  step: "02",
                  title: "Secure Your Ticket",
                  description: "Purchase your ticket online with bank-level security and instant confirmation",
                  icon: <Shield className="w-16 h-16" />,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  step: "03",
                  title: "Win & Celebrate",
                  description: "Get instant notifications and automatic prize payments directly to your account",
                  icon: <Trophy className="w-16 h-16" />,
                  color: "from-yellow-500 to-orange-500",
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
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETELY NEW Winner Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                REAL WINNERS,
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  REAL STORIES
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600">Meet the Australians whose lives were transformed by The Lott</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Emma & David K.",
                  location: "Ballarat, VIC",
                  amount: "$42.8 Million",
                  story:
                    "We've been playing the same numbers for 15 years - our children's birthdays and our anniversary. When they finally came up, we couldn't believe it! We've bought our dream home, secured our kids' education, and started a charity for local families in need.",
                  image: "👩‍🦰👨‍🦲",
                },
                {
                  name: "Marcus T.",
                  location: "Geelong, VIC",
                  amount: "$28.3 Million",
                  story:
                    "As a single father working two jobs, I never imagined this could happen. Now my daughter can pursue her dream of becoming a doctor without worrying about student loans. I've also opened a community center in our neighborhood.",
                  image: "👨‍💼",
                },
                {
                  name: "Patricia M.",
                  location: "Melbourne, VIC",
                  amount: "$19.7 Million",
                  story:
                    "After 35 years as a nurse, I was looking forward to a modest retirement. This win changed everything! I've traveled to 20 countries, helped my grandchildren buy their first homes, and donated to the hospital where I worked.",
                  image: "👩‍⚕️",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100"
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{testimonial.image}</div>
                      <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.location}</p>
                      <div className="text-3xl font-black text-green-600 mt-2">{testimonial.amount}</div>
                    </div>

                    <blockquote className="text-gray-700 italic leading-relaxed">"{testimonial.story}"</blockquote>

                    <div className="flex justify-center mt-6">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETELY NEW CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              YOUR WINNING MOMENT
              <span className="block text-yellow-300">STARTS NOW</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
              Join over 1.2 million Australians who trust The Lott with their dreams. Your life-changing moment could be
              just one ticket away.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  scrollToTop()
                  router.push("/register")
                }}
                className="bg-white text-red-600 hover:bg-gray-100 font-black px-16 py-8 text-2xl rounded-2xl shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-110"
              >
                🚀 START PLAYING NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  scrollToTop()
                  router.push("/login")
                }}
                className="border-4 border-white text-black hover:bg-white hover:text-red-600 font-bold px-16 py-8 text-2xl rounded-2xl"
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
