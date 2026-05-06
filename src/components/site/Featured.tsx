"use client";

import { useState } from "react";
import { featuredImage, workImages } from "@/lib/images";

const benefits = [
  {
    label: "Chất lượng",
    title: "Bề mặt dày, đều và sạch mép",
    desc: "Kiểm soát từ nền tường tới lớp phủ: chà nhám, soi đèn, lăn đúng định mức, dặm vá trước khi bàn giao.",
    bullets: ["Không bỏ lớp lót", "Che chắn sàn và đồ đạc", "Nghiệm thu từng phòng"],
    image: featuredImage,
  },
  {
    label: "Giá thành",
    title: "Báo giá theo m², không phát sinh mơ hồ",
    desc: "Tách rõ vật tư, nhân công, giàn giáo, chống thấm, thạch cao để chủ nhà kiểm soát ngân sách ngay từ đầu.",
    bullets: ["Báo giá sau khảo sát", "Chọn 3 mức vật tư", "Cam kết khối lượng"],
    image: workImages[69],
  },
  {
    label: "Tiến độ",
    title: "Tổ chức ca thợ theo mặt bằng thực tế",
    desc: "Phân đội xử lý bề mặt, đội bả, đội lăn phủ và vệ sinh bàn giao để rút ngắn thời gian chờ khô.",
    bullets: ["Lịch thi công từng ngày", "Không gián đoạn sinh hoạt", "Dọn sạch cuối ca"],
    image: workImages[179],
  },
];

export function Featured() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = benefits[activeIndex];

  return (
    <section className="benefit-stage bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Lợi ích thi công</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-slate-950 md:text-5xl">
              Ba thứ chủ nhà quan tâm nhất
            </h2>
            <p className="mt-5 text-slate-600 leading-8">
              Lấy logic tab “Chất lượng - Giá thành - Tiến độ” của Paint&More, chuyển thành
              một khối tương tác để khách hiểu nhanh vì sao nên chọn Đào Duy Sơn.
            </p>

            <div className="mt-8 grid gap-3">
              {benefits.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`benefit-tab ${activeIndex === index ? "benefit-tab-active" : ""}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="benefit-panel">
            <div className="relative overflow-hidden rounded-[1.7rem]">
              <img src={active.image} alt={active.title} className="h-[430px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <div className="text-sm font-black uppercase tracking-[0.28em] text-[color:var(--brand-gold)]">
                  Lợi ích - quy trình
                </div>
                <h3 className="mt-3 text-3xl font-black">{active.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/82">{active.desc}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {active.bullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 shadow-sm">
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
