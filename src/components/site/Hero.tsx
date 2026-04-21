import { heroImage } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden isolate">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      />
      <div className="absolute inset-0 -z-10 hero-overlay" />

      <div className="container-x py-20 md:py-28 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[color:var(--brand-orange)]" />
            Đội thợ lành nghề – Bảo hành 24 tháng
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight uppercase">
            Thi công sơn nước trọn gói
            <br />
            <span className="text-[color:var(--brand-orange)]">Đào Duy Sơn</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
            Dịch vụ sơn nhà ở, biệt thự, văn phòng, nhà xưởng – chất liệu chính hãng,
            báo giá minh bạch, thi công đúng tiến độ. Khảo sát miễn phí tại công trình
            trong vòng 24 giờ.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0913742110" className="btn-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z" />
              </svg>
              Gọi ngay 0913 742 110
            </a>
            <a href="#dich-vu" className="btn-ghost">
              Xem dịch vụ
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { n: "12+", l: "Năm kinh nghiệm" },
              { n: "1.500+", l: "Công trình hoàn thành" },
              { n: "24h", l: "Khảo sát tận nơi" },
              { n: "100%", l: "Cam kết tiến độ" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                <dt className="text-2xl md:text-3xl font-extrabold text-[color:var(--brand-orange)]">
                  {s.n}
                </dt>
                <dd className="text-sm text-white/85">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
