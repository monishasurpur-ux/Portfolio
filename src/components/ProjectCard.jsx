import { motion } from "framer-motion"

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition duration-300"
    >

      {/* Project Image */}
      <div className="h-52 bg-slate-800 flex items-center justify-center overflow-hidden">

        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
          className="text-6xl"
        >
          {project.icon}
        </motion.div>

      </div>

      {/* Project Content */}
      <div className="p-6">

        <h3 className="text-2xl font-semibold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-slate-400 leading-7 mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm"
            >
              {technology}
            </span>
          ))}

        </div>

        <div className="flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Live Demo
          </a>

        </div>

      </div>

    </motion.div>
  )
}

export default ProjectCard