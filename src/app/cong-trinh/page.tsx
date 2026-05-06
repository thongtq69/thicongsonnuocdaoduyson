import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { PageBanner } from "@/components/site/PageBanner";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Công trình tiêu biểu – Đào Duy Sơn",
  description:
    "Hình ảnh các công trình sơn bả – chống thấm – sơn vạch kẻ – sơn epoxy Đào Duy Sơn đã thi công tại Hải Phòng, Quảng Ninh, Hà Nội, Hưng Yên, Bắc Ninh và miền Bắc.",
};

const categories = Array.from(new Set(projects.map((p) => p.category)));

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Công trình tiêu biểu"
          subtitle="Tổng hợp công trình sơn bả – chống thấm – thạch cao – sơn vạch kẻ Đào Duy Sơn đã hoàn thành tại Hải Phòng, Quảng Ninh, Hà Nội, Hưng Yên, Bắc Ninh, Ninh Bình."
          crumbs={[{ label: "Công trình" }]}
        />

        <section className="py-14 md:py-20 bg-white">
          <div className="container-x">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center rounded-full bg-brand text-white px-4 py-1.5 text-sm font-semibold uppercase">
                Tất cả
              </span>
              {categories.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-slate-300 px-4 py-1.5 text-sm font-semibold uppercase text-slate-700 hover:border-[color:var(--brand-red)] hover:text-[color:var(--brand-red)] cursor-default"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/cong-trinh/${p.slug}`}
                  className="card-hover group overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="tag-chip absolute left-3 top-3">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[color:var(--brand-red)]">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                        {p.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 3h18v2H3zm0 8h18v2H3zm0 8h18v2H3z" />
                        </svg>
                        {p.area}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {p.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
