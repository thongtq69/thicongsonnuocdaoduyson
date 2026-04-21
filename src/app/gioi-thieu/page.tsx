import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCall } from "@/components/site/FloatingCall";
import { PageBanner } from "@/components/site/PageBanner";
import { pinImages } from "@/lib/images";

export const metadata = {
  title: "Giới thiệu – Thi Công Sơn Nước Đào Duy Sơn",
  description:
    "Đào Duy Sơn – đội ngũ thi công sơn nước chuyên nghiệp tại TP.HCM với 12+ năm kinh nghiệm, 1.500+ công trình bàn giao đúng hẹn.",
};

const values = [
  {
    title: "Tận tâm với từng công trình",
    desc: "Coi nhà khách như nhà mình – thi công cẩn thận, che chắn kỹ lưỡng, vệ sinh sạch khi bàn giao.",
  },
  {
    title: "Vật tư chính hãng",
    desc: "Chỉ sử dụng sơn Dulux, Jotun, Nippon, Mykolor có hóa đơn VAT, có thể cùng khách mua trực tiếp tại đại lý.",
  },
  {
    title: "Báo giá minh bạch",
    desc: "Giá trọn gói theo m², tách rõ vật tư – nhân công, không phát sinh. Ký hợp đồng trước khi thi công.",
  },
  {
    title: "Bảo hành dài hạn",
    desc: "Bảo hành rộp, bong tróc, bạc màu đến 24 tháng. Chống thấm bảo hành đến 10 năm.",
  },
];

const milestones = [
  { year: "2013", text: "Đào Duy Sơn khởi nghiệp với đội thợ sơn 5 người tại TP.HCM." },
  { year: "2016", text: "Mở rộng sang chống thấm, cải tạo nhà cũ và sơn epoxy nhà xưởng." },
  { year: "2019", text: "Đạt mốc 500 công trình, trở thành đối tác thi công của Dulux, Jotun." },
  { year: "2022", text: "Phát triển đội 30+ thợ chuyên nghiệp, phục vụ toàn khu vực Nam Bộ." },
  { year: "2026", text: "Hoàn thành 1.500+ công trình, bảo hành dài hạn cho mọi khách hàng." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Giới thiệu Đào Duy Sơn"
          subtitle="Đội ngũ thi công sơn nước chuyên nghiệp với 12+ năm kinh nghiệm, 1.500+ công trình đã hoàn thành tại TP.HCM và các tỉnh lân cận."
          crumbs={[{ label: "Giới thiệu" }]}
        />

        <section className="py-14 md:py-20 bg-white">
          <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
                Về chúng tôi
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-800 uppercase">
                Thi công sơn nước Đào Duy Sơn
              </h2>
              <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Đào Duy Sơn là đơn vị thi công sơn nước trọn gói có trụ sở tại TP.HCM,
                  hoạt động từ năm 2013. Chúng tôi phục vụ đa dạng công trình từ nhà phố,
                  biệt thự, căn hộ chung cư đến văn phòng, showroom và nhà xưởng.
                </p>
                <p>
                  Triết lý của chúng tôi rất đơn giản: làm đúng quy trình, dùng vật tư
                  chính hãng và minh bạch mọi chi phí với khách hàng. Nhờ đó, phần lớn
                  khách mới đến với Đào Duy Sơn đều qua lời giới thiệu từ khách cũ.
                </p>
                <p>
                  Mọi công trình đều được khảo sát miễn phí, báo giá chi tiết theo m², ký
                  hợp đồng rõ ràng và bảo hành dài hạn – để chủ nhà yên tâm từ lúc nhận
                  báo giá đến khi bàn giao.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/dich-vu" className="btn-primary">
                  Xem dịch vụ
                </Link>
                <a
                  href="tel:0913742110"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--brand-green)] px-5 py-2.5 font-semibold text-[color:var(--brand-green)] hover:bg-[color:var(--brand-green)] hover:text-white transition"
                >
                  Gọi 0913 742 110
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={pinImages[6]}
                alt="Đội thợ Đào Duy Sơn"
                className="rounded-2xl shadow-xl w-full h-[440px] object-cover"
              />
              <div className="absolute -bottom-6 left-6 rounded-xl bg-[color:var(--brand-orange)] text-white px-5 py-3 shadow-xl">
                <div className="text-2xl font-extrabold">12+ năm</div>
                <div className="text-sm">kinh nghiệm thi công</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-[color:var(--muted)]">
          <div className="container-x">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
                Giá trị cốt lõi
              </p>
              <h2 className="section-title mt-2 text-2xl md:text-3xl text-slate-800 uppercase">
                4 điều Đào Duy Sơn luôn cam kết
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="card-hover rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="text-4xl font-extrabold text-[color:var(--brand-orange)]">
                    0{i + 1}
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-slate-800">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-white">
          <div className="container-x">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
                Chặng đường phát triển
              </p>
              <h2 className="section-title mt-2 text-2xl md:text-3xl text-slate-800 uppercase">
                Các cột mốc đáng nhớ
              </h2>
            </div>

            <div className="mt-10 max-w-3xl mx-auto">
              <ol className="relative border-l-2 border-[color:var(--brand-green)]/30 pl-8 space-y-8">
                {milestones.map((m) => (
                  <li key={m.year} className="relative">
                    <span className="absolute -left-[41px] grid h-8 w-8 place-items-center rounded-full bg-[color:var(--brand-green)] text-white text-xs font-bold">
                      {m.year.slice(2)}
                    </span>
                    <div className="text-sm font-bold text-[color:var(--brand-orange)]">
                      {m.year}
                    </div>
                    <p className="mt-1 text-slate-700 leading-relaxed">{m.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-[color:var(--brand-green)] text-white">
          <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              { n: "12+", l: "Năm kinh nghiệm" },
              { n: "1.500+", l: "Công trình hoàn thành" },
              { n: "30+", l: "Thợ chuyên nghiệp" },
              { n: "98%", l: "Khách hàng hài lòng" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-4xl md:text-5xl font-extrabold text-[color:var(--brand-orange)]">
                  {s.n}
                </div>
                <div className="mt-1 text-white/90">{s.l}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
