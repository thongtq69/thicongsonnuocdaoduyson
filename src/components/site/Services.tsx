import { pinImages } from "@/lib/images";

const articles = [
  {
    title: "Báo giá thi công sơn nước mới nhất 2026 tại TP.HCM",
    desc: "Tổng hợp đơn giá sơn nội – ngoại thất theo m², bóc tách vật tư, nhân công để chủ nhà dễ đối chiếu, kiểm soát chi phí.",
    img: pinImages[8],
    tag: "Báo giá",
  },
  {
    title: "Quy trình 7 bước thi công sơn nước chuẩn nhà sản xuất",
    desc: "Từ khâu vệ sinh, xử lý tường, trét bột bả, sơn lót đến 2 lớp sơn phủ – từng bước đều ảnh hưởng độ bền màu sơn.",
    img: pinImages[9],
    tag: "Quy trình",
  },
  {
    title: "Cách chọn loại sơn Dulux – Jotun – Nippon – Mykolor phù hợp",
    desc: "So sánh độ phủ, độ bóng, khả năng lau chùi, chống nấm mốc để chọn đúng dòng sơn cho từng vị trí trong nhà.",
    img: pinImages[10],
    tag: "Tư vấn",
  },
  {
    title: "Sơn chống thấm tường ngoài – giải pháp bền 10 năm",
    desc: "Kết hợp lớp phụ gia chống thấm Kova CT-11A và lớp sơn ngoại thất chuyên dụng để xử lý triệt để thấm dột.",
    img: pinImages[11],
    tag: "Chống thấm",
  },
  {
    title: "Hướng dẫn phối màu sơn nhà hợp phong thủy 2026",
    desc: "Gợi ý bảng màu sơn theo mệnh, hướng nhà và phong cách kiến trúc – giúp không gian hài hòa, thu hút vượng khí.",
    img: pinImages[12],
    tag: "Phong thủy",
  },
  {
    title: "Thi công sơn epoxy nền nhà xưởng – giá và quy trình chuẩn",
    desc: "Giải pháp sàn epoxy tự phẳng, sàn lăn chịu tải cho kho bãi, hầm xe, xưởng sản xuất – bền 5–8 năm.",
    img: pinImages[13],
    tag: "Epoxy",
  },
  {
    title: "Cách xử lý tường bong tróc, ẩm mốc trước khi sơn lại",
    desc: "Các bước cạo lớp sơn cũ, xử lý nứt chân chim, chống kiềm – đảm bảo lớp sơn mới bám chắc, không rộp.",
    img: pinImages[14],
    tag: "Cẩm nang",
  },
  {
    title: "Sơn chống nóng mái tôn – giảm nhiệt độ nhà xưởng hiệu quả",
    desc: "Sơn phản nhiệt giúp hạ 10–15°C, bảo vệ mái tôn khỏi rỉ sét, tiết kiệm điện điều hòa đáng kể.",
    img: pinImages[15],
    tag: "Chống nóng",
  },
];

export function Services() {
  return (
    <section id="dich-vu" className="py-14 md:py-20 bg-[color:var(--muted)]">
      <div className="container-x">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
            Dịch vụ chúng tôi cung cấp
          </p>
          <h2 className="section-title mt-2 text-2xl md:text-3xl text-slate-800 uppercase">
            Chi tiết các dịch vụ sơn nước Đào Duy Sơn
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <article
              key={a.title}
              className="card-hover flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[color:var(--brand-orange)] px-2.5 py-1 text-xs font-bold uppercase text-white">
                  {a.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-bold text-slate-800 leading-snug line-clamp-2 hover:text-[color:var(--brand-green)]">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                  {a.desc}
                </p>
                <a
                  href="tel:0913742110"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase text-[color:var(--brand-orange)] hover:underline"
                >
                  Xem thêm
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="tel:0913742110"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--brand-green)] bg-white px-6 py-3 font-bold uppercase text-[color:var(--brand-green)] hover:bg-[color:var(--brand-green)] hover:text-white transition"
          >
            Xem tất cả dịch vụ
          </a>
        </div>
      </div>
    </section>
  );
}
