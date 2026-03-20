import Image from "next/image"

export default function Portfolio() {
  return (
    <section className="py-24 bg-white text-center">
      
      <h2 className="text-3xl font-bold mb-12">
        Portfolio
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        
        {/* 아이템 1 */}
        <div>
          <Image
            src="/images/신인과정교재개발.jpg"
            alt="portfolio1"
            width={400}
            height={250}
            className="rounded-xl mb-4"
          />
          <p className="text-gray-600">
            보험 콘텐츠 제작 사례
          </p>
        </div>

        {/* 아이템 2 */}
        <div>
          <Image
            src="/images/신입매니저육성.jpg"
            alt="portfolio2"
            width={400}
            height={250}
            className="rounded-xl mb-4"
          />
          <p className="text-gray-600">
            교육 프로그램 사례
          </p>
        </div>

        {/* 아이템 3 */}
        <div>
          <Image
            src="/images/건강보험활성화.jpg"
            alt="portfolio3"
            width={400}
            height={250}
            className="rounded-xl mb-4"
          />
          <p className="text-gray-600">
            금융 콘텐츠 디자인
          </p>
        </div>

      </div>

    </section>
  )
}
