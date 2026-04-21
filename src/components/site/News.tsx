import { pinImages } from "@/lib/images";

const articles = [
  {
    title: "5 lưu ý khi sơn lại nhà cũ để bền màu 10 năm",
    desc: "Kinh nghiệm xử lý tường bong tróc, chọn sơn lót phù hợp và quy trình lăn sơn đúng chuẩn nhà sản xuất.",
    img: pinImages[8],
    date: "15/04/2026",
  },
  {
    title: "Đơn giá thi công sơn nước tại TP.HCM 2026",
    desc: "Cập nhật mức giá mới nhất theo m² cho từng hạng mục: sơn nội thất, ngoại thất, chống thấm, epoxy.",
    img: pinImages[9],
    date: "10/04/2026",
  },
  {
    title: "Cách phân biệt sơn chính hãng và sơn nhái ngoài thị trường",
    desc: "Kiểm tra tem nhãn, mã vạch, màu sơn pha chuẩn – tránh mua phải sơn kém chất lượng gây hỏng tường.",
    img: pinImages[10],
    date: "01/04/2026",
  },
  {
    title: "Top 10 màu sơn ngoại thất được yêu thích năm 2026",
    desc: "Xu hướng màu trung tính, be, xanh pastel kết hợp điểm nhấn đậm cho biệt thự hiện đại.",
    img: pinImages[11],
    date: "25/03/2026",
  },
];

export function News() {
  return (
    <section id="tin-tuc" className="py-14 md:py-20 bg-[color:var(--muted)]">
      <div className="container-x">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
            Tin mới thi công sơn nước
          </p>
          <h2 className="section-title mt-2 text-2xl md:text-3xl text-slate-800 uppercase">
            Tin tức & Cẩm nang sơn nhà
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <article
              key={a.title}
              className="card-hover overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <img src={a.img} alt={a.title} className="h-44 w-full object-cover" />
              <div className="p-4">
                <div className="text-xs font-semibold uppercase text-[color:var(--brand-orange)]">
                  {a.date}
                </div>
                <h3 className="mt-1 font-bold text-slate-800 leading-snug line-clamp-2">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {a.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
