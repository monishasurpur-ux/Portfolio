import { motion } from "framer-motion"
import portfolioData from "../data/portfolio"

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 md:px-16 lg:px-24 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium mb-3">
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-7">
            Have a project, internship, or opportunity in mind? Feel free to
            reach out. I'm always open to discussing new ideas and
            opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-5">
              Get In Touch
            </h3>

            <p className="text-slate-400 leading-7 mb-8">
              You can contact me through the form or connect with me on
              GitHub and LinkedIn.
            </p>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-slate-500 mb-1">
                  EMAIL
                </p>

                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  {portfolioData.personal.email}
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">
                  GITHUB
                </p>

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  View GitHub Profile →
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">
                  LINKEDIN
                </p>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Connect on LinkedIn →
                </a>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="https://formsubmit.co/monishasurpur@gmail.com"
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 space-y-5"
          >

            {/* FormSubmit Settings */}

            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message!"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            {/* Spam protection honeypot */}
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-slate-300 mb-2"
              >
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-slate-300 mb-2"
              >
                Your Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm text-slate-300 mb-2"
              >
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-slate-300 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Send Message →
            </motion.button>

          </motion.form>

        </div>

      </div>
    </section>
  )
}

export default Contact