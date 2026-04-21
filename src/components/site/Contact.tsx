"use client";

export function Contact() {
  return (
    <section id="lien-he" className="py-16 md:py-20 bg-[color:var(--brand-green)] text-white relative overflow-hidden">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10" />
      <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-[color:var(--brand-orange)]/20" />

      <div className="container-x relative grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
            Liên hệ báo giá
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
            Cần tư vấn thi công sơn nước? Gọi Đào Duy Sơn
          </h2>
          <p className="mt-4 text-white/90 max-w-lg">
            Để lại thông tin, đội kỹ thuật sẽ liên hệ và tới khảo sát miễn phí trong
            vòng 24 giờ. Ưu đãi giảm 5% cho khách đặt trong tuần này.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-[color:var(--brand-orange)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <div>
                <div className="text-sm uppercase text-white/70">Hotline 24/7</div>
                <a href="tel:0913742110" className="text-2xl font-extrabold hover:underline">
                  0913 742 110
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-[color:var(--brand-orange)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <div>
                <div className="text-sm uppercase text-white/70">Email</div>
                <div className="text-lg font-semibold">lienhe@daoduyson.vn</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-[color:var(--brand-orange)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
                </svg>
              </span>
              <div>
                <div className="text-sm uppercase text-white/70">Khu vực phục vụ</div>
                <div className="text-lg font-semibold">TP. Hồ Chí Minh & các tỉnh lân cận</div>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="rounded-2xl bg-white p-6 md:p-8 text-slate-800 shadow-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-xl font-extrabold text-[color:var(--brand-green-dark)]">
            Nhận báo giá miễn phí
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Điền thông tin, chúng tôi sẽ gọi lại trong 30 phút.
          </p>

          <div className="mt-5 grid gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-700">Họ và tên</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[color:var(--brand-green)]"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Số điện thoại</label>
              <input
                type="tel"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[color:var(--brand-green)]"
                placeholder="09xx xxx xxx"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Hạng mục cần sơn</label>
              <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[color:var(--brand-green)]">
                <option>Sơn nhà mới xây</option>
                <option>Sơn sửa lại nhà cũ</option>
                <option>Sơn biệt thự</option>
                <option>Sơn văn phòng</option>
                <option>Sơn chống thấm</option>
                <option>Sơn epoxy nhà xưởng</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Ghi chú</label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-[color:var(--brand-green)]"
                placeholder="Diện tích, địa chỉ công trình, thời gian mong muốn..."
              />
            </div>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full justify-center">
            Gửi yêu cầu khảo sát
          </button>
        </form>
      </div>
    </section>
  );
}
