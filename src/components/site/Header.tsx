import Link from "next/link";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Công trình", href: "/cong-trinh" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <div className="bg-[color:var(--brand-green)] text-white text-sm">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
              TP. HCM – Toàn quốc
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.7c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM4 20v-1c0-2.66 5.33-4 8-4s8 1.34 8 4v1H4z" />
              </svg>
              Thi Công Sơn Nước Đào Duy Sơn
            </span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a href="tel:0913742110" className="inline-flex items-center gap-1.5 hover:text-[color:var(--brand-orange)]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z" />
              </svg>
              0913 742 110
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-[color:var(--brand-green)] text-white grid place-items-center font-extrabold text-lg shadow-md">
            ĐS
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-extrabold text-[color:var(--brand-green-dark)] uppercase tracking-wide">
              Thi Công Sơn Nước
            </div>
            <div className="text-xl font-extrabold text-[color:var(--brand-orange)] uppercase">
              Đào Duy Sơn
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-[15px] font-semibold uppercase tracking-wide text-slate-700 hover:text-[color:var(--brand-green)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:0913742110"
          className="btn-primary text-sm hidden md:inline-flex"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z" />
          </svg>
          Gọi báo giá ngay
        </a>
      </div>

      <nav className="lg:hidden border-t border-slate-200 bg-white">
        <div className="container-x flex gap-1 overflow-x-auto py-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap px-3 py-1.5 text-sm font-semibold uppercase text-slate-700 hover:text-[color:var(--brand-green)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
