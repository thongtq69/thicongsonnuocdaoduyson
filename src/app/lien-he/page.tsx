import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { PageBanner } from "@/components/site/PageBanner";
import { Contact } from "@/components/site/Contact";

export const metadata = {
  title: "Liên hệ – Đội sơn bả Đào Duy Sơn (Hải Phòng & miền Bắc)",
  description:
    "Liên hệ Đào Duy Sơn để nhận báo giá sơn bả – chống thấm – thạch cao: hotline 0913 742 110, email lienhe@daoduyson.vn. Phục vụ Hải Phòng, Quảng Ninh, Hà Nội, Hưng Yên, Bắc Ninh.",
};

const info = [
  {
    title: "Hotline 24/7",
    value: "0913 742 110",
    href: "tel:0913742110",
    icon: (
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z" />
    ),
  },
  {
    title: "Email hỗ trợ",
    value: "lienhe@daoduyson.vn",
    href: "mailto:lienhe@daoduyson.vn",
    icon: (
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
  {
    title: "Văn phòng chính",
    value: "TP. Hải Phòng",
    href: "#",
    icon: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    ),
  },
  {
    title: "Giờ làm việc",
    value: "7:30 – 19:00 (T2 – CN)",
    href: "#",
    icon: (
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Liên hệ Đào Duy Sơn"
          subtitle="Gửi yêu cầu khảo sát hoặc gọi trực tiếp – chúng tôi phản hồi trong 30 phút."
          crumbs={[{ label: "Liên hệ" }]}
        />

        <section className="py-14 md:py-16 bg-white">
          <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {info.map((i) => (
              <a
                key={i.title}
                href={i.href}
                className="card-hover flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {i.icon}
                  </svg>
                </div>
                <div className="mt-4 text-sm font-bold uppercase text-slate-500">
                  {i.title}
                </div>
                <div className="mt-1 font-extrabold text-[color:var(--brand-red-dark)] text-lg">
                  {i.value}
                </div>
              </a>
            ))}
          </div>
        </section>

        <Contact />

        <section className="pb-16">
          <div className="container-x">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                title="Đào Duy Sơn map"
                src="https://www.google.com/maps?q=Hai+Phong+Vietnam&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
