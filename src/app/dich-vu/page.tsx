import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { PageBanner } from "@/components/site/PageBanner";
import { services } from "@/lib/data";

export const metadata = {
  title: "Dịch vụ thi công sơn nước – Đào Duy Sơn",
  description:
    "Danh sách các dịch vụ sơn nước trọn gói của Đào Duy Sơn: sơn nhà, biệt thự, văn phòng, chống thấm, epoxy, chống nóng, sơn hiệu ứng.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Dịch vụ thi công sơn nước"
          subtitle="Danh mục dịch vụ sơn nước trọn gói cho mọi loại công trình – từ nhà dân dụng đến nhà xưởng công nghiệp."
          crumbs={[{ label: "Dịch vụ" }]}
        />

        <section className="py-14 md:py-20 bg-white">
          <div className="container-x">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.slug}
                  className="card-hover flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-[color:var(--brand-orange)] px-2.5 py-1 text-xs font-bold uppercase text-white">
                      {s.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-slate-800 leading-snug hover:text-[color:var(--brand-green)]">
                      <Link href={`/dich-vu/${s.slug}`}>{s.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        href={`/dich-vu/${s.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-bold uppercase text-[color:var(--brand-orange)] hover:underline"
                      >
                        Xem chi tiết
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 17l5-5-5-5v10z" />
                        </svg>
                      </Link>
                      <a
                        href="tel:0913742110"
                        className="text-sm font-bold text-[color:var(--brand-green)] hover:underline"
                      >
                        Gọi ngay
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-[color:var(--brand-green)] text-white text-center">
          <div className="container-x">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase">
              Chưa tìm thấy dịch vụ phù hợp?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/90">
              Gọi trực tiếp Đào Duy Sơn để được tư vấn giải pháp sơn nước phù hợp nhất
              cho công trình của bạn.
            </p>
            <a href="tel:0913742110" className="btn-primary mt-6">
              Gọi 0913 742 110
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
