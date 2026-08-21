import http from "http"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const PORT = 5000

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  // Handle browser preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(204)
    res.end()
    return
  }

  // Contact API
  if (req.method === "POST" && req.url === "/api/contact") {
    let body = ""

    req.on("data", (chunk) => {
      body += chunk
    })

    req.on("end", async () => {
      try {
        const { name, email, phone, message } = JSON.parse(body)

        // Basic validation
        if (!name || !email || !message) {
          res.writeHead(400, {
            "Content-Type": "application/json"
          })

          res.end(
            JSON.stringify({
              success: false,
              message: "Please fill in all required fields."
            })
          )

          return
        }

        // Configure email transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        })

        // Send email
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          replyTo: email,
          subject: `New Portfolio Message from ${name}`,

          text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
          `
        })

        // Success response
        res.writeHead(200, {
          "Content-Type": "application/json"
        })

        res.end(
          JSON.stringify({
            success: true,
            message: "Message sent successfully!"
          })
        )

      } catch (error) {
        console.error("Contact form error:", error)

        res.writeHead(500, {
          "Content-Type": "application/json"
        })

        res.end(
          JSON.stringify({
            success: false,
            message: "Failed to send message. Please try again."
          })
        )
      }
    })

    return
  }

  // Route not found
  res.writeHead(404, {
    "Content-Type": "application/json"
  })

  res.end(
    JSON.stringify({
      success: false,
      message: "Route not found"
    })
  )
})

server.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})