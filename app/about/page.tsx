"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Heart, Check, Star, Clock, Users, Target, Zap, Trophy } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"

export default function AboutPage() {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* COMPLETELY NEW Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden py-24">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-400/10 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-8 py-4 text-lg font-bold mb-8">
              🏆 Australia's Most Trusted Lottery Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                TRANSFORMING DREAMS
              </span>
              <br />
              <span className="text-white">INTO REALITY</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                SINCE 1994
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              For three decades, we've been Australia's gateway to life-changing moments. Every ticket tells a story,
              every draw creates possibilities, and every winner proves that extraordinary things happen to ordinary
              people.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  scrollToTop()
                  router.push("/register")
                }}
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black font-black px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110"
              >
                🎫 JOIN THE WINNERS
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  scrollToTop()
                  router.push("/lotteries")
                }}
                className="border-3 border-white/70 text-green-600 hover:bg-white hover:text-purple-900 font-bold px-12 py-6 text-xl rounded-2xl backdrop-blur-sm"
              >
                🎮 EXPLORE GAMES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETELY NEW Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                THE STORY BEHIND
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  THE MAGIC
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="relative w-96 h-96 mx-auto">
                  <AnimatedLogo />
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">Where Innovation Meets Tradition</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Born from a vision to democratize dreams, The Lott has evolved from Australia's first lottery
                    operator into a cutting-edge digital platform that serves millions. We've witnessed the
                    transformation of countless lives, from humble beginnings to extraordinary success stories.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our journey began with a simple belief: everyone deserves a chance at their dreams. Today, we
                    combine three decades of expertise with revolutionary technology to create the most secure,
                    exciting, and rewarding lottery experience in Australia.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Target className="w-8 h-8 text-blue-600" />,
                      title: "Precision Technology",
                      desc: "Advanced algorithms ensure fair play",
                    },
                    {
                      icon: <Shield className="w-8 h-8 text-green-600" />,
                      title: "Bank-Level Security",
                      desc: "Your data is completely protected",
                    },
                    {
                      icon: <Zap className="w-8 h-8 text-yellow-600" />,
                      title: "Instant Results",
                      desc: "Real-time notifications and payouts",
                    },
                    {
                      icon: <Heart className="w-8 h-8 text-red-600" />,
                      title: "Community Impact",
                      desc: "Supporting Australian communities",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {feature.icon}
                        <h4 className="font-bold text-gray-900">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETELY NEW Impact Metrics */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                OUR INCREDIBLE
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  IMPACT
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-white/90">
                Numbers that tell the story of dreams fulfilled and lives transformed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  value: "$3.2B+",
                  label: "Total Prize Money Distributed",
                  icon: <Trophy className="w-12 h-12 text-yellow-400" />,
                  color: "from-yellow-500 to-orange-600",
                  description: "Life-changing amounts paid to winners",
                },
                {
                  value: "1.8M+",
                  label: "Active Players Nationwide",
                  icon: <Users className="w-12 h-12 text-blue-400" />,
                  color: "from-blue-500 to-cyan-600",
                  description: "Australians trust us with their dreams",
                },
                {
                  value: "99.97%",
                  label: "System Uptime Guarantee",
                  icon: <Clock className="w-12 h-12 text-green-400" />,
                  color: "from-green-500 to-emerald-600",
                  description: "Reliable service you can count on",
                },
                {
                  value: "247",
                  label: "New Millionaires This Year",
                  icon: <Star className="w-12 h-12 text-purple-400" />,
                  color: "from-purple-500 to-pink-600",
                  description: "Dreams turned into reality",
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-white font-semibold mb-3">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETELY NEW Our Commitment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                OUR UNBREAKABLE
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  COMMITMENT
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600">
                Every promise we make is backed by action, every service by excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Shield className="w-20 h-20" />,
                  title: "ABSOLUTE SECURITY",
                  description: "Your trust is our foundation. We protect it with:",
                  features: [
                    "Military-grade 256-bit encryption",
                    "Multi-factor authentication protocols",
                    "24/7 fraud monitoring systems",
                    "Regular third-party security audits",
                  ],
                  color: "from-blue-500 to-cyan-600",
                },
                {
                  icon: <Award className="w-20 h-20" />,
                  title: "TRANSPARENT FAIRNESS",
                  description: "Every draw is completely random and verifiable:",
                  features: [
                    "Certified random number generation",
                    "Live-streamed draw processes",
                    "Independent auditing by global firms",
                    "Public verification of all results",
                  ],
                  color: "from-green-500 to-emerald-600",
                },
                {
                  icon: <Heart className="w-20 h-20" />,
                  title: "COMMUNITY IMPACT",
                  description: "Every ticket purchased supports Australia:",
                  features: [
                    "Local hospital and healthcare funding",
                    "Environmental conservation projects",
                    "Youth education and sports programs",
                    "Community infrastructure development",
                  ],
                  color: "from-red-500 to-pink-600",
                },
              ].map((commitment, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100"
                >
                  <CardContent className="p-10">
                    <div
                      className={`w-32 h-32 bg-gradient-to-br ${commitment.color} rounded-full flex items-center justify-center mx-auto mb-8 text-white`}
                    >
                      {commitment.icon}
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-6">{commitment.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">{commitment.description}</p>

                    <div className="space-y-4">
                      {commitment.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-left">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETELY NEW Success Stories */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                EXTRAORDINARY PEOPLE,
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  EXTRAORDINARY STORIES
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600">
                Real Australians whose lives were forever changed by a single moment of possibility
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  quote:
                    "I was a single mother working three jobs just to make ends meet. When I won $34.7 million, the first thing I did was cry - then I called my kids. Now they're all in university, we have a beautiful home, and I've started a foundation to help other single parents achieve their dreams.",
                  name: "Rebecca S.",
                  win: "$34.7 Million – Bendigo, VIC",
                  image: "👩‍💼",
                  impact: "Founded 'Single Parents Success Foundation'",
                },
                {
                  quote:
                    "My husband and I had been playing the same numbers for 22 years - our wedding date and our children's birthdays. When they finally came up, we couldn't speak for an hour! We've traveled to 30 countries, helped our grandchildren buy homes, and donated to the children's hospital that saved our son's life.",
                  name: "Margaret & Frank T.",
                  win: "$51.2 Million – Ballarat, VIC",
                  image: "👵👴",
                  impact: "Donated $5M to Royal Children's Hospital",
                },
                {
                  quote:
                    "As a farmer struggling through drought, I bought a ticket on a whim during a trip to town. That $47.8 million win didn't just save our farm - it allowed us to help 50 other farming families stay on their land. Sometimes miracles do happen.",
                  name: "Thomas M.",
                  win: "$47.8 Million – Geelong, VIC",
                  image: "👨‍🌾",
                  impact: "Saved 50+ family farms from closure",
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
                      <div className="text-2xl font-black text-purple-600 mt-2">{story.win}</div>
                      <div className="text-sm text-green-600 font-semibold mt-2">{story.impact}</div>
                    </div>

                    <blockquote className="text-gray-700 italic leading-relaxed text-center">
                      "{story.quote}"
                    </blockquote>

                    <div className="flex justify-center mt-6">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-600 font-medium">Verified Winner</span>
                      </div>
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
