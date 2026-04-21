import { pinImages } from "@/lib/images";

const projects = [
  { title: "Sơn biệt thự khu Thảo Điền – Q.2", tag: "Biệt thự", img: pinImages[16] },
  { title: "Sơn nhà phố 4 tầng đường Phạm Văn Đồng", tag: "Nhà phố", img: pinImages[17] },
  { title: "Sơn văn phòng công ty CNC – Q.7", tag: "Văn phòng", img: pinImages[18] },
  { title: "Sơn epoxy xưởng may Long An", tag: "Nhà xưởng", img: pinImages[19] },
  { title: "Chống thấm sân thượng Gò Vấp", tag: "Chống thấm", img: pinImages[20] },
  { title: "Sơn lại căn hộ Vinhomes Central Park", tag: "Căn hộ", img: pinImages[21] },
];

export function Projects() {
  return (
    <section id="cong-trinh" className="py-14 md:py-20 bg-white">
      <div className="container-x">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-orange)]">
            Công trình tiêu biểu
          </p>
          <h2 className="section-title mt-2 text-2xl md:text-3xl text-slate-800 uppercase">
            Một số công trình Đào Duy Sơn đã thi công
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <figure
              key={p.title}
              className="card-hover group relative overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                <div className="inline-block rounded-full bg-[color:var(--brand-orange)] px-2.5 py-0.5 text-xs font-bold uppercase">
                  {p.tag}
                </div>
                <div className="mt-2 text-lg font-bold leading-tight">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
