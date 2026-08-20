import { motion } from "framer-motion"
import portfolioData from "../data/portfolio"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-8 md:px-16 lg:px-24 pt-20"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 mb-6 rounded-full border border-slate-700 bg-slate-900 text-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </div>

          {/* Greeting */}
          <p className="text-blue-400 text-lg mb-4">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {portfolioData.personal.name}
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            {portfolioData.personal.role}
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-8 max-w-xl mb-8">
            {portfolioData.personal.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View My Projects →
            </motion.a>

            <motion.a
              href={portfolioData.personal.resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition"
            >
              Download Resume ↓
            </motion.a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-6 mt-8">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-slate-400 hover:text-blue-400 transition"
            >
              Email
            </a>
          </div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
          }}
          className="flex justify-center"
        >
          {/* Floating Animation + Hover Effect */}
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.05
            }}
            className="relative cursor-pointer"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-20" />

            {/* Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
              <img
                src="/profile.jpg"
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero