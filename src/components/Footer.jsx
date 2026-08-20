import portfolioData from "../data/portfolio"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Name and Short Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              {portfolioData.personal.name}
            </h3>

            <p className="text-slate-400 mt-2">
              {portfolioData.personal.role}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm">

            <a
              href="#about"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              Experience
            </a>

            <a
              href="#education"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              Contact
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-5">

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

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer