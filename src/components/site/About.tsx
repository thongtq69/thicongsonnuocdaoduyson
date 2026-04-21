import { pinImages } from "@/lib/images";

const categories = [
  {
    title: "Sơn nhà dân dụng",
    desc: "Sơn nhà phố, nhà cấp 4, căn hộ chung cư – trọn gói vật tư và nhân công.",
    img: pinImages[0],
  },
  {
    title: "Sơn biệt thự cao cấp",
    desc: "Sơn biệt thự hiện đại, tân cổ điển với sơn hiệu ứng, giả đá, giả bê tông.",
    img: pinImages[1],
  },
  {
    title: "Sơn văn phòng – showroom",
    desc: "Thi công ngoài giờ, sơn nhanh khô – không ảnh hưởng kinh doanh.",
    img: pinImages[2],
  },
  {
    title: "Sơn chống thấm tường, mái",
    desc: "Xử lý triệt để thấm dột bằng hệ Kova, Sika, Neomax chuyên dụng.",
    img: pinImages[3],
  },
  {
    title: "Sơn epoxy nhà xưởng",
    desc: "Sơn sàn epoxy tự phẳng, epoxy lăn cho kho, xưởng, hầm để xe.",
    img: pinImages[4],
  },
  {
    title: "Sơn chống nóng mái tôn",
    desc: "Giảm 10–15°C nhiệt độ mái, tiết kiệm điện, kéo dài tuổi thọ tôn.",
    img: pinImages[5],
  },
  {
    title: "Sơn hiệu ứng nghệ thuật",
    desc: "Sơn giả đá marble, bê tông, nhũ vàng, vân gỗ – tạo điểm nhấn sang trọng.",
    img: pinImages[6],
  },
  {
    title: "Sơn sửa lại nhà cũ",
    desc: "Xử lý bong tróc, ẩm mốc, phối màu làm mới nhà cũ chỉ trong vài ngày.",
    img: pinImages[7],
  },
];

export function About() {
  return (
    <section id="gioi-thieu" className="py-14 md:py-20 bg-white">
      <div className="container-x">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
            Chúng tôi làm những gì?
          </p>
          <h2 className="section-title mt-2 text-2xl md:text-3xl text-slate-800 uppercase">
            Các hạng mục thi công sơn nước Đào Duy Sơn
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-relaxed">
            Chúng tôi nhận thi công sơn nước trọn gói cho mọi loại công trình – từ nhà
            phố, biệt thự, văn phòng đến nhà xưởng. Khảo sát tận nơi miễn phí, báo giá
            rõ ràng theo m² hoàn thiện.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article
              key={c.title}
              className="card-hover group overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 text-white font-bold leading-tight uppercase text-sm">
                  {c.title}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {c.desc}
                </p>
                <a
                  href="tel:0913742110"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase text-[color:var(--brand-orange)] hover:underline"
                >
                  Xem chi tiết
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 17l5-5-5-5v10z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
