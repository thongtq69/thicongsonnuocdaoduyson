import { pinImages } from "./images";

export type Service = {
  slug: string;
  title: string;
  short: string;
  desc: string;
  img: string;
  tag: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "son-nha-dan-dung",
    title: "Sơn nhà dân dụng trọn gói",
    short: "Sơn nhà phố, nhà cấp 4, căn hộ chung cư.",
    desc:
      "Dịch vụ sơn nhà dân dụng trọn gói từ khảo sát, xử lý bề mặt đến hoàn thiện bàn giao. Phù hợp cho nhà mới xây cần hoàn thiện và nhà cũ cần làm lại sau 5–10 năm.",
    img: pinImages[0],
    tag: "Nhà ở",
    bullets: [
      "Sơn nội thất ít mùi, an toàn cho trẻ nhỏ",
      "Sơn ngoại thất chống tia UV, chống rong rêu",
      "2 lớp sơn phủ đúng định mức nhà sản xuất",
      "Bảo hành chính hãng 24 tháng",
    ],
  },
  {
    slug: "son-biet-thu",
    title: "Sơn biệt thự cao cấp",
    short: "Sơn biệt thự hiện đại, tân cổ điển.",
    desc:
      "Thi công sơn biệt thự với các dòng sơn cao cấp Dulux Weathershield, Jotun Jotashield, Mykolor Grand kết hợp sơn hiệu ứng nghệ thuật tạo nét sang trọng.",
    img: pinImages[1],
    tag: "Biệt thự",
    bullets: [
      "Sơn hiệu ứng bê tông, giả đá, marble, vân gỗ",
      "Sơn ngoại thất bóng mờ cao cấp",
      "Phối màu miễn phí bởi kiến trúc sư",
      "Thi công đội thợ chuyên biệt thự trên 10 năm",
    ],
  },
  {
    slug: "son-van-phong",
    title: "Sơn văn phòng, showroom",
    short: "Thi công không ảnh hưởng kinh doanh.",
    desc:
      "Sơn văn phòng, showroom, shop với lịch thi công ngoài giờ hành chính, cuối tuần. Dùng sơn ít mùi, nhanh khô, kháng khuẩn phù hợp môi trường làm việc.",
    img: pinImages[2],
    tag: "Văn phòng",
    bullets: [
      "Thi công ban đêm, cuối tuần theo yêu cầu",
      "Sơn kháng khuẩn, ít mùi Dulux EasyClean",
      "Che chắn đồ đạc, vệ sinh sạch sau thi công",
      "Xuất hóa đơn VAT đầy đủ",
    ],
  },
  {
    slug: "son-chong-tham",
    title: "Sơn chống thấm tường, mái",
    short: "Xử lý triệt để thấm dột 10 năm.",
    desc:
      "Dịch vụ chống thấm tường ngoài, sân thượng, nhà vệ sinh bằng các hệ chống thấm chuyên dụng Kova CT-11A, Sika, Neomax. Bảo hành 5–10 năm tùy hạng mục.",
    img: pinImages[3],
    tag: "Chống thấm",
    bullets: [
      "Xử lý nứt chân chim, nứt cấu trúc",
      "Lớp chống thấm phụ gia + lớp sơn ngoại thất",
      "Bảo hành thấm dột đến 10 năm",
      "Khảo sát miễn phí, báo giá theo m²",
    ],
  },
  {
    slug: "son-epoxy-nha-xuong",
    title: "Sơn epoxy nền nhà xưởng",
    short: "Sơn sàn chịu tải cho kho, xưởng.",
    desc:
      "Sơn epoxy tự phẳng hoặc epoxy lăn cho nền nhà xưởng, kho bãi, tầng hầm để xe, phòng sạch. Chịu tải trọng cao, dễ vệ sinh, chống dầu mỡ hóa chất.",
    img: pinImages[4],
    tag: "Epoxy",
    bullets: [
      "Epoxy tự phẳng độ dày 1–3mm",
      "Epoxy lăn cho diện tích lớn, kinh tế",
      "Kẻ vạch, đánh số lối đi theo chuẩn nhà máy",
      "Chịu tải xe nâng, hóa chất công nghiệp",
    ],
  },
  {
    slug: "son-chong-nong-mai-ton",
    title: "Sơn chống nóng mái tôn",
    short: "Giảm 10–15°C nhiệt độ mái.",
    desc:
      "Sơn phản nhiệt mái tôn Insumax, Kova giúp giảm nhiệt độ bề mặt mái xuống 10–15°C, tiết kiệm điện điều hòa và kéo dài tuổi thọ tôn lên 8–10 năm.",
    img: pinImages[5],
    tag: "Chống nóng",
    bullets: [
      "Sơn phản nhiệt 2 lớp, phủ toàn bộ mặt tôn",
      "Xử lý rỉ sét, sơn lót chống gỉ",
      "Giảm tiếng ồn mưa đá",
      "Phù hợp nhà ở, kho xưởng, trường học",
    ],
  },
  {
    slug: "son-hieu-ung-nghe-thuat",
    title: "Sơn hiệu ứng nghệ thuật",
    short: "Sơn giả đá, bê tông, nhũ vàng.",
    desc:
      "Thi công sơn hiệu ứng chuyên biệt cho tường phòng khách, phòng ngủ, lễ tân khách sạn: giả đá marble, giả bê tông trần, nhũ vàng, vân gỗ.",
    img: pinImages[6],
    tag: "Nghệ thuật",
    bullets: [
      "Hiệu ứng giả đá marble, travertine",
      "Bê tông trần phong cách tối giản",
      "Nhũ vàng, nhũ bạc cho điểm nhấn",
      "Thợ chuyên sơn hiệu ứng trên 5 năm",
    ],
  },
  {
    slug: "son-lai-nha-cu",
    title: "Sơn sửa lại nhà cũ",
    short: "Làm mới nhà cũ trong vài ngày.",
    desc:
      "Dịch vụ sơn lại nhà cũ bao gồm cạo lớp sơn bong tróc, xử lý ẩm mốc, trét lại bột bả và sơn 2 lớp hoàn thiện. Thi công nhanh, sạch, không ảnh hưởng sinh hoạt.",
    img: pinImages[7],
    tag: "Sơn lại",
    bullets: [
      "Che chắn đồ đạc trước thi công",
      "Xử lý bong tróc, ẩm mốc triệt để",
      "Phối màu miễn phí theo sở thích",
      "Dọn sạch công trình sau thi công",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  area: string;
  category: string;
  img: string;
  desc: string;
};

export const projects: Project[] = [
  {
    slug: "biet-thu-thao-dien",
    title: "Sơn biệt thự Thảo Điền",
    location: "Quận 2, TP.HCM",
    area: "420 m²",
    category: "Biệt thự",
    img: pinImages[16],
    desc: "Thi công trọn gói nội – ngoại thất biệt thự 3 tầng, sử dụng sơn Jotun Jotashield cho ngoại thất và Dulux Ambiance 5in1 cho nội thất.",
  },
  {
    slug: "nha-pho-pham-van-dong",
    title: "Sơn nhà phố 4 tầng Phạm Văn Đồng",
    location: "Gò Vấp, TP.HCM",
    area: "280 m²",
    category: "Nhà phố",
    img: pinImages[17],
    desc: "Sơn mới hoàn thiện nhà phố 4 tầng, hoàn thành trong 8 ngày. Bàn giao đúng hẹn để gia chủ kịp về nhà mới.",
  },
  {
    slug: "van-phong-cnc-q7",
    title: "Sơn văn phòng Công ty CNC",
    location: "Quận 7, TP.HCM",
    area: "650 m²",
    category: "Văn phòng",
    img: pinImages[18],
    desc: "Thi công ngoài giờ 3 đêm liên tục, không ảnh hưởng hoạt động công ty. Phối màu theo brand guideline của khách.",
  },
  {
    slug: "epoxy-xuong-may-long-an",
    title: "Sơn epoxy xưởng may Long An",
    location: "Bến Lức, Long An",
    area: "1.200 m²",
    category: "Nhà xưởng",
    img: pinImages[19],
    desc: "Thi công sơn epoxy tự phẳng cho nhà xưởng may mới xây, độ dày 2mm, chịu tải trọng xe nâng và máy may công nghiệp.",
  },
  {
    slug: "chong-tham-san-thuong-go-vap",
    title: "Chống thấm sân thượng Gò Vấp",
    location: "Gò Vấp, TP.HCM",
    area: "95 m²",
    category: "Chống thấm",
    img: pinImages[20],
    desc: "Xử lý triệt để thấm dột sân thượng bằng hệ Kova CT-11A 3 lớp kết hợp lưới thủy tinh gia cường. Bảo hành 7 năm.",
  },
  {
    slug: "can-ho-vinhomes-central-park",
    title: "Sơn căn hộ Vinhomes Central Park",
    location: "Bình Thạnh, TP.HCM",
    area: "105 m²",
    category: "Căn hộ",
    img: pinImages[21],
    desc: "Làm mới căn hộ 3 phòng ngủ, phối màu hiện đại tông trung tính. Thi công cuối tuần, bàn giao trong 3 ngày.",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  img: string;
  date: string;
  category: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "bao-gia-thi-cong-son-nuoc-2026",
    title: "Báo giá thi công sơn nước mới nhất 2026 tại TP.HCM",
    excerpt:
      "Tổng hợp đơn giá sơn nội – ngoại thất theo m², cách bóc tách vật tư, nhân công để chủ nhà dễ đối chiếu, kiểm soát chi phí.",
    img: pinImages[8],
    date: "15/04/2026",
    category: "Báo giá",
    content: [
      "Đơn giá thi công sơn nước hiện nay được tính theo m² hoàn thiện, bao gồm vật tư, nhân công và giàn giáo. Giá dao động từ 28.000 đ – 55.000 đ/m² tùy vào loại sơn và yêu cầu xử lý bề mặt.",
      "Đào Duy Sơn báo giá minh bạch theo từng hạng mục: bả matit, sơn lót, 2 lớp sơn phủ. Khách có thể yêu cầu báo giá riêng phần nhân công nếu đã có vật tư.",
      "Liên hệ hotline 0913 742 110 để nhận báo giá chi tiết và khảo sát miễn phí tại công trình.",
    ],
  },
  {
    slug: "quy-trinh-7-buoc-thi-cong-son-nuoc",
    title: "Quy trình 7 bước thi công sơn nước chuẩn nhà sản xuất",
    excerpt:
      "Từ vệ sinh, xử lý tường, trét bột bả, sơn lót đến 2 lớp sơn phủ – từng bước đều ảnh hưởng độ bền màu sơn.",
    img: pinImages[9],
    date: "10/04/2026",
    category: "Quy trình",
    content: [
      "Bước 1: Vệ sinh bề mặt tường, loại bỏ bụi bẩn, lớp sơn cũ bong tróc.",
      "Bước 2: Xử lý các vết nứt, trám vá bằng vữa chuyên dụng.",
      "Bước 3: Trét 2 lớp bột bả matit mỏng, chà nhám tạo phẳng.",
      "Bước 4: Lăn 1 lớp sơn lót kháng kiềm, tăng độ bám cho lớp phủ.",
      "Bước 5: Lăn lớp sơn phủ thứ nhất, để khô 2 giờ.",
      "Bước 6: Lăn lớp sơn phủ thứ hai đúng định mức nhà sản xuất.",
      "Bước 7: Kiểm tra, dặm vá điểm chưa đều, vệ sinh bàn giao.",
    ],
  },
  {
    slug: "so-sanh-dulux-jotun-nippon-mykolor",
    title: "So sánh sơn Dulux – Jotun – Nippon – Mykolor nên chọn loại nào?",
    excerpt:
      "Đánh giá khách quan độ phủ, độ bóng, khả năng lau chùi, chống nấm mốc để chọn đúng dòng sơn cho từng vị trí.",
    img: pinImages[10],
    date: "01/04/2026",
    category: "Tư vấn",
    content: [
      "Dulux: độ phủ tốt, màu đẹp, dòng EasyClean lau chùi cực dễ. Giá trung bình cao.",
      "Jotun: ngoại thất Jotashield bám màu 10 năm, độ bền vượt trội trong khí hậu biển.",
      "Nippon: giá hợp lý, dòng Odour-Less không mùi phù hợp phòng ngủ, phòng trẻ em.",
      "Mykolor: dòng Grand bóng gương cao cấp, màu sắc đa dạng, phù hợp biệt thự tân cổ điển.",
      "Tùy vị trí (nội hay ngoại thất) và ngân sách, Đào Duy Sơn sẽ tư vấn dòng sơn tối ưu nhất.",
    ],
  },
  {
    slug: "son-chong-tham-tuong-ngoai-10-nam",
    title: "Sơn chống thấm tường ngoài – giải pháp bền 10 năm",
    excerpt:
      "Kết hợp phụ gia chống thấm Kova CT-11A và lớp sơn ngoại thất chuyên dụng để xử lý triệt để thấm dột.",
    img: pinImages[11],
    date: "25/03/2026",
    category: "Chống thấm",
    content: [
      "Nguyên nhân thấm tường ngoài thường do co ngót, nứt chân chim và chất lượng sơn không đủ khả năng chống nước.",
      "Giải pháp Đào Duy Sơn áp dụng: trám trét triệt để các khe nứt, quét 2 lớp phụ gia chống thấm Kova CT-11A pha xi măng, phủ 2 lớp sơn ngoại thất Dulux Weathershield.",
      "Kết quả: tường khô ráo, không thấm ngược, bảo hành 7–10 năm kèm chính sách bảo trì định kỳ.",
    ],
  },
  {
    slug: "mau-son-ngoai-that-2026",
    title: "Top 10 màu sơn ngoại thất được yêu thích năm 2026",
    excerpt:
      "Xu hướng màu trung tính, be, xanh pastel kết hợp điểm nhấn đậm cho biệt thự hiện đại.",
    img: pinImages[12],
    date: "18/03/2026",
    category: "Xu hướng",
    content: [
      "Năm 2026, xu hướng màu sơn ngoại thất nghiêng về gam trung tính và tone đất ấm.",
      "Top màu được yêu thích: trắng kem, xám ximăng, be nâu, xanh rêu, xanh navy đậm cho điểm nhấn.",
      "Đào Duy Sơn hỗ trợ phối màu 3D miễn phí để khách hình dung trước khi thi công.",
    ],
  },
  {
    slug: "xu-ly-tuong-bong-troc-am-moc",
    title: "Cách xử lý tường bong tróc, ẩm mốc trước khi sơn lại",
    excerpt:
      "Các bước cạo lớp sơn cũ, xử lý nứt, chống kiềm – đảm bảo lớp sơn mới bám chắc, không rộp.",
    img: pinImages[14],
    date: "10/03/2026",
    category: "Cẩm nang",
    content: [
      "Tường bong tróc thường do sơn kém chất lượng hoặc không xử lý bề mặt trước khi sơn.",
      "Cách xử lý: cạo sạch hoàn toàn lớp sơn cũ, chà nhám đến bề mặt cứng, vệ sinh bụi, quét 1 lớp chống kiềm trước khi bả lại.",
      "Với tường ẩm mốc do thấm, cần xử lý nguồn thấm trước (mái, khe nứt) rồi mới sơn lại.",
    ],
  },
];
