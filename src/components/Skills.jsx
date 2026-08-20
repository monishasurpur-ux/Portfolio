import { motion } from "framer-motion"
import portfolioData from "../data/portfolio"

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: portfolioData.skills.programming
    },
    {
      title: "Frontend",
      skills: portfolioData.skills.frontend
    },
    {
      title: "Data Analysis",
      skills: portfolioData.skills.data
    },
    {
      title: "Database",
      skills: portfolioData.skills.database
    },
    {
      title: "Tools",
      skills: portfolioData.skills.tools
    }
  ]

  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-16 lg:px-24 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Small Heading */}
          <p className="text-blue-400 font-medium mb-3">
            MY SKILLS
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technologies I Work With
          </h2>

          {/* Description */}
          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            A combination of programming, web development, data analysis,
            and database technologies that I use to build projects and
            solve problems.
          </p>
        </motion.div>


        {/* ================= SKILLS GRID ================= */}
        <div className="flex flex-wrap justify-center gap-6">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}

              initial={{
                opacity: 0,
                y: 30
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}

              whileHover={{
                y: -6
              }}

              className="
                w-full
                md:w-[calc(50%-12px)]
                lg:w-[calc(33.333%-16px)]
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-7
                hover:border-blue-500
                transition
              "
            >

              {/* Category Name */}
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>


              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-lg
                      bg-slate-800
                      border
                      border-slate-700
                      text-slate-300
                      text-sm
                      hover:border-blue-400
                      hover:text-blue-400
                      transition
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills