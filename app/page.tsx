import Header from "@/components/Header"
import Image from "next/image"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">

        {/* 이미지 영역 */}
        <div className="mb-10">
          <Image
            src="/images/test01.jpg"
            alt="MoneyLantern"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* 타이틀 */}
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          MoneyLantern
        </h1>

        {/* 설명 */}
        <p className="text-xl text-gray-500 max-w-xl mb-10">
          보험사를 위한 맞춤형 금융 콘텐츠 제작 및 교육 전문 회사
        </p>

        {/* 버튼 */}
        <div className="flex gap-4">
          <a
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            문의하기
          </a>

          <a
            href="/services"
            className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            서비스 보기
          </a>
        </div>

      </main>

      <Services />
      <Portfolio />
      <CTA />
      <Footer />

    </>
  )
}
