export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-70 transition">
            <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
              TS
            </div>
            <span className="font-bold text-lg text-black dark:text-white">TapSquare</span>
          </a>
          <a href="/" className="text-emerald-500 hover:text-emerald-600 text-sm font-semibold">Back to Home</a>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-black dark:text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-400">Last updated: February 26, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to TapSquare ("we," "us," "our," or "Company"). We are committed to protecting your privacy and ensuring you have a positive experience on our mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. Information We Collect</h2>
              <p>
                TapSquare is designed with privacy as a core principle. We collect minimal information to operate the App effectively:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Game Data:</strong> Your game scores, high scores, and gameplay statistics are stored locally on your device only. We do not transmit or collect this data on our servers.</li>
                <li><strong>Device Information:</strong> We may collect basic device information such as device type, operating system version, and app version to improve app compatibility and performance.</li>
                <li><strong>Usage Analytics:</strong> We do not use analytics services to track your gameplay or personal behavior.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. How We Use Your Information</h2>
              <p>
                TapSquare uses collected information only for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>To provide, operate, and maintain the App and its features</li>
                <li>To improve app performance, stability, and user experience</li>
                <li>To deliver customer support and respond to inquiries</li>
                <li>To detect, prevent, and address technical issues and fraudulent activity</li>
                <li>To comply with legal obligations and enforce our Terms of Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">4. Data Storage</h2>
              <p>
                All your game scores and preferences are stored locally on your device. We do not store, transmit, or collect personal gaming data on our remote servers. Uninstalling the App will remove all locally stored game data from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">5. Third-Party Services</h2>
              <p>
                TapSquare does not integrate third-party analytics, advertising, or tracking services. We do not share your data with advertisers, marketers, or external platforms. The App operates independently without external data sharing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">6. Children's Privacy</h2>
              <p>
                TapSquare does not knowingly collect personal information from children under 13 years of age. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete such information and terminate the child's account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">7. Security</h2>
              <p>
                We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of any material changes by posting the updated policy on the App and updating the "Last updated" date at the top of this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">9. Your Rights</h2>
              <p>
                Depending on your jurisdiction, you may have certain rights regarding your information, including the right to access, correct, or delete your data. To exercise these rights or for any privacy-related concerns, please contact us at the email address provided in the Contact section below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">10. Contact Us</h2>
              <p>
                For questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded">
                <p><strong>Email:</strong> privacy@tapsquare.app</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
