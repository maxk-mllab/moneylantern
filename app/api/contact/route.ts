import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    try {
      await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `[문의] ${name}`,
      text: message,
    })
      console.log("메일 전송 성공")
    }catch(error){
      console.log("메일 전송 실패:", error)
    }
    

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
