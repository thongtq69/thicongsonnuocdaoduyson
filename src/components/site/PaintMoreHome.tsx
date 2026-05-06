"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { articles, projects, services } from "@/lib/data";
import { heroImage, heroImageAlt, workImages } from "@/lib/images";

const navItems = [
  { label: "Trang chủ", target: 0 },
  { label: "Giới thiệu", target: 1 },
  { label: "Dịch vụ", target: 3 },
  { label: "Công trình", target: 5 },
  { label: "Bảng màu", target: 4 },
  { label: "Blog", target: 6 },
  { label: "Liên hệ", target: 7 },
];

const heroBadges = ["Khảo sát bề mặt", "Chọn hệ sơn", "Thi công đúng lớp", "Nghiệm thu sạch"];

const techCards = [
  {
    code: "BÁM",
    title: "Nền tường bám chắc",
    desc: "Làm sạch bụi phấn, xử lý kiềm hóa và vết nứt trước khi lăn lót.",
  },
  {
    code: "DÀY",
    title: "Màng phủ đều màu",
    desc: "Kiểm soát định mức vật tư, thời gian chờ khô và lớp phủ hoàn thiện.",
  },
  {
    code: "KỴ",
    title: "Chống ẩm khí hậu Bắc Bộ",
    desc: "Ưu tiên chống thấm, chống rêu mốc và hơi muối biển theo từng bề mặt.",
  },
];

const benefitCards = [
  {
    label: "Chất lượng",
    title: "Bề mặt đẹp từ nền tường",
    desc: "Không bỏ bước lót, soi lỗi bằng ánh sáng xiên và dặm vá trước bàn giao.",
  },
  {
    label: "Giá thành",
    title: "Báo giá rõ từng hạng mục",
    desc: "Tách vật tư, nhân công, giàn giáo, chống thấm và thạch cao theo m2.",
  },
  {
    label: "Tiến độ",
    title: "Tổ đội chia ca gọn",
    desc: "Đội xử lý nền, đội bả, đội lăn phủ và đội vệ sinh đi theo lịch bàn giao.",
  },
];

const colorSets = [
  { name: "Cam đỏ", hex: "#d74f2a", palette: ["#d74f2a", "#f4a261", "#f6efe8"], image: workImages[84] },
  { name: "Cam sáng", hex: "#f28c38", palette: ["#f28c38", "#ffd166", "#fff6db"], image: workImages[70] },
  { name: "Vàng tươi", hex: "#f6c445", palette: ["#f6c445", "#7fb069", "#fff8d6"], image: workImages[129] },
  { name: "Vàng nhạt", hex: "#efe3a1", palette: ["#efe3a1", "#a7c957", "#f7f3df"], image: workImages[59] },
  { name: "Xanh ô liu", hex: "#7b8f48", palette: ["#7b8f48", "#d8e2dc", "#344e41"], image: workImages[179] },
  { name: "Xanh ngọc", hex: "#31a6a6", palette: ["#31a6a6", "#b8e6e1", "#153f45"], image: workImages[149] },
  { name: "Xanh dương", hex: "#265f9e", palette: ["#265f9e", "#9ecae1", "#eef7ff"], image: workImages[27] },
  { name: "Đỏ sạm", hex: "#8a1a1a", palette: ["#8a1a1a", "#c9a24a", "#f5f0e8"], image: heroImage },
];

function clampIndex(value: number, max: number) {
  return Math.min(max, Math.max(0, value));
}

