const highlights = [
  "Sơn lót kháng kiềm chính hãng, bám dính cao",
  "2 lớp sơn phủ đúng chuẩn định mức nhà sản xuất",
  "Che khuất sàn – đồ đạc trước khi thi công",
  "Vệ sinh công trình sạch sẽ, bàn giao chu đáo",
  "Chiết khấu tốt cho chủ đầu tư, nhà thầu",
];

export function Featured() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-x">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
            Gói thi công nổi bật
          </p>
          <h2 className="section-title mt-2 text-2xl md:text-3xl text-slate-800">
            Dịch vụ sơn nhà trọn gói Đào Duy Sơn
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/6a/b0/af/6ab0af2a64bb3d61ff93ad66b5e126f4.jpg"
              alt="Thi công sơn nước Đào Duy Sơn"
              className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-6 -right-2 md:-right-6 rounded-xl bg-[color:var(--brand-orange)] text-white px-6 py-4 shadow-xl">
              <div className="text-3xl font-extrabold">24 tháng</div>
              <div className="text-sm">bảo hành chính hãng</div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-800">
              Cam kết chất lượng – Giá trọn gói không phát sinh
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Đào Duy Sơn báo giá theo m² hoàn thiện, đã bao gồm vật tư sơn chính hãng,
              nhân công, giàn giáo, bạt che và vệ sinh. Chủ nhà chỉ việc kiểm tra và
              thanh toán khi hài lòng.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 flex-none place-items-center rounded-full bg-[color:var(--brand-green)] text-white">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  </span>
                  <span className="text-slate-700">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:0913742110" className="btn-primary">
                Gọi báo giá 0913 742 110
              </a>
              <a
                href="#lien-he"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--brand-green)] px-5 py-2.5 font-semibold text-[color:var(--brand-green)] hover:bg-[color:var(--brand-green)] hover:text-white transition"
              >
                Gửi yêu cầu khảo sát
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
