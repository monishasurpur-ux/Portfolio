import { motion } from "framer-motion"
import portfolioData from "../data/portfolio"

function Education() {
  return (
    <section
      id="education"
      className="py-24 px-8 md:px-16 lg:px-24 bg-slate-950"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium mb-3">
            EDUCATION
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Academic Background
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5">
            My academic journey and foundation in computer science and
            software development.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">

          {portfolioData.education.map((item, index) => (
            <motion.div
              key={`${item.institution}-${item.degree}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                {/* Education Details */}
                <div>

                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm mb-4">
                    {item.period}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 text-lg mt-2">
                    {item.institution}
                  </p>

                  <p className="text-slate-400 leading-7 mt-5 max-w-3xl">
                    {item.description}
                  </p>

                </div>

                {/* CGPA */}
                <div className="shrink-0 bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 text-center">

                  <p className="text-sm text-slate-400 mb-1">
                    Academic Score
                  </p>

                  <p className="text-xl font-bold text-blue-400">
                    {item.score}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Education