const techCards = [
  {
    code: "Bám",
    title: "Bám chắc nền tường",
    desc: "Xử lý bụi phấn, kiềm hóa, nứt chân chim trước khi lăn lót để lớp sơn sau bám đúng chuẩn.",
  },
  {
    code: "Phủ",
    title: "Phủ đều màu",
    desc: "Thi công đúng định mức, kiểm tra ánh sáng xiên và dặm vá ngay khi nghiệm thu từng phòng.",
  },
  {
    code: "Bền",
    title: "Bền khí hậu miền Bắc",
    desc: "Chọn hệ sơn chống thấm, chống rêu mốc, chịu nồm ẩm và hơi muối biển cho từng bề mặt.",
  },
];

export function About() {
  return (
    <section id="gioi-thieu" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="eyebrow">Công nghệ thi công</p>
          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-slate-950 md:text-5xl">
            3 chuẩn kiểm soát cho một bề mặt sơn đẹp bền
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Học logic trình bày của Paint&More nhưng chuyển về thực tế thi công: không nói quá
            về sản phẩm, tập trung vào cách đội thợ xử lý nền tường, số lớp, tiến độ và nghiệm thu.
          </p>
          <a href="#lien-he" className="btn-primary mt-7">
            Nhận tư vấn vật tư
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {techCards.map((card, index) => (
            <article key={card.title} className="tech-card group">
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-black uppercase tracking-[0.28em] text-[color:var(--brand-gold)]">
                  0{index + 1}
                </span>
                <span className="tech-code">{card.code}</span>
              </div>
              <h3 className="mt-10 text-2xl font-black text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/74">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
