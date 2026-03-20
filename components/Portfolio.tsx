import Image from "next/image"

export default function Portfolio() {
  // 포트폴리오 데이터 배열로 관리하면 관리가 편리합니다.
  const portfolioItems = [
    { src: "/images/신인과정교재개발.jpg", alt: "portfolio1", title: "신인보험설계사 대상 콘텐츠개발" },
    { src: "/images/신입매니저육성.jpg", alt: "portfolio2", title: "육성목적에 따른 2종콘텐츠 및 교재제작" },
    { src: "/images/건강보험활성화.jpg", alt: "portfolio3", title: "질병여정별 세이즈북5종 개발" },
    { src: "/images/화법의정석.jpg", alt: "portfolio4", title: "고객 니즈환기용 화법 책자 개발" },
    { src: "/images/시장발굴.jpg", alt: "portfolio5", title: "고객발굴 역량향상을 위한 콘텐츠개발" },
    { src: "/images/MBA과정.jpg", alt: "portfolio6", title: "MBA과정 프로그램 기획및 운영" },
    { src: "/images/숨고.jpg", alt: "portfolio7", title: "비접촉,비활성화 보유고객 관리프로세스및 터치콘텐츠 개발" },
    { src: "/images/1사1교.jpg", alt: "portfolio8", title: "금융교육을 희망하는 초중고 출강 교육" },
    { src: "/images/디지털기반신보험영업.jpg", alt: "portfolio9", title: "고객디지털여정 니즈환기 보험콘텐츠 개발" },
    { src: "/images/SBS머니쇼.jpg", alt: "portfolio10", title: "머니쇼-하우머니 재테크 코너 출연" },
  ];

  return (
    <section className="py-24 bg-white text-center">
      
      <h2 className="text-3xl font-bold mb-12">
        Portfolio
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={250}
              className="rounded-xl mb-4 object-cover"
            />
            <p className="text-gray-600">{item.title}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
