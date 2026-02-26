export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
              TS
            </div>
            <span className="font-bold text-lg text-black dark:text-white">TapSquare</span>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm">How It Works</a>
            <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-6">
          Fast Reaction Game
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
          Test Your Reflexes
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          TapSquare is a fast-paced reaction tapping game. Tap the squares before they disappear and compete for the highest score.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <a
            href="#"
            className="px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition"
          >
            Download Now
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-black dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-12">
            Game Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <div className="w-12 h-12 rounded bg-emerald-500 text-white flex items-center justify-center text-xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Fast-Paced Action</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Squares appear randomly and disappear quickly. Stay sharp and tap before they're gone.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <div className="w-12 h-12 rounded bg-emerald-500 text-white flex items-center justify-center text-xl mb-4">
                📈
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Progressive Difficulty</h3>
              <p className="text-gray-600 dark:text-gray-400">
                As your score increases, squares appear faster and get smaller. The challenge grows with you.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <div className="w-12 h-12 rounded bg-emerald-500 text-white flex items-center justify-center text-xl mb-4">
                🏆
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Track Your Best</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your high score is saved locally. Keep playing to beat your personal record.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <div className="w-12 h-12 rounded bg-emerald-500 text-white flex items-center justify-center text-xl mb-4">
                ⏱️
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Quick Sessions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Perfect for short gaming sessions. Play for 30 seconds or until you miss three times.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <div className="w-12 h-12 rounded bg-emerald-500 text-white flex items-center justify-center text-xl mb-4">
                🔔
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Haptic Feedback</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Toggle vibration and sound to customize your gameplay experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
              <div className="w-12 h-12 rounded bg-emerald-500 text-white flex items-center justify-center text-xl mb-4">
                📱
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Play Anywhere</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Smooth, responsive gameplay on any device. No accounts, no ads, just pure arcade fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Start Game</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tap the Start button and get ready. A countdown begins, then random squares will appear.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Tap the Squares</h3>
              <p className="text-gray-600 dark:text-gray-400">
                When a square appears, tap it before it disappears. Each successful tap increases your score.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">Beat Your Score</h3>
              <p className="text-gray-600 dark:text-gray-400">
                When time runs out or you miss three squares, your final score is recorded. Play again to beat it!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="group border border-gray-300 dark:border-gray-700 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-black dark:text-white">
                How do I download TapSquare?
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                You can download TapSquare from the Google Play Store (Android) or Apple App Store (iOS). Search for "TapSquare" or use the download links on this page.
              </p>
            </details>
            <details className="group border border-gray-300 dark:border-gray-700 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-black dark:text-white">
                Is TapSquare free to play?
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Yes! TapSquare is completely free to download and play. There are no ads, no in-app purchases, and no hidden costs.
              </p>
            </details>
            <details className="group border border-gray-300 dark:border-gray-700 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-black dark:text-white">
                What are the game modes?
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                TapSquare features a 30-second timed mode where you tap as many squares as you can before time runs out. The game ends when the timer reaches zero, and your score is displayed.
              </p>
            </details>
            <details className="group border border-gray-300 dark:border-gray-700 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-black dark:text-white">
                Do I need an account to play?
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                No account is needed. Your scores are saved locally on your device. Simply download, install, and start playing immediately.
              </p>
            </details>
            <details className="group border border-gray-300 dark:border-gray-700 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-black dark:text-white">
                Can I play offline?
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Absolutely! TapSquare is completely offline. There's no internet connection required. Play anytime, anywhere.
              </p>
            </details>
            <details className="group border border-gray-300 dark:border-gray-700 rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-black dark:text-white">
                Will my data be collected?
                <span className="text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                No. TapSquare respects your privacy. We don't collect personal data, and game scores are saved only on your device.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-emerald-500 dark:bg-emerald-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Test Your Reflexes?</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Download TapSquare now and start competing for your best score. Simple, fast, addictive.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#"
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                TS
              </div>
              <span className="font-bold text-black dark:text-white">TapSquare</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              A fast-paced reaction tapping game for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4">Game</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#features" className="hover:text-black dark:hover:text-white transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-black dark:hover:text-white transition">How It Works</a></li>
              <li><a href="#faq" className="hover:text-black dark:hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/privacy-policy" className="hover:text-black dark:hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-black dark:hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="/help" className="hover:text-black dark:hover:text-white transition">Help Center</a></li>
              <li><a href="/contact" className="hover:text-black dark:hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; 2026 TapSquare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
