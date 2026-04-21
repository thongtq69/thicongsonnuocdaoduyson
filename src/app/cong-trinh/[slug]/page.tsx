import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { PageBanner } from "@/components/site/PageBanner";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p
    ? { title: `${p.title} – Đào Duy Sơn`, description: p.desc }
    : { title: "Không tìm thấy công trình" };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageBanner
          title={project.title}
          subtitle={`${project.category} · ${project.location} · ${project.area}`}
          crumbs={[
            { label: "Công trình", href: "/cong-trinh" },
            { label: project.title },
          ]}
        />

        <section className="py-14 md:py-20 bg-white">
          <div className="container-x grid gap-10 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[460px] object-cover rounded-2xl shadow"
              />

              <div className="mt-8">
                <h2 className="text-2xl font-extrabold text-slate-800 uppercase">
                  Thông tin công trình
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{project.desc}</p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="rounded-xl border border-slate-200 bg-[color:var(--muted)] p-4">
                    <div className="text-xs font-bold uppercase text-slate-500">
                      Hạng mục
                    </div>
                    <div className="mt-1 font-bold text-slate-800">{project.category}</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-[color:var(--muted)] p-4">
                    <div className="text-xs font-bold uppercase text-slate-500">
                      Địa điểm
                    </div>
                    <div className="mt-1 font-bold text-slate-800">{project.location}</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-[color:var(--muted)] p-4">
                    <div className="text-xs font-bold uppercase text-slate-500">
                      Diện tích
                    </div>
                    <div className="mt-1 font-bold text-slate-800">{project.area}</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-[color:var(--muted)] p-4">
                    <div className="text-xs font-bold uppercase text-slate-500">
                      Bảo hành
                    </div>
                    <div className="mt-1 font-bold text-slate-800">24 tháng</div>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 p-6 bg-[color:var(--muted)]">
                  <h3 className="font-bold text-slate-800 uppercase">
                    Hạng mục thi công
                  </h3>
                  <ul className="mt-3 space-y-2 text-slate-700">
                    <li>✓ Khảo sát hiện trạng và đo đạc chi tiết</li>
                    <li>✓ Xử lý bề mặt, vệ sinh tường cũ</li>
                    <li>✓ Trét bả matit và sơn lót kháng kiềm</li>
                    <li>✓ Sơn 2 lớp phủ hoàn thiện đúng định mức</li>
                    <li>✓ Vệ sinh và bàn giao công trình</li>
                  </ul>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-1 space-y-6">
              <div className="rounded-2xl bg-[color:var(--brand-green)] text-white p-6">
                <div className="text-sm font-bold uppercase text-[color:var(--brand-orange)]">
                  Cần tư vấn?
                </div>
                <div className="mt-2 text-xl font-extrabold">
                  Nhận báo giá tương tự cho công trình của bạn
                </div>
                <a href="tel:0913742110" className="btn-primary mt-5 w-full justify-center">
                  Gọi 0913 742 110
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-bold uppercase text-slate-500">
                  Công trình khác
                </div>
                <ul className="mt-4 space-y-4">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/cong-trinh/${o.slug}`}
                        className="flex gap-3 group"
                      >
                        <img
                          src={o.img}
                          alt={o.title}
                          className="h-16 w-20 flex-none rounded-lg object-cover"
                        />
                        <div className="text-sm">
                          <div className="font-bold text-slate-800 group-hover:text-[color:var(--brand-green)] leading-snug">
                            {o.title}
                          </div>
                          <div className="mt-0.5 text-slate-500">{o.location}</div>
                        </div>
                      </Link>
                    </li>
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
