export default function TermsOfService() {
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
            <h1 className="text-5xl font-bold text-black dark:text-white mb-2">Terms of Service</h1>
            <p className="text-gray-600 dark:text-gray-400">Last updated: February 26, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, and using TapSquare (the "App"), you are agreeing to be bound by these Terms of Service (the "Agreement"). If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">2. License Grant</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial purposes. This license does not include any right to resell, redistribute, or modify the App or any of its features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">3. User Responsibilities</h2>
              <p>
                You agree to use the App in a manner consistent with all applicable laws and regulations. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Reverse engineer, decompile, or disassemble the App</li>
                <li>Attempt to gain unauthorized access to the App or its servers</li>
                <li>Use the App for any illegal or harmful purposes</li>
                <li>Interfere with or disrupt the normal functioning of the App</li>
                <li>Transmit viruses, malware, or any other harmful code through the App</li>
                <li>Violate any third-party intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">4. Intellectual Property Rights</h2>
              <p>
                TapSquare, including all its content, features, functionality, design, graphics, and user interface, is owned by TapSquare, its licensors, or other providers of such content and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or transmit any content from the App without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">5. Game Data and Scores</h2>
              <p>
                Your game scores and statistics are stored locally on your device. We do not store or maintain permanent records of your gameplay data on our servers. Your high scores will be reset if you uninstall the App or clear your device data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">6. Disclaimer of Warranties</h2>
              <p>
                The App is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free from viruses or other harmful components. Your use of the App is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permissible by law, TapSquare shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of or inability to use the App, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless TapSquare from any claims, damages, or costs arising from your use of the App, your violation of these Terms of Service, or your violation of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">9. Termination</h2>
              <p>
                We reserve the right to terminate or restrict your access to the App at any time, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that violates any applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">10. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which TapSquare is located, without regard to its conflicts of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">11. Severability</h2>
              <p>
                If any provision of these Terms of Service is found to be invalid or unenforceable, that provision shall be severed from the Agreement, and the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms of Service at any time. Changes will take effect upon posting to the App. Your continued use of the App following the posting of revised Terms of Service means that you accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">13. Contact Us</h2>
              <p>
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded">
                <p><strong>Email:</strong> support@tapsquare.app</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
