import Link from "next/link";
import { serviceAreas, services } from "@/lib/data";

const keywordChips = [
  "Sơn bả trọn gói Hà Nam",
  "Thi công sơn bả Quảng Ninh",
  "Dịch vụ sơn nhà đẹp",
  "Thi công thạch cao tại Hải Phòng",
  "Sơn nhà giá rẻ",
  "Thi công sơn bả Hà Nội",
  "Bảng báo giá sơn bả",
  "Thi công sơn chống thấm",
  "Sửa chữa nhà trọn gói",
  "Thi công sơn vạch kẻ theo yêu cầu",
  "Thi công sơn vạch kẻ bãi đậu xe",
  "Thi công sơn vạch kẻ nhà xưởng",
  "Sơn nhà trọn gói Hưng Yên",
  "Thi công sơn dầu Hải Phòng",
  "Thi công sơn bả tại Đại An",
  "Đội sơn bả Hải Phòng",
  "Dịch vụ sơn bả uy tín",
  "Chi phí sơn nhà",
  "Sơn gai - sơn gấm",
  "Sơn nhà chuyên nghiệp",
  "Thi công sơn bả Hạ Long",
  "Thi công sơn bả Ninh Bình",
  "Thi công sơn bả Hòa Bình",
  "Sơn bả trọn gói Bắc Ninh",
  "Sơn chống thấm tường nhà",
  "Sơn chống thấm sân thượng",
  "Sơn chống nóng mái tôn",
  "Dịch vụ sơn nhà Hạ Long Quảng Ninh",
  "Sơn nhà Cửa Ông Quảng Ninh",
  "Sơn nhà giá rẻ Quảng Ninh",
  "Thi công sơn hiệu ứng",
];

export function Services() {
  return (
    <section id="dich-vu" className="overflow-hidden bg-muted py-16 md:py-24">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Dịch vụ chính</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-slate-950 md:text-5xl">
              Hạng mục thi công dạng slide 01-09
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Mỗi hạng mục được trình bày như một product card: số thứ tự lớn, ảnh thật,
              mô tả ngắn, CTA rõ. Scroll ngang trên mobile để giữ cảm giác carousel của site mẫu.
            </p>
          </div>
          <Link href="/dich-vu" className="btn-primary w-fit">
            Xem toàn bộ dịch vụ
          </Link>
        </div>

        <div className="service-rail mt-10">
          {services.map((service, index) => (
            <article key={service.slug} className="service-slide group">
              <div className="relative h-72 overflow-hidden rounded-[1.4rem]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute left-5 top-5 text-6xl font-black text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="tag-chip absolute right-5 top-5">{service.tag}</span>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-2xl font-black leading-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">{service.short}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <Link
                  href={`/dich-vu/${service.slug}`}
                  className="text-sm font-black uppercase text-[color:var(--brand-red)]"
                >
                  Xem chi tiết
                </Link>
                <a
                  href="tel:0913742110"
                  className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-brand"
                >
                  Gọi báo giá
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Khu vực phục vụ</p>
            <h3 className="mt-3 text-2xl font-black uppercase text-slate-950 md:text-3xl">
              Có mặt khắp miền Bắc
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Trụ sở Hải Phòng, đội xe và đội thợ di chuyển theo cụm công trình để giữ tiến độ.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((a) => (
              <div key={a.slug} className="area-chip">
                <span>{a.name.charAt(0)}</span>
                <div>
                  <div className="font-extrabold text-slate-950">{a.name}</div>
                  <div className="mt-1 text-xs text-slate-600">{a.highlight}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[1.7rem] border border-slate-200 bg-white p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">Từ khóa dịch vụ</p>
              <h3 className="mt-1 text-xl font-extrabold text-slate-900 md:text-2xl">
                Bạn đang tìm dịch vụ nào?
              </h3>
            </div>
            <a href="#lien-he" className="btn-primary w-fit text-sm">
              Gửi yêu cầu khảo sát
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {keywordChips.map((k) => (
              <span key={k} className="keyword-chip">
                {k}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
