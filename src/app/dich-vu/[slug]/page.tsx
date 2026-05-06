import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { PageBanner } from "@/components/site/PageBanner";
import { services } from "@/lib/data";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: "Không tìm thấy dịch vụ" };
  return {
    title: `${s.title} – Đào Duy Sơn`,
    description: s.desc,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const others = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageBanner
          title={service.title}
          subtitle={service.short}
          crumbs={[
            { label: "Dịch vụ", href: "/dich-vu" },
            { label: service.title },
          ]}
        />

        <section className="py-14 md:py-20 bg-white">
          <div className="container-x grid gap-10 lg:grid-cols-3">
            <article className="lg:col-span-2">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[380px] object-cover rounded-2xl shadow"
              />

              <div className="prose prose-slate max-w-none mt-8">
                <h2 className="text-2xl font-extrabold text-slate-900 uppercase">
                  Tổng quan dịch vụ
                </h2>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>

                <h3 className="mt-8 text-xl font-extrabold text-slate-900 uppercase">
                  Điểm nổi bật
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-1 grid h-6 w-6 flex-none place-items-center rounded-full bg-brand text-white">
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-xl font-extrabold text-slate-900 uppercase">
                  Quy trình thi công
                </h3>
                <ol className="mt-4 space-y-4">
                  {[
                    "Tiếp nhận yêu cầu qua hotline hoặc form website.",
                    "Khảo sát công trình, đo đạc chi tiết trong vòng 24 giờ.",
                    "Gửi báo giá minh bạch theo từng hạng mục.",
                    "Ký hợp đồng và lên lịch thi công.",
                    "Thi công đúng quy trình, có giám sát kỹ thuật.",
                    "Nghiệm thu, bàn giao và kích hoạt bảo hành.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 text-slate-700">
                      <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-brand text-white font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>

            <aside className="lg:col-span-1 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-muted p-6">
                <div className="text-sm font-bold uppercase text-[color:var(--brand-red)]">
                  Liên hệ báo giá
                </div>
                <div className="mt-2 text-xl font-extrabold text-slate-900">
                  Cần thi công {service.title.toLowerCase()}?
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Khảo sát miễn phí, báo giá trong 30 phút.
                </p>
                <a href="tel:0913742110" className="btn-primary mt-5 w-full justify-center">
                  Gọi 0913 742 110
                </a>
                <Link
                  href="/lien-he"
                  className="mt-3 block text-center rounded-full border-2 border-[color:var(--brand-red)] px-5 py-2 font-semibold text-[color:var(--brand-red)] hover:bg-brand hover:text-white transition"
                >
                  Gửi yêu cầu online
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-bold uppercase text-slate-500">
                  Dịch vụ khác
                </div>
                <ul className="mt-3 space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/dich-vu/${o.slug}`}
                        className="flex items-start gap-2 text-sm text-slate-700 hover:text-[color:var(--brand-red)]"
                      >
                        <span className="mt-1 text-[color:var(--brand-red)]">→</span>
                        <span className="font-semibold">{o.title}</span>
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
