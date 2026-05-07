"use client";

import type { SyntheticEvent } from "react";
import { projects, services } from "@/lib/data";

const hotline = "0913742110";
const displayHotline = "0913 742 110";
const localHref = (path: string) => {
  if (path.startsWith("tel:") || path.startsWith("https://")) return path;
  return `${window.location.origin}${path}`;
};

const localImage = (src: string) => `${window.location.origin}${src}`;

const brandBadge =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#0b7a35"/>
      <stop offset="1" stop-color="#75c878"/>
    </linearGradient>
  </defs>
  <circle cx="70" cy="70" r="66" fill="url(#g)"/>
  <circle cx="70" cy="70" r="58" fill="none" stroke="#fff" stroke-width="4" opacity=".75"/>
  <text x="70" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="900" fill="#fff">ĐÀO</text>
  <text x="70" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="900" fill="#fff">DUY SƠN</text>
  <text x="70" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#fff">SƠN NƯỚC</text>
</svg>`);

const socialBadge = (label: string, background: string) =>
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
  <circle cx="48" cy="48" r="45" fill="${background}"/>
  <circle cx="48" cy="48" r="36" fill="none" stroke="#fff" stroke-width="4" opacity=".82"/>
  <text x="48" y="54" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#fff">${label}</text>
</svg>`);

const socialBadges = [
  socialBadge("MSG", "#6b5cff"),
  socialBadge("ZALO", "#0b8fff"),
  socialBadge("GOI", "#0a8a3d"),
];

const serviceSlides = [
  services[0],
  services[3],
  services[6],
  services[2],
];

const galleryProjects = projects.slice(0, 8);
const serviceTermIds = ["37", "38", "40", "64"];

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Công trình", href: "/cong-trinh" },
  { label: "Chống thấm", href: "/dich-vu/son-chong-tham" },
  { label: "Báo giá", href: "/tin-tuc/bao-gia-son-ba-2026" },
  { label: "Khu vực", href: "/gioi-thieu" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
];

