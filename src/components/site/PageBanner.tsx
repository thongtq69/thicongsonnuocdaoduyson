import Link from "next/link";
import { pageBannerImage } from "@/lib/images";

type Crumb = { label: string; href?: string };

export function PageBanner({
  title,
  subtitle,
  crumbs = [],
}: {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('${pageBannerImage}')`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[rgba(18,18,18,0.92)] via-[rgba(94,15,15,0.78)] to-[rgba(138,26,26,0.45)]" />

      <div className="container-x py-16 md:py-20 text-white">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap items-center gap-1.5 text-white/85">
            <li>
              <Link href="/" className="hover:text-[color:var(--brand-gold)]">
                Trang chủ
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span>/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-[color:var(--brand-gold)]">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-[color:var(--brand-gold)] font-semibold">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold uppercase leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-3xl text-white/90 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
