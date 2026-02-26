export default function Contact() {
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
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-black dark:text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Have a question or feedback about TapSquare? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">General Inquiries</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  For general questions or feedback about TapSquare.
                </p>
                <a href="mailto:support@tapsquare.app" className="text-emerald-500 hover:text-emerald-600 font-semibold">
                  support@tapsquare.app
                </a>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Technical Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Report bugs or app crashes, or get help with technical issues.
                </p>
                <a href="mailto:support@tapsquare.app" className="text-emerald-500 hover:text-emerald-600 font-semibold">
                  support@tapsquare.app
                </a>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Privacy & Data</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Questions about your privacy, data, or data deletion.
                </p>
                <a href="mailto:privacy@tapsquare.app" className="text-emerald-500 hover:text-emerald-600 font-semibold">
                  privacy@tapsquare.app
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Helpful Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold">
                      Back to Home
                    </a>
                  </li>
                  <li>
                    <a href="/#faq" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/help" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold">
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Response Time</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We typically respond to all inquiries within 24-48 hours during business days. Thank you for your patience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
