import { heroImage, heroImageAlt, workImages } from "@/lib/images";

const proofItems = [
  { value: "01", label: "Khảo sát tận nơi" },
  { value: "24h", label: "Gửi báo giá" },
  { value: "7 bước", label: "Quy trình chuẩn" },
  { value: "24 tháng", label: "Bảo hành" },
];

const miniServices = [
  "Sơn bả trọn gói",
  "Chống thấm",
  "Thạch cao",
  "Sơn hiệu ứng",
  "Epoxy nhà xưởng",
];

export function Hero() {
  return (
    <section className="hero-lab relative isolate min-h-[calc(100svh-112px)] overflow-hidden bg-[#120d0d] text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-85"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      />
      <div className="absolute inset-0 -z-10 hero-overlay" />
      <div className="paint-orbit paint-orbit-a" />
      <div className="paint-orbit paint-orbit-b" />

      <div className="container-x relative grid min-h-[calc(100svh-112px)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Đội sơn bả Hải Phòng - khảo sát miễn phí trong 24h
          </div>

          <div className="mt-7 max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.36em] text-[color:var(--brand-gold)]">
              Sơn bả trọn gói
            </p>
            <h1 className="mt-3 text-[clamp(2.6rem,7vw,6.6rem)] font-black uppercase leading-[0.9] tracking-normal">
              Đẹp bền
              <span className="block text-stroke-gold">chuẩn lớp</span>
            </h1>
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/86 md:text-lg">
            Thi công sơn nước, bả matit, chống thấm, thạch cao và sơn hiệu ứng cho nhà ở,
            biệt thự, văn phòng, nhà xưởng. Logic làm việc giống một hệ sơn chuyên nghiệp:
            khảo sát bề mặt, chọn vật tư đúng, thi công đúng lớp, nghiệm thu rõ từng hạng mục.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:0913742110" className="btn-primary btn-hero">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z" />
              </svg>
              Gọi ngay 0913 742 110
            </a>
            <a href="#cong-trinh" className="btn-ghost btn-hero-ghost">
              Xem công trình
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/25 py-3 backdrop-blur">
            <div className="marquee-track">
              {[...miniServices, ...miniServices].map((item, index) => (
                <span key={`${item}-${index}`} className="marquee-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[500px] lg:min-h-[640px]">
          <div className="hero-product-card absolute right-0 top-2 w-[78%] max-w-[480px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <img
              src={heroImageAlt}
              alt="Đội thợ Đào Duy Sơn thi công sơn bả"
              className="h-[440px] w-full rounded-[1.4rem] object-cover"
            />
            <div className="absolute left-7 top-7 rounded-2xl bg-black/60 px-4 py-3 backdrop-blur">
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--brand-gold)]">
                Đang thi công
              </div>
              <div className="mt-1 text-2xl font-black">Sơn ngoại thất</div>
            </div>
          </div>

          <div className="hero-side-card absolute bottom-12 left-0 w-[62%] max-w-[330px] overflow-hidden rounded-[1.6rem] border border-white/15 bg-white p-3 text-slate-900 shadow-2xl">
            <img
              src={workImages[129]}
              alt="Hoàn thiện nội thất sau sơn"
              className="h-56 w-full rounded-[1rem] object-cover"
            />
            <div className="p-3">
              <div className="text-xs font-extrabold uppercase tracking-[0.22em] text-[color:var(--brand-red)]">
                Bề mặt nghiệm thu
              </div>
              <div className="mt-1 text-xl font-black">Phẳng - đều màu - sạch mép</div>
            </div>
          </div>

          <dl className="hero-metric-grid absolute bottom-0 right-0 grid w-[70%] max-w-[420px] grid-cols-2 gap-3">
            {proofItems.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/12 bg-black/55 px-4 py-4 backdrop-blur-md">
                <dt className="text-2xl font-black text-[color:var(--brand-gold)] md:text-3xl">
                  {s.value}
                </dt>
                <dd className="text-xs font-semibold uppercase tracking-wide text-white/75">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
