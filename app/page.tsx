"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock, Star, Zap, Target, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export default function LotteriesPage() {
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const ozLottoFacts = [
    {
      category: "Records",
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      color: "from-yellow-500 to-orange-600",
      facts: [
        {
          title: "Biggest Jackpot in History",
          value: "$111 Million",
          description: "Record-breaking win in November 2012, shared by 4 lucky winners",
        },
        {
          title: "Longest Rollover Streak",
          value: "18 Weeks",
          description: "In 2012, the jackpot rolled over for 18 consecutive weeks",
        },
        {
          title: "Largest Individual Win",
          value: "$70 Million",
          description: "Single ticket from Melbourne in 2016",
        },
      ],
    },
    {
      category: "Amazing Statistics",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      color: "from-blue-500 to-cyan-600",
      facts: [
        {
          title: "Total Number of Winners",
          value: "2.8+ Million",
          description: "People have won prizes in OZ Lotto since 1994",
        },
        {
          title: "Average Jackpot",
          value: "$8.5 Million",
          description: "Average Division 1 prize throughout history",
        },
        {
          title: "Most Popular Numbers",
          value: "7, 27, 40",
          description: "Most frequently drawn numbers in OZ Lotto history",
        },
      ],
    },
    {
      category: "Unique Facts",
      icon: <Star className="w-8 h-8 text-purple-600" />,
      color: "from-purple-500 to-pink-600",
      facts: [
        {
          title: "First National Lottery",
          value: "1994",
          description: "OZ Lotto became Australia's first national lottery game",
        },
        {
          title: "Fastest Win",
          value: "1 Week",
          description: "Some players won the jackpot in their very first week of playing",
        },
        {
          title: "Oldest Winner",
          value: "96 Years Old",
          description: "Oldest jackpot winner from Queensland",
        },
      ],
    },
    {
      category: "Geography of Wins",
      icon: <Target className="w-8 h-8 text-green-600" />,
      color: "from-green-500 to-emerald-600",
      facts: [
        {
          title: "Luckiest State",
          value: "New South Wales",
          description: "Most Division 1 winners throughout history",
        },
        {
          title: "Luckiest City",
          value: "Melbourne",
          description: "Most big wins among Australian cities",
        },
        {
          title: "Rural Winners",
          value: "23%",
          description: "Percentage of major wins in rural areas",
        },
      ],
    },
    {
      category: "Technical Details",
      icon: <Zap className="w-8 h-8 text-indigo-600" />,
      color: "from-indigo-500 to-purple-600",
      facts: [
        {
          title: "Possible Combinations",
          value: "45,379,620",
          description: "Total possible combinations for the jackpot",
        },
        {
          title: "Ticket Purchase Deadline",
          value: "7:30pm AEST",
          description: "Ticket sales close one hour before the draw",
        },
        {
          title: "Draw Duration",
          value: "15 Minutes",
          description: "Average duration of the live draw broadcast",
        },
      ],
    },
    {
      category: "Social Impact",
      icon: <Users className="w-8 h-8 text-red-600" />,
      color: "from-red-500 to-pink-600",
      facts: [
        {
          title: "Charitable Contributions",
          value: "$2.1 Billion",
          description: "Amount directed to supporting Australian communities",
        },
        {
          title: "Jobs Created",
          value: "12,000+",
          description: "Number of jobs created by the lottery industry",
        },
        {
          title: "Hospitals & Schools",
          value: "850+",
          description: "Number of institutions that received funding",
        },
      ],
    },
  ]

  const amazingStories = [
    {
      title: "Birthday Gift Ticket",
      story:
        "A woman from Adelaide received an OZ Lotto ticket for her 50th birthday from her husband. A week later, she won $30 million!",
      amount: "$30M",
      year: "2019",
      icon: "🎂",
    },
    {
      title: "Forgotten Ticket in Pocket",
      story:
        "A man from Perth found an OZ Lotto ticket in his old jacket pocket after 3 months. It turned out he had won $15 million!",
      amount: "$15M",
      year: "2020",
      icon: "👔",
    },
    {
      title: "Family Syndicate 20 Years",
      story:
        "A group of 20 colleagues played the same numbers for 20 years straight. Their persistence paid off with an $80 million win!",
      amount: "$80M",
      year: "2018",
      icon: "👥",
    },
    {
      title: "Last $5 in Account",
      story:
        "A student spent his last $5 on an OZ Lotto ticket before exams. He won $25 million and could finish university debt-free!",
      amount: "$25M",
      year: "2021",
      icon: "🎓",
    },
  ]

  const weeklyStats = [
    { day: "Monday", sales: "Preparing for draw", activity: "Low" },
    { day: "Tuesday", sales: "Peak sales", activity: "Maximum" },
    { day: "Wednesday", sales: "Checking results", activity: "High" },
    { day: "Thursday", sales: "Planning next game", activity: "Medium" },
    { day: "Friday", sales: "Discussing strategies", activity: "Medium" },
    { day: "Saturday", sales: "Choosing numbers", activity: "High" },
    { day: "Sunday", sales: "Dreaming of winning", activity: "Medium" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-6 py-2 mb-6">
                🇦🇺 Most Fascinating OZ Lotto Facts
              </Badge>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                AMAZING FACTS
                <span className="block text-4xl md:text-6xl mt-4 text-yellow-400">ABOUT OZ LOTTO</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
                Discover the most captivating stories, records, and fascinating facts about Australia's most popular
                lottery. 30 years of history, millions of winners, billions in prizes!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                onClick={() => {
                  scrollToTop()
                  router.push("/register")
                }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-10 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🎯 Play OZ Lotto
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  scrollToTop()
                  router.push("/about")
                }}
                className="border-3 border-white/50 text-green-600 hover:bg-white hover:text-purple-900 font-bold px-10 py-6 text-xl rounded-2xl backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Years of History", value: "30+", icon: "📅" },
                { label: "Winners Created", value: "2.8M+", icon: "🏆" },
                { label: "Record Jackpot", value: "$111M", icon: "💰" },
                { label: "Total Draws", value: "1,560+", icon: "🎲" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Facts Sections */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">INCREDIBLE FACTS</h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Discover the most interesting details about OZ Lotto that will amaze you
              </p>
            </div>

            <div className="space-y-16">
              {ozLottoFacts.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="text-center mb-12">
                    <div
                      className={`inline-flex items-center gap-3 bg-gradient-to-r ${category.color} text-white rounded-full px-6 py-3 mb-4`}
                    >
                      {category.icon}
                      <h3 className="text-2xl font-bold">{category.category}</h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {category.facts.map((fact, factIndex) => (
                      <Card
                        key={factIndex}
                        className="hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100"
                      >
                        <CardContent className="p-8 text-center">
                          <div className="text-4xl font-black text-gray-900 mb-4">{fact.value}</div>
                          <h4 className="text-xl font-bold text-gray-800 mb-4">{fact.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{fact.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amazing Stories */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                AMAZING WINNER
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  STORIES
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-white/90">Real stories that prove miracles do happen</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {amazingStories.map((story, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl">{story.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{story.title}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-black text-green-400">{story.amount}</span>
                          <span className="text-white/70">• {story.year}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">{story.story}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Activity Pattern */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                WEEKLY RHYTHM OF
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  OZ LOTTO
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-xl text-gray-600">How player activity changes throughout the week</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {weeklyStats.map((day, index) => (
                <Card
                  key={index}
                  className={`text-center hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                    day.day === "Tuesday" ? "ring-2 ring-blue-500 bg-blue-50" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <h3 className={`font-bold mb-3 ${day.day === "Tuesday" ? "text-blue-900" : "text-gray-900"}`}>
                      {day.day}
                    </h3>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">{day.sales}</div>
                      <div
                        className={`text-xs px-2 py-1 rounded-full ${
                          day.activity === "Maximum"
                            ? "bg-red-100 text-red-800"
                            : day.activity === "High"
                              ? "bg-orange-100 text-orange-800"
                              : day.activity === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {day.activity}
                      </div>
                    </div>
                    {day.day === "Tuesday" && (
                      <div className="mt-3">
                        <Clock className="w-6 h-6 mx-auto text-blue-600" />
                        <div className="text-xs text-blue-600 font-semibold mt-1">DRAW DAY</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">DID YOU KNOW THAT...</h2>
              <div className="w-32 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎱",
                  fact: "Number 7 appears most frequently",
                  detail: "Over 30 years, number 7 has appeared in winning combinations 284 times",
                },
                {
                  icon: "🕰️",
                  fact: "Fastest ticket sales record",
                  detail: "Record - 2.3 million tickets sold in the last hour before draw",
                },
                {
                  icon: "🌟",
                  fact: "Luckiest day of the month",
                  detail: "The 13th has brought luck more often than other dates",
                },
                {
                  icon: "💍",
                  fact: "Wedding dates are popular",
                  detail: "35% of players use wedding dates in their number combinations",
                },
                {
                  icon: "🎂",
                  fact: "Birthdays are favorites",
                  detail: "Numbers 1-31 are chosen 3 times more often than others",
                },
                {
                  icon: "🏆",
                  fact: "Longest waiting record",
                  detail: "Longest wait for a win - 25 years of regular playing",
                },
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.fact}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/images/oz-lotto-logo.png"
                alt="OZ Lotto"
                width={300}
                height={150}
                className="h-20 w-auto mx-auto mb-6 opacity-90"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">READY TO BECOME PART OF HISTORY?</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Join millions of Australians who play OZ Lotto every Tuesday
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  scrollToTop()
                  router.push("/register")
                }}
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300"
              >
                🎯 Play Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  scrollToTop()
                  router.push("/login")
                }}
                className="border-3 border-white text-green-600 hover:bg-white hover:text-red-600 font-bold px-12 py-6 text-xl rounded-2xl"
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
