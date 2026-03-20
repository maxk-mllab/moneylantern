import Image from "next/image"

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-3 border-b border-gray-200 bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
      
      {/* 로고 */}
      <div className="flex items-center">
        <Image
          src="/images/머리랜턴 로고1-1.jpg"
          alt="MoneyLantern"
          width={130}
          height={32}
          priority
        />
      </div>

      {/* 메뉴 */}
      <nav className="flex gap-6 text-gray-600 text-sm">
        <a href="#company" className="hover:text-black transition">Company</a>
        <a href="#services" className="hover:text-black transition">Services</a>
        <a href="#portfolio" className="hover:text-black transition">Portfolio</a>
        <a href="#contact" className="hover:text-black transition">Contact</a>
      </nav>

    </header>
  )
}
