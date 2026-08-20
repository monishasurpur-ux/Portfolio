import { motion } from "framer-motion"
import portfolioData from "../data/portfolio"

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-8 md:px-16 lg:px-24 bg-slate-950"
    >

      {/* Section Heading */}
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <p className="text-blue-400 font-medium mb-3">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            A selection of projects I've built using modern technologies,
            data analysis, machine learning, and web development.
          </p>

        </motion.div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {portfolioData.projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ y: -8 }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition duration-300"
            >

              {/* Project Visual */}
              <div className="h-52 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">

                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                  className="text-7xl"
                >
                  {project.icon}
                </motion.div>

              </div>


              {/* Project Content */}
              <div className="p-7">

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>


                {/* Description */}
                <p className="text-slate-400 leading-7 mb-6">
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-7">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects