import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">Privacy Protection Policy</CardTitle>
              <p className="text-gray-600 mt-2">How we safeguard your personal information on our OZ Lotto platform</p>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
                  <p>
                    When you join our OZ Lotto platform, we collect essential information to provide you with secure
                    lottery services. This includes your personal details for account creation, payment information for
                    ticket purchases, and communication preferences for important updates about draws and winnings.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <h4 className="font-semibold text-blue-900">Account Information</h4>
                    <p className="text-blue-800">
                      Name, email address, phone number, date of birth, and residential address for identity
                      verification and prize distribution.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Protect Your Data</h2>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900">Advanced Encryption</h4>
                      <p className="text-green-800">
                        All personal and financial data is protected using bank-level encryption technology to ensure
                        maximum security.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900">Secure Storage</h4>
                      <p className="text-purple-800">
                        Your information is stored in protected servers with multiple layers of security and regular
                        monitoring.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900">Access Control</h4>
                      <p className="text-orange-800">
                        Only authorized personnel have access to your data, and all access is logged and monitored.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Processing your OZ Lotto ticket purchases and managing your account</li>
                    <li>Verifying your identity for security and regulatory compliance</li>
                    <li>Notifying you about draw results and potential winnings</li>
                    <li>Processing prize payments and tax documentation</li>
                    <li>Providing customer support and resolving any issues</li>
                    <li>Improving our platform based on user feedback and behavior</li>
                    <li>Sending important updates about our services and new features</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information Sharing Practices</h2>
                  <p>
                    We maintain strict confidentiality of your personal information. Your data is never sold or shared
                    with third parties for marketing purposes. We only share information when required by law, for
                    payment processing, or to verify large prize winnings with relevant authorities.
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg mt-4">
                    <p className="text-red-800">
                      <strong>Important:</strong> We may be required to share winner information with tax authorities
                      and gaming regulators for prizes above certain thresholds, as mandated by Australian law.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Privacy Rights</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <p>
                        <strong>Access:</strong> You can request to view all personal information we hold about you
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <p>
                        <strong>Correction:</strong> You can update or correct any inaccurate personal information
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <p>
                        <strong>Deletion:</strong> You can request deletion of your account and associated data
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <p>
                        <strong>Portability:</strong> You can request a copy of your data in a portable format
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Retention</h2>
                  <p>
                    We retain your personal information for as long as your account remains active or as needed to
                    provide our lottery services. After account closure, we may retain certain information for legal
                    compliance, fraud prevention, and regulatory requirements for up to 7 years.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Communication Preferences</h2>
                  <p>
                    You have control over the communications you receive from us. While we must send essential
                    notifications about your account and winnings, you can opt out of promotional communications at any
                    time through your account settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Policy Updates</h2>
                  <p>
                    We may update this privacy policy periodically to reflect changes in our practices or legal
                    requirements. Significant changes will be communicated through email notifications and prominent
                    notices on our platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Information</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>
                      If you have questions about this privacy policy or wish to exercise your privacy rights, please
                      reach out through your account dashboard or our customer support channels. We are committed to
                      addressing your privacy concerns promptly and transparently.
                    </p>
                  </div>
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
