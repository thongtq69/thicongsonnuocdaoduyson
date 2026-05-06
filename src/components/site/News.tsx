import Link from "next/link";
import { articles } from "@/lib/data";

export function News() {
  const featured = articles.slice(0, 4);
  return (
    <section id="tin-tuc" className="py-16 md:py-24 bg-muted">
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">
            Tin tức – cẩm nang
          </p>
            <h2 className="mt-3 text-3xl font-black uppercase text-slate-950 md:text-5xl">
              Báo giá &amp; cẩm nang sơn bả
            </h2>
          </div>
          <Link href="/tin-tuc" className="btn-primary w-fit">
            Xem tất cả bài viết
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((a) => (
            <article
              key={a.slug}
              className="card-hover overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white"
            >
              <Link href={`/tin-tuc/${a.slug}`} className="block">
                <img src={a.img} alt={a.title} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="tag-chip">{a.category}</span>
                    <span className="text-slate-500">{a.date}</span>
                  </div>
                  <h3 className="mt-2 font-bold text-slate-900 leading-snug line-clamp-2 hover:text-[color:var(--brand-red)]">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
