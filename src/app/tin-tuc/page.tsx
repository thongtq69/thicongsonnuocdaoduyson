import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { PageBanner } from "@/components/site/PageBanner";
import { articles } from "@/lib/data";

export const metadata = {
  title: "Tin tức – Bảng báo giá sơn bả – Cẩm nang | Đào Duy Sơn",
  description:
    "Cập nhật bảng báo giá sơn bả Hải Phòng, cẩm nang chống thấm, sơn vạch kẻ, sơn hiệu ứng và xu hướng sơn nhà miền Bắc 2026.",
};

export default function NewsPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Tin tức &amp; Bảng báo giá sơn bả"
          subtitle="Kiến thức, bảng báo giá sơn bả 2026 và cẩm nang chống thấm – sơn vạch kẻ – sơn hiệu ứng dành cho chủ nhà miền Bắc."
          crumbs={[{ label: "Tin tức" }]}
        />

        <section className="py-14 md:py-20 bg-white">
          <div className="container-x">
            <article className="grid gap-8 lg:grid-cols-5 items-center mb-14">
              <Link
                href={`/tin-tuc/${featured.slug}`}
                className="lg:col-span-3 overflow-hidden rounded-2xl"
              >
                <img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="lg:col-span-2">
                <span className="tag-chip">
                  {featured.category}
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  <Link
                    href={`/tin-tuc/${featured.slug}`}
                    className="hover:text-[color:var(--brand-red)]"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <div className="mt-2 text-sm text-slate-500">{featured.date}</div>
                <p className="mt-4 text-slate-600 leading-relaxed">{featured.excerpt}</p>
                <Link
                  href={`/tin-tuc/${featured.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--brand-red)] px-5 py-2.5 font-semibold text-[color:var(--brand-red)] hover:bg-brand hover:text-white transition"
                >
                  Đọc bài viết
                </Link>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <Link
                  key={a.slug}
                  href={`/tin-tuc/${a.slug}`}
                  className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <img src={a.img} alt={a.title} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold uppercase text-[color:var(--brand-red)]">
                        {a.category}
                      </span>
                      <span className="text-slate-500">{a.date}</span>
                    </div>
                    <h3 className="mt-2 font-bold text-slate-900 leading-snug line-clamp-2 hover:text-[color:var(--brand-red)]">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {a.excerpt}
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
