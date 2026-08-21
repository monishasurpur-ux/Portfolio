import nodemailer from "nodemailer"

export default async function handler(req, res) {

  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  )

  // Browser preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end()
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    })
  }

  try {

    const {
      name,
      email,
      phone,
      message
    } = req.body

    // Validate form
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields."
      })
    }

    // Gmail transporter
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
New message from your portfolio.

Name: ${name}

Email: ${email}

Phone: ${phone || "Not provided"}

Message:

${message}
      `
    })

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!"
    })

  }catch (error) {
  console.error("Contact form error:")
  console.error(error)
  console.error("Error message:", error.message)
  console.error("Error code:", error.code)

  return res.status(500).json({
    success: false,
    message: "Failed to send message."
    })
  }
}