export function PaintMoreHome() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeTech, setActiveTech] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [projectCount, setProjectCount] = useState(6);
  const [chatOpen, setChatOpen] = useState(false);
  const [slider, setSlider] = useState(50);
  const lockRef = useRef(false);
  const touchStartRef = useRef<number | null>(null);

  const sectionCount = 8;
  const currentColor = colorSets[activeColor];
  const service = services[activeService];
  const visibleProjects = projects.slice(0, projectCount);

  const goTo = useCallback((index: number) => {
    setActiveSection(clampIndex(index, sectionCount - 1));
  }, []);

  const stepSection = useCallback((delta: number) => {
    if (lockRef.current) return;
    lockRef.current = true;
    setActiveSection((current) => clampIndex(current + delta, sectionCount - 1));
    window.setTimeout(() => {
      lockRef.current = false;
    }, 820);
  }, []);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-free-scroll]")) return;
      event.preventDefault();
      if (Math.abs(event.deltaY) > 12) stepSection(event.deltaY > 0 ? 1 : -1);
    };
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        stepSection(1);
      }
      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        stepSection(-1);
      }
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(sectionCount - 1);
    };
    const onTouchStart = (event: TouchEvent) => {
      touchStartRef.current = event.touches[0]?.clientY ?? null;
    };
    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartRef.current === null) return;
      const endY = event.changedTouches[0]?.clientY ?? touchStartRef.current;
      const delta = touchStartRef.current - endY;
      touchStartRef.current = null;
      if (Math.abs(delta) > 44) stepSection(delta > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [goTo, stepSection]);

  const deckStyle = useMemo(() => ({
    transform: `translate3d(0, -${activeSection * 100}svh, 0)`,
  }), [activeSection]);

  return (
    <div className="pm-home min-h-svh overflow-hidden bg-white text-slate-900">
      <header className={`pm-header ${activeSection > 0 ? "pm-header-scrolled" : ""}`}>
        <Link href="/" className="pm-logo" onClick={() => goTo(0)}>
          <span className="pm-logo-mark">ĐS</span>
          <span>
            <strong>Đào Duy Sơn</strong>
            <small>Sơn nước miền Bắc</small>
          </span>
        </Link>
        <nav className="pm-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={activeSection === item.target ? "active" : ""}
              onClick={() => goTo(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <a className="pm-header-call" href="tel:0913742110">0913 742 110</a>
      </header>

      <main className="pm-deck" style={deckStyle}>
        <section className="pm-panel pm-hero">
          <div className="pm-hero-bubble pm-hero-bubble-a" />
          <div className="pm-hero-bubble pm-hero-bubble-b" />
          <div className="pm-hero-copy">
            <div className="pm-hero-kicker">
              <span>Sơn</span>
              <b>1</b>
              <span>Lớp chuẩn</span>
            </div>
            <h1>
              Thi công sơn bả
              <span>đẹp bền</span>
            </h1>
            <p>
              Giải pháp sơn nước, chống thấm, thạch cao và sơn hiệu ứng cho mọi bề mặt.
              Quy trình gọn, vật tư rõ, nghiệm thu từng lớp.
            </p>
            <div className="pm-actions">
              <button type="button" onClick={() => goTo(1)}>Thông tin chi tiết</button>
              <button type="button" onClick={() => goTo(7)}>Mua hàng ngay</button>
            </div>
            <button className="pm-discover" type="button" onClick={() => stepSection(1)}>
              Nhấn để khám phá
            </button>
          </div>
          <div className="pm-hero-visual">
            <img src={heroImageAlt} alt="Thi công sơn bả Đào Duy Sơn" />
            <div className="pm-roller-card">
              <img src={heroImage} alt="Bề mặt công trình sau hoàn thiện" />
            </div>
            <div className="pm-hero-title">
              <span>Son</span>
              <b>Paint</b>
              <span>Coat</span>
            </div>
          </div>
          <div className="pm-marquee">
            <div>
              {[...heroBadges, ...heroBadges].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="pm-panel pm-tech">
          <div className="pm-section-head">
            <p>Công nghệ thi công</p>
            <h2>3 chuẩn kiểm soát bề mặt</h2>
          </div>
          <div className="pm-tech-grid">
            {techCards.map((card, index) => (
              <article
                key={card.code}
                className={activeTech === index ? "active" : ""}
                onMouseEnter={() => setActiveTech(index)}
                onClick={() => setActiveTech(index)}
              >
                <span>{card.code}</span>
                <div>
                  <small>Công nghệ thi công</small>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <img className="pm-tech-image" src={workImages[199]} alt="Bề mặt sơn hoàn thiện" />
        </section>

        <section className="pm-panel pm-benefits">
          <div className="pm-section-head">
            <p>Từ quy trình chuẩn</p>
            <h2>Mang đến lợi ích lâu dài</h2>
          </div>
          <div className="pm-benefit-stack">
            {benefitCards.map((card, index) => (
              <article
                key={card.label}
                className={activeBenefit === index ? "active" : ""}
                onMouseEnter={() => setActiveBenefit(index)}
                onClick={() => setActiveBenefit(index)}
              >
                <span>{card.label.split(" ").join("\n")}</span>
                <div>
                  <small>Lợi ích - thi công</small>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pm-panel pm-services">
          <div className="pm-service-copy">
            <span>{String(activeService + 1).padStart(2, "0")}</span>
            <h2>{service.title}</h2>
            <h3>{service.short}</h3>
            <p>{service.desc}</p>
            <div className="pm-service-actions">
              <button type="button" onClick={() => setActiveService((activeService + services.length - 1) % services.length)}>Trước</button>
              <button type="button" onClick={() => setActiveService((activeService + 1) % services.length)}>Tiếp theo</button>
              <Link href={`/dich-vu/${service.slug}`}>Chi tiết</Link>
            </div>
          </div>
          <div className="pm-service-slider" data-free-scroll>
            {services.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                className={activeService === index ? "active" : ""}
                onClick={() => setActiveService(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.tag}
              </button>
            ))}
          </div>
          <div className="pm-service-image">
            <img src={service.img} alt={service.title} />
          </div>
        </section>

        <section className="pm-panel pm-colors">
          <div className="pm-color-copy">
            <p>Color me</p>
            <h2>Bảng màu sắc đa dạng</h2>
            <span>Chọn màu để đổi bảng phối và ảnh gợi ý như slider màu của site mẫu.</span>
          </div>
          <div className="pm-color-stage">
            <div className="pm-color-palette">
              {currentColor.palette.map((hex) => (
                <span key={hex} style={{ background: hex }} />
              ))}
            </div>
            <div className="pm-before-after">
              <img src={currentColor.image} alt={currentColor.name} />
              <div style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}>
                <img src={workImages[118]} alt="Trước khi phối màu" />
              </div>
              <input
                aria-label="So sánh trước sau"
                type="range"
                min="0"
                max="100"
                value={slider}
                onChange={(event) => setSlider(Number(event.target.value))}
              />
            </div>
          </div>
          <div className="pm-color-rail" data-free-scroll>
            {colorSets.map((color, index) => (
              <button
                key={color.name}
                type="button"
                className={activeColor === index ? "active" : ""}
                onClick={() => setActiveColor(index)}
              >
                <i style={{ background: color.hex }} />
                <strong>{color.name}</strong>
                <small>Màu sơn gợi ý</small>
              </button>
            ))}
          </div>
        </section>

        <section className="pm-panel pm-projects">
          <div className="pm-section-head">
            <p>Đào Duy Sơn</p>
            <h2>Những công trình tiêu biểu</h2>
          </div>
          <div className="pm-construction-wrapper" data-free-scroll>
            {visibleProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/cong-trinh/${project.slug}`}
                className="pm-construction-item"
                style={{ "--width": `${index % 3 === 0 ? 42 : index % 3 === 1 ? 30 : 28}%` } as CSSProperties}
              >
                <img src={project.img} alt={project.title} />
                <span>{project.title}</span>
                <small>{project.location}</small>
              </Link>
            ))}
          </div>
          <div className="pm-project-buttons">
            {projectCount < projects.length && (
              <button type="button" onClick={() => setProjectCount((count) => Math.min(projects.length, count + 6))}>
                Xem thêm công trình
              </button>
            )}
            {projectCount > 6 && (
              <button type="button" onClick={() => setProjectCount(6)}>
                Ẩn bớt công trình
              </button>
            )}
          </div>
        </section>

        <section className="pm-panel pm-blog">
          <div className="pm-section-head">
            <p>Cẩm nang</p>
            <h2>Báo giá và kinh nghiệm sơn</h2>
          </div>
          <div className="pm-blog-grid">
            {articles.slice(0, 4).map((article) => (
              <Link key={article.slug} href={`/tin-tuc/${article.slug}`}>
                <img src={article.img} alt={article.title} />
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="pm-panel pm-contact">
          <div className="pm-contact-card">
            <h2>Để lại thông tin để nhận tư vấn</h2>
            <p>Đội kỹ thuật gọi lại trong 30 phút và khảo sát miễn phí trong 24 giờ.</p>
            <form onSubmit={(event) => event.preventDefault()}>
              <input placeholder="Họ và tên" />
              <input placeholder="Số điện thoại" />
              <select defaultValue="">
                <option value="" disabled>Hạng mục cần thi công</option>
                {services.map((item) => (
                  <option key={item.slug}>{item.title}</option>
                ))}
              </select>
              <textarea placeholder="Địa chỉ, diện tích, thời gian mong muốn" />
              <button type="submit">Gửi yêu cầu khảo sát</button>
            </form>
          </div>
          <footer className="pm-footer">
            <div>
              <h3>Thi Công Sơn Nước Đào Duy Sơn</h3>
              <p>Hải Phòng - Quảng Ninh - Hà Nội - các tỉnh miền Bắc</p>
            </div>
            <a href="tel:0913742110">0913 742 110</a>
          </footer>
        </section>
      </main>

      <div className="pm-dots">
        {Array.from({ length: sectionCount }, (_, index) => (
          <button
            key={index}
            aria-label={`Tới section ${index + 1}`}
            className={activeSection === index ? "active" : ""}
            type="button"
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      <div className="pm-floating">
        <button type="button" onClick={() => setChatOpen((open) => !open)}>Chat</button>
        <a href="https://zalo.me/0913742110" target="_blank" rel="noreferrer">Zalo</a>
        <a href="tel:0913742110">Call</a>
        {chatOpen && (
          <div className="pm-chat">
            <strong>Tư vấn sơn bả ngay!</strong>
            <p>Chọn nhanh nhu cầu của anh để đội thợ gọi lại.</p>
            <button type="button">Báo giá sơn nhà</button>
            <button type="button">Khảo sát chống thấm</button>
            <button type="button">Xem công trình</button>
          </div>
        )}
      </div>
    </div>
  );
}
