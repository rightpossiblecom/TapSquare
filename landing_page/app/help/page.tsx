export default function Help() {
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
            <h1 className="text-5xl font-bold text-black dark:text-white mb-4">Help Center</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find answers to common questions about TapSquare and how to get the most out of the game.
            </p>
          </div>

          <div className="space-y-8">
            {/* Getting Started */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Getting Started</h2>
              <div className="space-y-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    How do I download TapSquare?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    You can download TapSquare from the Google Play Store (for Android devices) or the Apple App Store (for iOS devices). Simply search for "TapSquare" in the app store of your device and tap the Download button.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    What are the system requirements?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    <strong>iOS:</strong> Requires iOS 13.0 or later. <br/>
                    <strong>Android:</strong> Requires Android 6.0 (API level 23) or higher.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    How much storage space does TapSquare require?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    TapSquare is a lightweight app requiring only about 50-100 MB of storage space. It's optimized for minimal installation size while maintaining smooth gameplay.
                  </p>
                </details>
              </div>
            </div>

            {/* Gameplay */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Gameplay</h2>
              <div className="space-y-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    How do I play TapSquare?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Open the app and tap "Start Game". Random colored squares will appear on your screen. Tap each square before it disappears to earn points. The game lasts 30 seconds. Try to get the highest score possible!
                  </p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    What happens when the game ends?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    When the 30-second timer runs out, the game ends and your final score is displayed. Your high score is automatically saved if you beat your previous record. From the results screen, you can tap "Play Again" to start a new game or "Home" to return to the main menu.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    How is my score calculated?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    You earn 1 point for each square you successfully tap. Tapping multiple squares in quick succession may earn bonus points based on your speed and accuracy. Your score increases with each successful tap throughout the game.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    Does the difficulty change during the game?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Yes! As your score increases, the game becomes progressively harder. Squares appear faster and become slightly smaller, making it more challenging to tap them before they disappear.
                  </p>
                </details>
              </div>
            </div>

            {/* Settings & Features */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Settings & Features</h2>
              <div className="space-y-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    How do I access the settings menu?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    From the home screen, tap the Settings icon (gear icon) in the top right corner. From here, you can adjust sound, vibration, view your statistics, and reset your high score.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    How do I disable sounds?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Go to Settings and toggle the "Sound" option to off. You can enable or disable sound at any time without affecting your scores or game progress.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    How do I reset my high score?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Go to Settings and tap "Reset High Score". You'll be asked to confirm. Once confirmed, your high score will be reset to 0. This action cannot be undone, so choose carefully!
                  </p>
                </details>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Troubleshooting</h2>
              <div className="space-y-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    The app is crashing or freezing. What should I do?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Try these steps: <br/>
                    1. Close the app completely and reopen it.<br/>
                    2. Restart your device.<br/>
                    3. Check that you have enough storage space available.<br/>
                    4. Update to the latest version of TapSquare.<br/>
                    If the problem persists, contact our support team at support@tapsquare.app.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    My high score disappeared. How can I recover it?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Game scores are stored locally on your device. If you uninstall the app, your high score will be lost. If you reinstall TapSquare, you'll start with a new high score of 0. Unfortunately, there is no way to recover a deleted high score as we do not backup scores on our servers.
                  </p>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-black dark:text-white cursor-pointer">
                    The game is laggy or running slowly. What can I do?
                    <span className="text-2xl group-open:rotate-180 transition">+</span>
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Try these steps: <br/>
                    1. Close other running apps to free up device memory.<br/>
                    2. Reduce screen brightness settings if playing for extended periods.<br/>
                    3. Restart your device.<br/>
                    4. Update the app to the latest version, which may include performance improvements.
                  </p>
                </details>
              </div>
            </div>

            {/* Support */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Need More Help?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you didn't find the answer to your question, don't worry! Contact our support team and we'll be happy to help.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
