import { useState } from "react"
import portfolioData from "../data/portfolio"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-white"
            onClick={handleLinkClick}
          >
            {portfolioData.personal.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col gap-4 pt-2">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-slate-300 hover:text-blue-400 transition py-2 border-b border-slate-800"
                >
                  {link.name}
                </a>
              ))}

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar