"use client"

import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock, DollarSign, Star, Zap, Calendar, Gift } from "lucide-react"

export default function GamesPage() {
    const router = useRouter()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const lotteryGames = [
        {
            name: "OZ Lotto",
            description: "Australia's biggest jackpot lottery with 7 prize divisions",
            minJackpot: "$2 Million",
            drawDays: "Tuesday",
            drawTime: "8:30pm AEST",
            numbersRequired: "7 from 1-47",
            supplementary: "2 supplementary",
            ticketPrice: "$1.50",
            maxJackpot: "$100+ Million",
            icon: <Trophy className="w-8 h-8 text-yellow-600" />,
            color: "from-blue-600 to-blue-800",
            featured: true,
        },
        {
            name: "Powerball",
            description: "The game that creates the most millionaires in Australia",
            minJackpot: "$3 Million",
            drawDays: "Thursday",
            drawTime: "8:30pm AEST",
            numbersRequired: "7 from 1-35",
            supplementary: "1 Powerball from 1-20",
            ticketPrice: "$1.33",
            maxJackpot: "$200+ Million",
            icon: <Zap className="w-8 h-8 text-red-600" />,
            color: "from-red-600 to-red-800",
            featured: true,
        },
        {
            name: "Saturday Lotto",
            description: "Australia's original and most popular lottery game",
            minJackpot: "$5 Million",
            drawDays: "Saturday",
            drawTime: "8:30pm AEST",
            numbersRequired: "6 from 1-45",
            supplementary: "2 supplementary",
            ticketPrice: "$1.20",
            maxJackpot: "$50+ Million",
            icon: <Star className="w-8 h-8 text-green-600" />,
            color: "from-green-600 to-green-800",
            featured: false,
        },
        {
            name: "Monday & Wednesday Lotto",
            description: "More chances to win with twice-weekly draws",
            minJackpot: "$1 Million",
            drawDays: "Monday & Wednesday",
            drawTime: "8:30pm AEST",
            numbersRequired: "6 from 1-45",
            supplementary: "2 supplementary",
            ticketPrice: "$1.20",
            maxJackpot: "$20+ Million",
            icon: <Calendar className="w-8 h-8 text-purple-600" />,
            color: "from-purple-600 to-purple-800",
            featured: false,
        },
        {
            name: "Set for Life",
            description: "Win $20,000 every month for 20 years",
            minJackpot: "$20,000/month",
            drawDays: "Daily",
            drawTime: "8:30pm AEST",
            numbersRequired: "7 from 1-37",
            supplementary: "1 from 1-10",
            ticketPrice: "$5.00",
            maxJackpot: "$4.8 Million total",
            icon: <Gift className="w-8 h-8 text-orange-600" />,
            color: "from-orange-600 to-orange-800",
            featured: false,
        },
        {
            name: "Keno",
            description: "Fast-paced lottery with draws every 3.5 minutes",
            minJackpot: "Varies",
            drawDays: "Daily",
            drawTime: "Every 3.5 minutes",
            numbersRequired: "1-10 from 1-80",
            supplementary: "None",
            ticketPrice: "$1.00+",
            maxJackpot: "$1+ Million",
            icon: <Clock className="w-8 h-8 text-indigo-600" />,
            color: "from-indigo-600 to-indigo-800",
            featured: false,
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-lg font-medium mb-6">
                                🇦🇺 The Lott Official Games
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                ALL LOTTERY GAMES
                                <span className="block text-amber-400">IN ONE PLACE</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                                Discover every way to win with The Lott's complete range of lottery games. From massive jackpots to
                                daily draws, find your perfect game.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={() => {
                                    scrollToTop()
                                    router.push("/register")
                                }}
                                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                🎯 Start Playing Today
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => {
                                    scrollToTop()
                                    router.push("/about")
                                }}
                                className="border-2 border-white text-green-600 hover:bg-white hover:text-blue-900 font-bold px-8 py-4 text-lg rounded-lg"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Games */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">FEATURED GAMES</h2>
                            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
                            <p className="text-lg md:text-xl text-gray-600">
                                Our most popular lottery games with the biggest jackpots
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {lotteryGames
                                .filter((game) => game.featured)
                                .map((game, index) => (
                                    <Card
                                        key={index}
                                        className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-200"
                                    >
                                        <div className={`bg-gradient-to-r ${game.color} p-6 text-white`}>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    {game.icon}
                                                    <h3 className="text-2xl font-bold">{game.name}</h3>
                                                </div>
                                                <Badge className="bg-amber-500 text-black font-bold">FEATURED</Badge>
                                            </div>
                                            <p className="text-white/90 text-lg">{game.description}</p>
                                        </div>

                                        <CardContent className="p-6">
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div>
                                                    <div className="text-sm text-gray-600 mb-1">Minimum Jackpot</div>
                                                    <div className="text-xl font-bold text-green-600">{game.minJackpot}</div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-600 mb-1">Draw Days</div>
                                                    <div className="text-lg font-semibold text-gray-900">{game.drawDays}</div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-600 mb-1">Numbers Required</div>
                                                    <div className="text-sm font-medium text-gray-900">{game.numbersRequired}</div>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-600 mb-1">Ticket Price</div>
                                                    <div className="text-lg font-semibold text-blue-900">{game.ticketPrice}</div>
                                                </div>
                                            </div>

                                            <Button
                                                className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-bold"
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
                    </div>
                </div>
            </section>

            {/* All Games */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ALL LOTTERY GAMES</h2>
                            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
                            <p className="text-lg md:text-xl text-gray-600">
                                Complete range of lottery games available through The Lott
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {lotteryGames.map((game, index) => (
                                <Card
                                    key={index}
                                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200"
                                >
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            {game.icon}
                                            <CardTitle className="text-xl">{game.name}</CardTitle>
                                            {game.featured && <Badge className="bg-amber-500 text-black text-xs">HOT</Badge>}
                                        </div>
                                        <p className="text-gray-600 text-sm">{game.description}</p>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Min Jackpot:</span>
                                                <span className="font-semibold text-green-600">{game.minJackpot}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Draw Days:</span>
                                                <span className="font-medium">{game.drawDays}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Draw Time:</span>
                                                <span className="font-medium">{game.drawTime}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Ticket Price:</span>
                                                <span className="font-semibold text-blue-900">{game.ticketPrice}</span>
                                            </div>
                                        </div>

                                        <Button
                                            className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white"
                                            onClick={() => {
                                                scrollToTop()
                                                router.push("/register")
                                            }}
                                        >
                                            Play Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Choose */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">HOW TO CHOOSE YOUR GAME</h2>
                            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
                            <p className="text-lg md:text-xl text-gray-600">Find the perfect lottery game for your playing style</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <DollarSign className="w-12 h-12 text-green-600" />,
                                    title: "For Big Jackpots",
                                    description: "Want life-changing money?",
                                    games: ["OZ Lotto", "Powerball"],
                                    recommendation: "Choose OZ Lotto or Powerball for the biggest potential wins",
                                },
                                {
                                    icon: <Clock className="w-12 h-12 text-blue-600" />,
                                    title: "For Frequent Draws",
                                    description: "Love regular chances to win?",
                                    games: ["Keno", "Set for Life"],
                                    recommendation: "Try Keno for multiple daily draws or Set for Life for guaranteed income",
                                },
                                {
                                    icon: <Star className="w-12 h-12 text-purple-600" />,
                                    title: "For Better Odds",
                                    description: "Want higher chances of winning?",
                                    games: ["Saturday Lotto", "Monday & Wednesday Lotto"],
                                    recommendation: "Saturday Lotto offers the best balance of jackpot size and winning odds",
                                },
                            ].map((guide, index) => (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-8">
                                        <div className="flex justify-center mb-6">{guide.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">{guide.title}</h3>
                                        <p className="text-gray-600 mb-4">{guide.description}</p>
                                        <div className="mb-4">
                                            {guide.games.map((game, i) => (
                                                <Badge key={i} variant="outline" className="mr-2 mb-2">
                                                    {game}
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-700 italic">{guide.recommendation}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Play?</h2>
                        <p className="text-xl mb-8 opacity-90">Join millions of Australians playing The Lott games every week</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={() => {
                                    scrollToTop()
                                    router.push("/register")
                                }}
                                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                🎯 Start Playing Now
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => {
                                    scrollToTop()
                                    router.push("/login")
                                }}
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-4 text-lg rounded-lg"
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
