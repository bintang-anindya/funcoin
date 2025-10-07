import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-black text-gray-200 overflow-x-hidden">
      {/* ====== NAVBAR ====== */}
      <nav className="flex flex-wrap justify-between items-center px-6 sm:px-10 py-5 bg-gray-900/70 backdrop-blur-md sticky top-0 z-50 shadow-md">
        <h1 className="text-xl sm:text-2xl font-orbitron text-white tracking-wider">
          GROK SINGULARITY
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-8 text-gray-300 text-xs sm:text-sm font-medium mt-3 sm:mt-0">
          <a href="#video" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#token" className="hover:text-white transition-colors">
            Tokenomics
          </a>
        </div>
      </nav>

      {/* ====== HERO VIDEO SECTION ====== */}
      <section
        id="video"
        className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black"
      >
        <motion.div
          className="relative mx-auto w-full max-w-xs sm:max-w-md aspect-square overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
        >
          <video
            src="/videos/showcase.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>

        <motion.h1
          className="mt-10 text-3xl sm:text-5xl md:text-6xl font-orbitron bg-gradient-to-r from-gray-100 via-gray-400 to-gray-700 bg-clip-text text-transparent leading-tight px-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          The Future of Funcoin {" "}
          <span className="text-white">GROK SINGULARITY</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-400 font-orbitron max-w-md sm:max-w-2xl text-sm sm:text-lg leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          This "point of no return" could revolutionize everything — markets,
          trading, entire industries — or it's just hype. Either way, it's the
          ultimate asymmetric bet in the AI race. It changes the game overnight!
        </motion.p>

        <motion.button
          className="mt-8 sm:mt-10 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-gray-700 to-black text-white font-semibold text-sm sm:text-base hover:scale-105 transition-transform shadow-lg"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Revolution
        </motion.button>
      </section>

      {/* ====== FEATURES SECTION ====== */}
      <section
        id="features"
        className="px-4 sm:px-10 py-16 sm:py-24 bg-black/60 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 font-orbitron">
          Why <span className="text-white">Grok Singularity?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Community First",
              desc: "Built for fun, powered by you. Every holder shapes the future of Grok.",
            },
            {
              title: "Transparent Tokenomics",
              desc: "No hidden tricks. Just pure fun and fair distribution.",
            },
            {
              title: "Dynamic Utility",
              desc: "More than just a meme — staking, NFTs, and games coming soon.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 p-6 sm:p-8 rounded-2xl hover:bg-gray-700/60 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 font-orbitron">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="py-4 sm:py-5 text-center text-gray-500 bg-gray-900/60 border-t border-gray-800 text-xs sm:text-sm tracking-wide backdrop-blur-sm">
        <p>
          © 2025 <span className="text-white">Grok Singularity</span> — Built
          for Fun, Styled for the Future.
        </p>
      </footer>
    </div>
  );
};

export default App;
