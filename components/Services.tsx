export default function Services() {
  return (
    <section className="py-24 bg-gray-50 text-center">
      
      <h2 className="text-3xl font-bold mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
        
        {/* 카드 1 */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">
            콘텐츠 제작
          </h3>
          <p className="text-gray-600">
            보험사 맞춤형 금융 콘텐츠를 기획부터 제작까지 제공합니다.
          </p>
        </div>

        {/* 카드 2 */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">
            교육 및 강의
          </h3>
          <p className="text-gray-600">
            실무 중심의 보험 및 금융 교육 프로그램을 제공합니다.
          </p>
        </div>

      </div>

    </section>
  )
}
