// @ts-ignore
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts"

async function sendMail(email: string) {
  const client = new SmtpClient()

  try {
    await client.connect({
      hostname: "imap.domain.com",
      port: 587,
      username: "ansi@ansiglobal.com",
      password: "&CLo5RA4",
    })

    await client.send({
      from: "ansi@ansiglobal.com",
      to: email,
      subject: "Hello from Deno",
      content: "Mail Content，maybe HTML",
    })

    await client.close()
    return `Email has been sent to: ${email}`
  } catch (error) {
    console.error(error)
    return `There was a error: ${error}`
  }
}

export default sendMail
