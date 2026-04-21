import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { PageBanner } from "@/components/site/PageBanner";
import { articles } from "@/lib/data";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a
    ? { title: `${a.title} – Đào Duy Sơn`, description: a.excerpt }
    : { title: "Bài viết không tồn tại" };
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageBanner
          title={article.title}
          subtitle={`${article.category} · ${article.date}`}
          crumbs={[
            { label: "Tin tức", href: "/tin-tuc" },
            { label: article.title },
          ]}
        />

        <section className="py-14 md:py-20 bg-white">
          <div className="container-x grid gap-10 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-[420px] object-cover rounded-2xl shadow"
              />

              <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-slate-700">
                <p className="text-lg text-slate-800 font-medium">
                  {article.excerpt}
                </p>
                {article.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-[color:var(--brand-green)] text-white p-6 text-center">
                <div className="text-xl font-extrabold uppercase">
                  Cần tư vấn thi công sơn nước?
                </div>
                <p className="mt-2 text-white/90">
                  Đào Duy Sơn khảo sát miễn phí và báo giá trong 30 phút.
                </p>
                <a href="tel:0913742110" className="btn-primary mt-5 inline-flex">
                  Gọi 0913 742 110
                </a>
              </div>
            </article>

            <aside className="lg:col-span-1 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-bold uppercase text-slate-500">
                  Bài viết liên quan
                </div>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/tin-tuc/${r.slug}`} className="flex gap-3 group">
                        <img
                          src={r.img}
                          alt={r.title}
                          className="h-16 w-20 flex-none rounded-lg object-cover"
                        />
                        <div className="text-sm">
                          <div className="font-bold text-slate-800 group-hover:text-[color:var(--brand-green)] leading-snug line-clamp-2">
                            {r.title}
                          </div>
                          <div className="mt-0.5 text-xs text-slate-500">{r.date}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[color:var(--muted)] p-6">
                <div className="text-sm font-bold uppercase text-[color:var(--brand-orange)]">
                  Danh mục
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {Array.from(new Set(articles.map((a) => a.category))).map((c) => (
                    <li key={c}>→ {c}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
