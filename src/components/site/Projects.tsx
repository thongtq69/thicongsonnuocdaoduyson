import Link from "next/link";
import { projects } from "@/lib/data";

export function Projects() {
  const featured = projects.slice(0, 7);
  const [lead, ...rest] = featured;

  return (
    <section id="cong-trinh" className="bg-[#121212] py-16 text-white md:py-24">
      <div className="container-x">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-gold)]">
            Công trình tiêu biểu
          </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-5xl">
              Thư viện công trình thật
            </h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Ưu tiên ảnh hiện trường: đang thi công, hoàn thiện, nhà ở, biệt thự, xưởng và chống thấm.
          </p>
          </div>
          <Link href="/cong-trinh" className="btn-gold w-fit">
            Xem tất cả công trình
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Link href={`/cong-trinh/${lead.slug}`} className="group relative block min-h-[520px] overflow-hidden rounded-[1.8rem]">
            <img
              src={lead.img}
              alt={lead.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-3 text-sm">
                <span className="tag-chip">{lead.category}</span>
                <span className="text-white/75">{lead.area}</span>
              </div>
              <h3 className="mt-4 max-w-xl text-4xl font-black leading-tight">{lead.title}</h3>
              <p className="mt-2 text-white/70">{lead.location}</p>
            </div>
          </Link>

          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((p, index) => (
              <Link
                key={p.slug}
                href={`/cong-trinh/${p.slug}`}
                className={`project-tile group ${index === 1 || index === 4 ? "sm:translate-y-8" : ""}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-xs font-bold uppercase tracking-wide text-[color:var(--brand-gold)]">
                    {String(index + 2).padStart(2, "0")} / {p.category}
                  </div>
                  <div className="mt-1 font-black leading-tight">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
