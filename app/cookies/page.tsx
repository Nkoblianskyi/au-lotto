import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">Cookie Usage Policy</CardTitle>
              <p className="text-gray-600 mt-2">Understanding how we use cookies on our OZ Lotto platform</p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">What Are Cookies</h2>
                  <p>
                    Cookies are small data files stored on your device when you visit our OZ Lotto website. These files
                    help us remember your preferences, improve your browsing experience, and ensure our platform works
                    smoothly for you.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Cookies</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Essential Website Functions</h3>
                      <p>
                        We use necessary cookies to ensure our lottery platform operates correctly, including
                        maintaining your login session and processing your ticket purchases securely.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Performance Enhancement</h3>
                      <p>
                        Performance cookies help us understand which pages are most popular and how visitors navigate
                        our site, allowing us to improve the overall user experience.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Personalization Features</h3>
                      <p>
                        Functional cookies remember your preferences such as language settings, favorite numbers, and
                        display options to make your visits more convenient.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Types of Cookies We Deploy</h2>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900">Session Cookies</h4>
                      <p className="text-blue-800">
                        Temporary cookies that expire when you close your browser, used for maintaining your current
                        session.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900">Persistent Cookies</h4>
                      <p className="text-green-800">
                        Longer-lasting cookies that remember your preferences across multiple visits to our platform.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900">Security Cookies</h4>
                      <p className="text-purple-800">
                        Essential for protecting your account and ensuring secure transactions when playing OZ Lotto.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Managing Your Cookie Preferences</h2>
                  <p>
                    You have full control over cookie settings through your browser preferences. You can choose to
                    accept all cookies, reject non-essential ones, or customize your preferences. Please note that
                    disabling certain cookies may affect the functionality of our lottery platform.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                    <p className="text-yellow-800">
                      <strong>Important:</strong> Essential cookies required for lottery ticket purchases and account
                      security cannot be disabled while using our services.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cookie Retention</h2>
                  <p>
                    Different cookies have varying lifespans. Session cookies are automatically deleted when you close
                    your browser, while persistent cookies may remain for up to 12 months to maintain your preferences
                    and improve your experience.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Updates to Cookie Usage</h2>
                  <p>
                    We may occasionally update our cookie practices to enhance security and functionality. Any
                    significant changes will be communicated through our platform notifications.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