export function PaintMoreSourceFrame() {
  const handleLoad = (event: SyntheticEvent<HTMLIFrameElement>) => {
    const frame = event.currentTarget;
    const doc = frame.contentDocument;
    if (!doc) return;

    const setText = (selector: string, value: string) => {
      const element = doc.querySelector<HTMLElement>(selector);
      if (element) element.textContent = value;
    };

    const setHtml = (selector: string, value: string) => {
      const element = doc.querySelector<HTMLElement>(selector);
      if (element) element.innerHTML = value;
    };

    const isAnchor = (element: Element | null): element is HTMLAnchorElement =>
      element?.tagName.toLowerCase() === "a";

    const isImage = (element: Element | null): element is HTMLImageElement =>
      element?.tagName.toLowerCase() === "img";

    const setLink = (element: Element | null, href: string) => {
      if (!isAnchor(element)) return;
      element.setAttribute("href", localHref(href));
      element.setAttribute("target", "_top");
      element.setAttribute("rel", "noopener");
    };

    const setImage = (element: Element | null, src: string, alt: string) => {
      if (!isImage(element)) return;
      element.setAttribute("src", src.startsWith("data:") ? src : localImage(src));
      element.setAttribute("alt", alt);
      element.removeAttribute("srcset");
      element.removeAttribute("data-src");
      element.removeAttribute("data-lazy-src");
      element.setAttribute("loading", "lazy");
    };

    const injectStyle = () => {
      if (doc.getElementById("dds-content-adapter-style")) return;
      const style = doc.createElement("style");
      style.id = "dds-content-adapter-style";
      style.textContent = `
        .dds-logo {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          min-width: 132px;
          min-height: 74px;
          color: #0a6f34;
          font-family: Montserrat, Arial, sans-serif;
          font-size: 27px;
          font-weight: 900;
          line-height: .86;
          letter-spacing: 0;
          text-transform: uppercase;
          text-decoration: none;
        }
        .dds-logo small {
          margin-top: 7px;
          color: #b07131;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .11em;
        }
        .dds-logo span:last-child { padding-left: 18px; }
        .elementor-location-header {
          position: relative !important;
          z-index: 9999 !important;
          isolation: isolate !important;
        }
        .header-pain-more,
        .header-pain-more.scrolled {
          background: rgba(255, 255, 255, .96) !important;
          box-shadow: 0 12px 34px rgba(23, 43, 31, .08) !important;
          backdrop-filter: blur(14px);
        }
        .header-pain-more > .e-con-inner {
          max-width: min(1320px, calc(100% - 64px)) !important;
          margin-left: auto !important;
          margin-right: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 24px !important;
        }
        .hn-logo {
          flex: 0 0 auto !important;
          width: auto !important;
          min-width: 132px !important;
        }
        .menu-header {
          flex: 1 1 auto !important;
          min-width: 0 !important;
          width: auto !important;
        }
        .menu-header .elementor-nav-menu--main {
          display: flex !important;
          justify-content: flex-end !important;
          overflow: visible !important;
        }
        #menu-1-e7ee534 {
          display: flex !important;
          align-items: center !important;
          justify-content: flex-end !important;
          gap: clamp(10px, 1.08vw, 20px) !important;
          width: 100% !important;
          margin: 0 !important;
          overflow: visible !important;
        }
        #menu-1-e7ee534 > .menu-item {
          flex: 0 0 auto !important;
          width: auto !important;
        }
        #menu-1-e7ee534 a.elementor-item {
          padding-left: 0 !important;
          padding-right: 0 !important;
          color: #303030 !important;
          font-size: clamp(13px, .95vw, 16px) !important;
          font-weight: 800 !important;
          letter-spacing: 0 !important;
          white-space: nowrap !important;
          text-shadow: 0 1px 0 rgba(255, 255, 255, .8) !important;
        }
        #menu-1-e7ee534 a.elementor-item:hover,
        #menu-1-e7ee534 a.elementor-item-active {
          color: #0a8a3d !important;
        }
        @media (max-width: 1320px) {
          .header-pain-more > .e-con-inner {
            max-width: calc(100% - 40px) !important;
            gap: 18px !important;
          }
          #menu-1-e7ee534 {
            gap: 14px !important;
          }
          #menu-1-e7ee534 a.elementor-item {
            font-size: 13px !important;
          }
        }
        .dds-fit-cover { object-fit: cover !important; width: 100% !important; height: 100% !important; }
        .dds-section3-photo {
          width: min(36vw, 460px) !important;
          height: min(36vw, 460px) !important;
          max-width: 460px !important;
          max-height: 460px !important;
          aspect-ratio: 1 / 1 !important;
          object-fit: cover !important;
          border-radius: 999px !important;
          box-shadow: 0 30px 80px rgba(23, 43, 31, .18) !important;
        }
        #binhSonDynamic.dds-service-photo {
          object-fit: cover !important;
          border-radius: 20px !important;
          box-shadow: 0 24px 60px rgba(23, 43, 31, .22) !important;
        }
        .dds-partner-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          min-height: 54px;
          padding: 0 18px;
          border: 1px solid rgba(10, 111, 52, .18);
          border-radius: 999px;
          color: #0a6f34;
          background: rgba(255, 255, 255, .9);
          font-family: Montserrat, Arial, sans-serif;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: .04em;
          text-transform: uppercase;
          box-shadow: 0 14px 30px rgba(23, 43, 31, .08);
        }
        .swiperGalleryImageColor img {
          object-fit: cover !important;
        }
        .construction-item img { object-fit: cover !important; }
        #pmb-toggle img { object-fit: cover !important; }
        @media (max-width: 576px) {
          .dds-logo { min-width: 95px; min-height: 55px; font-size: 19px; }
          .dds-logo small { font-size: 7px; margin-top: 5px; }
          .dds-logo span:last-child { padding-left: 12px; }
          .dds-section3-photo {
            width: 72vw !important;
            height: 72vw !important;
          }
        }
      `;
      doc.head.appendChild(style);
    };

    const patch = () => {
      injectStyle();

      const logoLinks = doc.querySelectorAll<HTMLAnchorElement>(".hn-logo a, .elementor-widget-theme-site-logo a");
      logoLinks.forEach((logo) => {
        logo.href = localHref("/");
        logo.target = "_top";
        logo.innerHTML = `<span class="dds-logo"><span>Đào Duy</span><span>Sơn</span><small>Sơn nước miền Bắc</small></span>`;
      });

      [
        "#menu-1-e7ee534 .menu-item",
        "#menu-2-e7ee534 .menu-item",
        "#menu-2-c882927 .menu-item",
      ].forEach((selector) => {
        doc.querySelectorAll(selector).forEach((item, index) => {
          const data = navItems[index % navItems.length];
          const anchor = item.querySelector("a");
          if (!anchor || !data) return;
          anchor.textContent = data.label;
          setLink(anchor, data.href);
        });
      });

      setText(".section2 .col2 .content > h3 .text-stroke", "SƠN");
      setText(".section2 .col2 .content > h3 .number", "2");
      setText(".section2 .col2 .content > h3 .text-fill", "Lớp");
      setHtml(".section2 .col2 .content > p", "Quy trình chuẩn <br>sơn bả trọn gói");
      setText(".section2 .col2 .content .btn1", "Nhận báo giá");
      setText(".section2 .col2 .content .btn2", "Gọi khảo sát");
      setLink(doc.querySelector(".section2 .col2 .content .btn1"), "/lien-he");
      setLink(doc.querySelector(".section2 .col2 .content .btn2"), `tel:${hotline}`);

      setText(".section2 .column-center .subtitle", "Thi công sơn bả cho mọi bề mặt");
      setText(".section2 .column-center .title .text-up", "Đào");
      setText(".section2 .column-center .title .text-bg", "Duy");
      setText(".section2 .column-center .title .text-down", "Sơn");
      setText(
        ".section2 .column-center .desc",
        "Khảo sát miễn phí, báo giá minh bạch, thi công sạch và bảo hành rõ ràng tại Hải Phòng & miền Bắc",
      );
      setText(".section2 .column-center .btn", "Liên hệ để được tư vấn");
      setLink(doc.querySelector(".section2 .column-center .btn"), "/lien-he");

      setText(".section2 .cong-nghe-3h-heading .text-cong-nghe", "Quy trình");
      setText(".section2 .cong-nghe-3h-heading .text-3h", "3K");
      ["BỀ MẶT", "VẬT TƯ", "TIẾN ĐỘ"].forEach((label, index) => {
        setText(`.section2 .hn__cn-3h:nth-child(${index + 1}) > div:first-child`, label);
      });
      const techTitles = ["Khảo sát bề mặt", "Vật tư đúng hệ", "Kiểm tra bàn giao"];
      const techDesc = [
        "Đo ẩm, xử lý nứt, bong tróc và kiềm hóa trước khi sơn để bề mặt bền lâu.",
        "Tư vấn Dulux, Jotun, Mykolor, Kova theo ngân sách và điều kiện công trình.",
        "Chia ca thi công rõ tiến độ, nghiệm thu từng lớp và vệ sinh sạch khi bàn giao.",
      ];
      doc.querySelectorAll<HTMLElement>(".section2 .hn__progress-card-title").forEach((title, index) => {
        title.textContent = techTitles[index % techTitles.length];
      });
      doc.querySelectorAll<HTMLElement>(".section2 .hn__progress-card-subtitle").forEach((subtitle) => {
        subtitle.textContent = "ĐÀO DUY SƠN";
      });
      doc.querySelectorAll<HTMLElement>(".section2 .hn__progress-card-item").forEach((item, index) => {
        item.textContent = techDesc[index % techDesc.length];
      });

      setText(".section3 .group-title h2", "Từ quy trình thi công chuẩn");
      setText(".section3 .group-title p", "giữ công trình bền đẹp lâu dài");
      const benefitTitles = ["Chất lượng", "Chi phí", "Tiến độ"];
      const benefitCircle = ["Chất\nlượng", "Chi\nphí", "TIẾN ĐỘ\nRÕ RÀNG"];
      const benefitDesc = [
        "Bề mặt được xử lý kỹ, sơn lót và sơn phủ đúng định mức theo khuyến nghị nhà sản xuất.",
        "Báo giá theo m² minh bạch, tách rõ vật tư và nhân công để chủ nhà dễ kiểm soát.",
        "Lên lịch từng ngày, che chắn gọn, thi công sạch và bàn giao đúng hẹn.",
      ];
      doc.querySelectorAll<HTMLElement>(".section3 .hn__progress-circle-title").forEach((item, index) => {
        item.textContent = benefitCircle[index % benefitCircle.length];
      });
      doc.querySelectorAll<HTMLElement>(".section3 .hn__progress-card-title").forEach((item, index) => {
        item.textContent = benefitTitles[index % benefitTitles.length];
      });
      doc.querySelectorAll<HTMLElement>(".section3 .hn__progress-card-subtitle").forEach((item) => {
        item.textContent = "LỢI ÍCH THI CÔNG";
      });
      doc.querySelectorAll<HTMLElement>(".section3 .hn__progress-card-item").forEach((item, index) => {
        item.textContent = benefitDesc[index % benefitDesc.length];
      });
      setText(".section3 .group-button p", "Khám phá dịch vụ");
      const section3Image = doc.querySelector(".section3 .group-body > img.tam-giac:not(.hn-gb)");
      setImage(section3Image, projects[1].img, "Thi công sơn bả nhà phố");
      section3Image?.classList.add("dds-section3-photo");

      doc.querySelectorAll<HTMLElement>(".section4 .swiper-content .swiper-slide").forEach((slide, index) => {
        const service = serviceSlides[index % serviceSlides.length];
        setTextFrom(slide, ".title", service.title);
        setTextFrom(slide, ".subtitle", service.short);
        setTextFrom(slide, ".desc", service.desc);
        setTextFrom(slide, ".btn-buy span", "Xem dịch vụ");
        setTextFrom(slide, ".btn-view", "Nhận báo giá");
        slide.querySelectorAll("a").forEach((anchor) => setLink(anchor, `/dich-vu/${service.slug}`));
      });
      doc.querySelectorAll(".section4 .swiper-image .swiper-slide img").forEach((image, index) => {
        const service = serviceSlides[index % serviceSlides.length];
        setImage(image, service.img, service.title);
        image.classList.add("dds-fit-cover");
      });
      const servicePhoto = doc.getElementById("binhSonDynamic");
      const servicePhotoMap = Object.fromEntries(
        serviceTermIds.map((termId, index) => [termId, localImage(serviceSlides[index % serviceSlides.length].img)]),
      );
      setImage(servicePhoto, serviceSlides[0].img, serviceSlides[0].title);
      servicePhoto?.setAttribute("data-map", JSON.stringify(servicePhotoMap));
      servicePhoto?.classList.add("dds-service-photo");

      setText(".section5 .table-color-container .group-title h2", "Bảng màu & vật tư");
      setText(".section5 .table-color-container .group-title p", "tư vấn theo hiện trạng công trình");
      setText(
        ".section5 .table-color-container .desc p",
        "Chọn tông màu, hệ sơn lót - phủ và vật tư theo bề mặt thực tế để công trình lên màu đẹp, bền và dễ bảo trì.",
      );
      setText(".section5 .construction-container .group-title h2", "Công trình đã thi công");
      setText(".section5 .construction-container .group-title p", "Hải Phòng, Quảng Ninh, Hà Nội và miền Bắc");
      const colorNames = ["Cam đất", "Cam sáng", "Vàng kem", "Vàng ấm", "Xanh rêu", "Xanh ngọc", "Xanh biển", "Xanh đậm"];
      doc.querySelectorAll<HTMLElement>(".color-item .color-content h3").forEach((item, index) => {
        item.textContent = colorNames[index % colorNames.length];
      });
      doc.querySelectorAll<HTMLElement>(".color-item .color-content p").forEach((item, index) => {
        item.textContent = index % 2 === 0 ? "Gợi ý cho mặt tiền" : "Gợi ý cho nội thất";
      });
      const gallery = doc.getElementById("swiperGalleryImageColor");
      if (gallery) {
        gallery.replaceChildren(
          ...galleryProjects.map((project) => {
            const slide = doc.createElement("div");
            slide.className = "swiper-slide";
            const image = doc.createElement("img");
            setImage(image, project.img, project.title);
            slide.appendChild(image);
            return slide;
          }),
        );
        const swiperHost = gallery.closest<HTMLElement>(".swiperHinhAnhMauSac");
        const swiper = swiperHost as (HTMLElement & { swiper?: { update?: () => void } }) | null;
        swiper?.swiper?.update?.();
      }
      const partnerLabels = ["Dulux", "Jotun", "Kova", "Mykolor", "Nippon"];
      doc.querySelectorAll<HTMLElement>(".swiper-logo .swiper-slide").forEach((slide, index) => {
        slide.innerHTML = `<span class="dds-partner-logo">${partnerLabels[index % partnerLabels.length]}</span>`;
      });

      doc.querySelectorAll<HTMLElement>(".construction-item").forEach((item, index) => {
        const project = projects[index % projects.length];
        const anchor = item.querySelector("a");
        const image = item.querySelector("img");
        setLink(anchor, `/cong-trinh/${project.slug}`);
        if (isAnchor(anchor)) anchor.title = project.title;
        setImage(image, project.img, project.title);
        setTextFrom(item, ".construction-info h3", project.title);
        setTextFrom(item, ".construction-info p span", project.location);
      });

      setText(".elementor-60 .elementor-element-dd86467 h2", "THI CÔNG SƠN NƯỚC ĐÀO DUY SƠN");
      const footerContact = [
        "Trụ sở: TP. Hải Phòng",
        "Phục vụ: Hải Phòng – Quảng Ninh – Hà Nội",
        "Nhận công trình: Hưng Yên, Bắc Ninh, Hà Nam, Ninh Bình",
        "Khu công nghiệp: Đại An – VSIP – Tràng Duệ",
        displayHotline,
      ];
      doc.querySelectorAll<HTMLElement>(".elementor-60 .elementor-element-e852f15 .elementor-icon-list-text").forEach((item, index) => {
        if (index < footerContact.length) item.textContent = footerContact[index];
      });
      doc.querySelectorAll<HTMLAnchorElement>(".elementor-60 .elementor-element-e852f15 a").forEach((anchor) => setLink(anchor, `tel:${hotline}`));

      setText(".elementor-60 .elementor-element-c3a38d5 h2", "Dịch vụ nổi bật");
      ["Sơn bả trọn gói", "Sơn chống thấm", "Sơn epoxy nhà xưởng", "Thi công thạch cao"].forEach((text, index) => {
        const item = doc.querySelectorAll<HTMLElement>(".elementor-60 .elementor-element-baf64a2 .elementor-icon-list-text")[index];
        if (item) item.textContent = text;
      });
      setText(".elementor-60 .elementor-element-73d6043 h2", "Khu vực");
      ["Hải Phòng", "Quảng Ninh", "Hà Nội", "Các tỉnh miền Bắc"].forEach((text, index) => {
        const item = doc.querySelectorAll<HTMLElement>(".elementor-60 .elementor-element-f744513 .elementor-icon-list-text")[index];
        if (item) item.textContent = text;
      });
      setText(".elementor-60 .elementor-element-50230c4 h2", "Để lại thông tin để nhận báo giá");
      setHtml(
        ".elementor-60 .elementor-element-031b0c3 p",
        `Hoặc gọi hotline <strong>${displayHotline}</strong> để được tư vấn khảo sát miễn phí.`,
      );
      setHtml(
        ".elementor-60 .elementor-element-18f67e4 p",
        `Copyright © 2026. <strong>THI CÔNG SƠN NƯỚC ĐÀO DUY SƠN</strong>.`,
      );

      doc.querySelectorAll<HTMLAnchorElement>(".pmb-social-container a").forEach((anchor, index) => {
        const href = index === 1 ? `https://zalo.me/${hotline}` : index === 2 ? `tel:${hotline}` : `tel:${hotline}`;
        setLink(anchor, href);
      });
      doc.querySelectorAll(".pmb-social-container img").forEach((image, index) => {
        setImage(image, socialBadges[index] ?? brandBadge, ["Messenger", "Zalo", "Hotline"][index] ?? "Đào Duy Sơn");
      });
      setImage(doc.querySelector("#pmb-lightbox-img"), brandBadge, "Xem ảnh Đào Duy Sơn");
      setHtml("#pmb-popup", `👋 Tư vấn <b>sơn bả</b> ngay!<span class="pmb-close-popup" onclick="closePopup()">×</span>`);
      setImage(doc.querySelector("#pmb-toggle img"), brandBadge, "Đào Duy Sơn");
      setText(".pmb-header-info", "Đào Duy Sơn AI (Tư vấn)");
      ["Báo giá sơn bả", "Khảo sát miễn phí", "Chống thấm", "Gọi thợ ngay"].forEach((text, index) => {
        const chip = doc.querySelectorAll<HTMLElement>(".pmb-chip")[index];
        if (chip) chip.textContent = text;
      });
    };

    const setTextFrom = (root: Element, selector: string, value: string) => {
      const element = root.querySelector<HTMLElement>(selector);
      if (element) element.textContent = value;
    };

    patch();
    window.setTimeout(patch, 700);
    window.setTimeout(patch, 1800);
    window.setTimeout(patch, 3500);
  };

  return (
    <main className="paintmore-source-frame">
      <iframe
        title="Paint and More visual source"
        src="/paintmore-source.html"
        onLoad={handleLoad}
      />
    </main>
  );
}
