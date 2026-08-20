import { motion } from "framer-motion"

function About() {
  const highlights = [
    {
      number: "2+",
      label: " Projects"
    },
    {
      number: "4+",
      label: "Technologies"
    },
    {
      number: "2026",
      label: "Graduate"
    }
  ]

  return (
    <section
      id="about"
      className="py-24 px-8 md:px-16 lg:px-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 font-medium mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Turning Ideas Into Digital Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-lg leading-8 mb-6">
              I'm a Computer Science Engineering graduate passionate about
              building useful software and exploring data-driven technologies.
              I enjoy transforming ideas into practical applications using
              programming, web technologies, data analysis, and artificial
              intelligence.
            </p>

            <p className="text-slate-400 text-lg leading-8">
              My interests include web development, data analysis, machine
              learning, and AI-powered applications. I continuously work on
              projects to strengthen my technical skills and gain hands-on
              experience with modern tools and technologies.
            </p>

            {/* Strength Tags */}
            <div className="flex flex-wrap gap-3 mt-8">

              {[
                "Problem Solving",
                "Teamwork",
                "Adaptability",
                "Continuous Learning"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>
          </motion.div>

          {/* Right Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500 transition"
              >
                <h3 className="text-3xl font-bold text-blue-400 mb-2">
                  {item.number}
                </h3>

                <p className="text-sm text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default About