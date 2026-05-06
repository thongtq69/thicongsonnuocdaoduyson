export function Footer() {
  return (
    <footer className="bg-[#121212] text-white/75">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-brand grid place-items-center font-extrabold text-white shadow-md shadow-red-900/30">
              ĐS
            </div>
            <div>
              <div className="text-sm font-bold uppercase text-white">Thi công sơn nước</div>
              <div className="text-lg font-extrabold text-[color:var(--brand-gold)]">Đào Duy Sơn</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Đơn vị thi công sơn bả trọn gói tại Hải Phòng, Quảng Ninh, Hà Nội, Hưng Yên,
            Bắc Ninh, Hà Nam, Ninh Bình, Hòa Bình. Bảo hành chính hãng 24 tháng,
            khảo sát miễn phí trong 24 giờ.
          </p>
        </div>

        <div>
          <div className="text-sm font-bold uppercase text-white">Dịch vụ</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Sơn bả trọn gói nhà ở, biệt thự</li>
            <li>Thi công thạch cao Hải Phòng</li>
            <li>Sơn chống thấm tường, sân thượng</li>
            <li>Sơn chống nóng mái tôn</li>
            <li>Sơn vạch kẻ bãi đậu xe, nhà xưởng</li>
            <li>Sơn hiệu ứng – sơn gai – sơn gấm</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold uppercase text-white">Khu vực phục vụ</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Hải Phòng – Quảng Ninh (Hạ Long, Cửa Ông)</li>
            <li>Hà Nội – Hưng Yên – Bắc Ninh</li>
            <li>Hà Nam – Ninh Bình – Hòa Bình</li>
            <li>Khu công nghiệp Đại An &amp; lân cận</li>
            <li>
              <a href="/lien-he" className="hover:text-[color:var(--brand-gold)]">
                Xem bảng báo giá sơn bả →
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold uppercase text-white">Liên hệ</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              Hotline: <a href="tel:0913742110" className="font-bold text-[color:var(--brand-gold)]">0913 742 110</a>
            </li>
            <li>Email: lienhe@daoduyson.vn</li>
            <li>Trụ sở: TP. Hải Phòng</li>
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
