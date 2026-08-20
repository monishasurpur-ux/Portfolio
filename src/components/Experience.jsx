import { motion } from "framer-motion"

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-5 sm:px-8 md:px-16 lg:px-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-blue-400 font-medium mb-3">
            MY JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Experience
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-8">
            Explore my professional journey, including internships and
            hands-on experiences.
          </p>
        </motion.div>

        {/* Experience Card */}
        <div className="flex justify-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition duration-300"
          >

            {/* Blue Accent Line */}
            <div className="absolute left-0 top-6 bottom-6 w-1 bg-blue-500 rounded-full" />

            <div className="pl-4">

              {/* Duration */}
              <p className="text-blue-400 text-sm font-medium mb-3">
                Feb 2026 – May 2026
              </p>

              {/* Role */}
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Data Analysis Intern
              </h3>

              {/* Company */}
              <p className="text-blue-400 font-semibold text-lg mt-1 mb-5">
                KodNest
              </p>

              {/* Description */}
              <p className="text-slate-400 leading-7">
                Worked on real-world data analysis projects using Python,
                MySQL, and Power BI. Performed data cleaning, exploratory
                data analysis, visualization, and prepared dashboards and
                reports.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-6">

                <span className="px-3 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Python
                </span>

                <span className="px-3 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  MySQL
                </span>

                <span className="px-3 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Power BI
                </span>

                <span className="px-3 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  NumPy
                </span>

                <span className="px-3 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Pandas
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Experience