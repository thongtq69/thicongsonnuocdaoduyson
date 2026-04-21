export function Footer() {
  return (
    <footer className="bg-[#0b2a19] text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-[color:var(--brand-green)] grid place-items-center font-extrabold text-white">
              ĐS
            </div>
            <div>
              <div className="text-sm font-bold uppercase text-white">Thi công sơn nước</div>
              <div className="text-lg font-extrabold text-[color:var(--brand-orange)]">Đào Duy Sơn</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Đơn vị thi công sơn nước trọn gói cho nhà ở, biệt thự, văn phòng và nhà xưởng
            tại TP.HCM và các tỉnh lân cận. Bảo hành chính hãng 24 tháng.
          </p>
        </div>

        <div>
          <div className="text-sm font-bold uppercase text-white">Dịch vụ</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Sơn nhà ở, nhà phố</li>
            <li>Sơn biệt thự cao cấp</li>
            <li>Sơn chống thấm tường, mái</li>
            <li>Sơn epoxy nhà xưởng</li>
            <li>Sơn chống nóng mái tôn</li>
            <li>Sơn hiệu ứng nghệ thuật</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold uppercase text-white">Liên kết</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/gioi-thieu" className="hover:text-[color:var(--brand-orange)]">Giới thiệu</a></li>
            <li><a href="/dich-vu" className="hover:text-[color:var(--brand-orange)]">Dịch vụ</a></li>
            <li><a href="/cong-trinh" className="hover:text-[color:var(--brand-orange)]">Công trình</a></li>
            <li><a href="/tin-tuc" className="hover:text-[color:var(--brand-orange)]">Tin tức</a></li>
            <li><a href="/lien-he" className="hover:text-[color:var(--brand-orange)]">Liên hệ</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold uppercase text-white">Liên hệ</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              Hotline: <a href="tel:0913742110" className="font-bold text-[color:var(--brand-orange)]">0913 742 110</a>
            </li>
            <li>Email: lienhe@daoduyson.vn</li>
            <li>Khu vực: TP. HCM & lân cận</li>
            <li>Giờ làm việc: 7:30 – 19:00 (T2 – CN)</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-4 text-xs">
          <div>© {new Date().getFullYear()} Thi Công Sơn Nước Đào Duy Sơn. Mọi quyền được bảo lưu.</div>
          <div className="text-white/60">thicongsonnuocdaoduyson.com</div>
        </div>
      </div>
    </footer>
  );
}
