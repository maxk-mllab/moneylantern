export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-10 py-6 border-b bg-white">
      
      <div className="text-2xl font-bold">
        MoneyLantern
      </div>

      <nav className="flex gap-8 text-gray-600">
        <a href="/about" className="hover:text-black">Company</a>
        <a href="/services" className="hover:text-black">Services</a>
        <a href="/portfolio" className="hover:text-black">Portfolio</a>
        <a href="/contact" className="hover:text-black">Contact</a>
      </nav>

    </header>
  )
}
