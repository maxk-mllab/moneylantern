"use client"

import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      alert("문의가 정상적으로 전송되었습니다!")
      setForm({ name: "", email: "", message: "" })
    } else {
      alert("전송 실패. 다시 시도해주세요.")
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-8">문의하기</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="문의 내용"
          value={form.message}
          onChange={handleChange}
          className="border p-3 rounded h-32"
          required
        />

        <button
          type="submit"
          className="bg-black text-white py-3 rounded-lg"
        >
          보내기
        </button>
      </form>
    </main>
  )
}
