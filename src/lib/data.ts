import { serviceImages, projectImages, newsImages } from "./images";

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
    title: "Sơn bả trọn gói nhà dân dụng",
    short: "Sơn nhà phố, nhà cấp 4, nhà mái Thái tại Hải Phòng & lân cận.",
    desc:
      "Dịch vụ sơn bả trọn gói Hải Phòng – nhận thi công nhà phố, nhà cấp 4, nhà mái Thái từ khâu xử lý bề mặt, bả matit, sơn lót đến 2 lớp sơn phủ. Khảo sát miễn phí, báo giá theo m² minh bạch.",
    img: serviceImages["son-nha-dan-dung"],
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
    title: "Sơn biệt thự cao cấp – tân cổ điển",
    short: "Sơn biệt thự hiện đại, tân cổ điển tại Hải Phòng – Quảng Ninh.",
    desc:
      "Đội sơn bả Hải Phòng nhận thi công biệt thự với sơn cao cấp Dulux Weathershield, Jotun Jotashield, Mykolor Grand kết hợp phào chỉ thạch cao và sơn hiệu ứng nghệ thuật.",
    img: serviceImages["son-biet-thu"],
    tag: "Biệt thự",
    bullets: [
      "Sơn hiệu ứng giả đá marble, vân gỗ, bê tông trần",
      "Sơn ngoại thất bóng mờ cao cấp – chịu khí hậu biển",
      "Phối màu miễn phí, gửi phối cảnh 3D",
      "Đội thợ chuyên biệt thự trên 10 năm",
    ],
  },
  {
    slug: "son-thach-cao-tron-goi",
    title: "Thi công thạch cao tại Hải Phòng",
    short: "Trần thạch cao chìm, nổi, vách ngăn kết hợp sơn bả trọn gói.",
    desc:
      "Nhận thi công trần thạch cao chìm – nổi, vách ngăn, phào chỉ thạch cao kết hợp gói sơn bả tại Hải Phòng, Quảng Ninh, Hà Nam. Tính giá theo m² hoàn thiện, không phát sinh.",
    img: serviceImages["son-thach-cao-tron-goi"],
    tag: "Thạch cao",
    bullets: [
      "Khung xương Vĩnh Tường, tấm Gyproc/Knauf",
      "Trần giật cấp, đèn hắt – kết hợp phối cảnh 3D",
      "Phào chỉ trang trí cho biệt thự tân cổ điển",
      "Liền mạch với gói sơn bả – một nhà thầu duy nhất",
    ],
  },
  {
    slug: "son-chong-tham",
    title: "Sơn chống thấm tường, sân thượng, mái tôn",
    short: "Xử lý triệt để thấm dột tường nhà, sân thượng, mái tôn.",
    desc:
      "Thi công sơn chống thấm tường nhà, chống thấm sân thượng, chống nóng mái tôn bằng hệ Kova CT-11A, Sika, Neomax. Bảo hành 5 – 10 năm tùy hạng mục.",
    img: serviceImages["son-chong-tham"],
    tag: "Chống thấm",
    bullets: [
      "Xử lý nứt chân chim, nứt cấu trúc, khe hở giáp lai",
      "Lớp chống thấm phụ gia + lớp sơn ngoại thất",
      "Bảo hành thấm dột 5 – 10 năm",
      "Khảo sát miễn phí, báo giá theo m²",
    ],
  },
  {
    slug: "son-chong-nong-mai-ton",
    title: "Sơn chống nóng mái tôn",
    short: "Sơn phản nhiệt giảm 10–15°C cho mái tôn nhà ở, nhà xưởng.",
    desc:
      "Sơn chống nóng mái tôn Insumax, Kova giúp giảm nhiệt độ bề mặt mái 10–15°C, tiết kiệm điện điều hòa, kéo dài tuổi thọ tôn 8 – 10 năm.",
    img: serviceImages["son-chong-nong-mai-ton"],
    tag: "Chống nóng",
    bullets: [
      "Sơn phản nhiệt 2 lớp, phủ toàn bộ mặt tôn",
      "Xử lý rỉ sét, sơn lót chống gỉ",
      "Phù hợp nhà ở, kho xưởng, trường học",
      "Đi kèm bảo trì định kỳ hàng năm",
    ],
  },
  {
    slug: "son-vach-ke-bai-do-xe",
    title: "Sơn vạch kẻ bãi đậu xe, nhà xưởng",
    short: "Thi công sơn vạch kẻ theo yêu cầu cho hầm để xe, nhà xưởng.",
    desc:
      "Thi công sơn vạch kẻ đường, vạch kẻ bãi đậu xe, kẻ vạch nhà xưởng theo bản vẽ. Sử dụng sơn dầu chuyên dụng và sơn nhiệt dẻo bám dính cao, chịu mài mòn xe nâng.",
    img: serviceImages["son-vach-ke-bai-do-xe"],
    tag: "Vạch kẻ",
    bullets: [
      "Vạch kẻ ô đậu xe ô tô, xe máy, lối đi bộ",
      "Sơn ký hiệu, mũi tên chỉ hướng nhà xưởng",
      "Sơn dầu / sơn nhiệt dẻo / sơn epoxy theo nhu cầu",
      "Thi công ban đêm – không gián đoạn vận hành",
    ],
  },
  {
    slug: "son-epoxy-nha-xuong",
    title: "Sơn epoxy nền nhà xưởng",
    short: "Sơn sàn epoxy chịu tải cho nhà xưởng, hầm xe khu Đại An & lân cận.",
    desc:
      "Sơn epoxy tự phẳng hoặc epoxy lăn cho nền nhà xưởng, hầm để xe, phòng sạch tại các khu công nghiệp Đại An, Tràng Duệ, VSIP Hải Phòng. Chịu tải xe nâng, chống dầu mỡ, dễ vệ sinh.",
    img: serviceImages["son-epoxy-nha-xuong"],
    tag: "Epoxy",
    bullets: [
      "Epoxy tự phẳng độ dày 1 – 3 mm",
      "Epoxy lăn cho diện tích lớn, kinh tế",
      "Kẻ vạch, đánh số lối đi theo chuẩn nhà máy",
      "Chịu tải xe nâng, hóa chất công nghiệp",
    ],
  },
  {
    slug: "son-hieu-ung-nghe-thuat",
    title: "Sơn hiệu ứng – sơn gai – sơn gấm",
    short: "Sơn hiệu ứng, sơn gai, sơn gấm tạo điểm nhấn cao cấp.",
    desc:
      "Thi công sơn hiệu ứng nghệ thuật cho phòng khách, phòng ngủ, lễ tân khách sạn: sơn gai, sơn gấm, giả đá marble, giả bê tông trần, nhũ vàng, vân gỗ.",
    img: serviceImages["son-hieu-ung-nghe-thuat"],
    tag: "Nghệ thuật",
    bullets: [
      "Hiệu ứng giả đá marble, travertine",
      "Sơn gai, sơn gấm cho điểm nhấn sang trọng",
      "Bê tông trần phong cách tối giản",
      "Thợ chuyên sơn hiệu ứng trên 5 năm",
    ],
  },
  {
    slug: "son-lai-nha-cu",
    title: "Sửa chữa nhà – sơn lại nhà cũ trọn gói",
    short: "Làm mới nhà cũ chỉ trong vài ngày tại Hải Phòng và lân cận.",
    desc:
      "Dịch vụ sửa chữa nhà trọn gói: cạo lớp sơn bong tróc, xử lý ẩm mốc, trét lại bột bả và sơn 2 lớp hoàn thiện. Thi công nhanh, sạch, không ảnh hưởng sinh hoạt.",
    img: serviceImages["son-lai-nha-cu"],
    tag: "Sơn lại",
    bullets: [
      "Che chắn đồ đạc trước khi thi công",
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
    slug: "biet-thu-cat-ba-hai-phong",
    title: "Sơn biệt thự ven biển Cát Bà",
    location: "Cát Bà, Hải Phòng",
    area: "380 m²",
    category: "Biệt thự",
    img: projectImages[0],
    desc: "Thi công sơn bả trọn gói biệt thự 3 tầng ven biển – sử dụng Jotun Jotashield chống muối biển và Mykolor Grand cho nội thất tân cổ điển.",
  },
  {
    slug: "nha-pho-le-chan-hai-phong",
    title: "Sơn nhà phố 4 tầng Lê Chân",
    location: "Lê Chân, Hải Phòng",
    area: "260 m²",
    category: "Nhà phố",
    img: projectImages[1],
    desc: "Sơn mới hoàn thiện nhà phố 4 tầng tại Lê Chân, hoàn thành trong 9 ngày, bàn giao đúng hẹn để gia chủ kịp về nhà mới.",
  },
  {
    slug: "biet-thu-tan-co-dien-quang-ninh",
    title: "Biệt thự tân cổ điển Hạ Long",
    location: "Hạ Long, Quảng Ninh",
    area: "520 m²",
    category: "Biệt thự",
    img: projectImages[2],
    desc: "Thi công sơn bả trọn gói biệt thự tân cổ điển kết hợp phào chỉ thạch cao và sơn hiệu ứng nhũ vàng cho phòng khách, sảnh chính.",
  },
  {
    slug: "vach-ke-bai-do-xe-vsip",
    title: "Sơn vạch kẻ bãi đậu xe khu VSIP",
    location: "VSIP Hải Phòng",
    area: "2.400 m²",
    category: "Vạch kẻ",
    img: projectImages[3],
    desc: "Sơn vạch kẻ ô đỗ xe, mũi tên chỉ hướng và lối thoát hiểm cho hầm để xe khu công nghiệp VSIP, thi công ban đêm liên tục 4 ca.",
  },
  {
    slug: "thach-cao-can-ho-bach-dang",
    title: "Trần thạch cao + sơn căn hộ Bạch Đằng",
    location: "Hồng Bàng, Hải Phòng",
    area: "115 m²",
    category: "Căn hộ",
    img: projectImages[4],
    desc: "Thi công trần thạch cao chìm giật cấp, đèn hắt led và sơn bả hoàn thiện cho căn hộ 3 phòng ngủ – bàn giao trong 7 ngày.",
  },
  {
    slug: "son-nha-tron-goi-hung-yen",
    title: "Sơn nhà trọn gói Hưng Yên",
    location: "TP. Hưng Yên",
    area: "310 m²",
    category: "Nhà phố",
    img: projectImages[5],
    desc: "Sơn nhà trọn gói cho gia chủ tại Hưng Yên, kết hợp chống thấm tường ngoài và sơn chống nóng mái tôn sân thượng.",
  },
  {
    slug: "son-bet-thu-bac-ninh",
    title: "Sơn biệt thự trọn gói Bắc Ninh",
    location: "TP. Bắc Ninh",
    area: "440 m²",
    category: "Biệt thự",
    img: projectImages[6],
    desc: "Thi công sơn bả trọn gói biệt thự 2 tầng kèm cổng – tường rào tại Bắc Ninh, sử dụng tông trắng kem và đỏ sạm đậm điểm nhấn.",
  },
  {
    slug: "son-nha-xuong-dai-an",
    title: "Sơn nhà xưởng KCN Đại An",
    location: "Đại An, Hải Dương",
    area: "1.800 m²",
    category: "Nhà xưởng",
    img: projectImages[7],
    desc: "Thi công sơn bả tường nhà xưởng + sơn epoxy nền + sơn vạch kẻ tại KCN Đại An, hoàn thành trong 14 ngày không gián đoạn sản xuất.",
  },
  {
    slug: "chong-tham-san-thuong-ha-long",
    title: "Chống thấm sân thượng nhà ống Hạ Long",
    location: "Hạ Long, Quảng Ninh",
    area: "85 m²",
    category: "Chống thấm",
    img: projectImages[8],
    desc: "Xử lý thấm dột sân thượng bằng hệ Kova CT-11A 3 lớp + lưới thủy tinh gia cường. Bảo hành 7 năm tại Hạ Long, Quảng Ninh.",
  },
  {
    slug: "son-hieu-ung-cua-ong",
    title: "Sơn hiệu ứng nhà phố Cửa Ông",
    location: "Cửa Ông, Quảng Ninh",
    area: "180 m²",
    category: "Sơn hiệu ứng",
    img: projectImages[9],
    desc: "Sơn hiệu ứng bê tông trần kết hợp sơn gai cho phòng khách và phòng ngủ, tông trầm hiện đại, tạo điểm nhấn cao cấp.",
  },
  {
    slug: "son-bet-thu-ninh-binh",
    title: "Sơn biệt thự Ninh Bình",
    location: "TP. Ninh Bình",
    area: "360 m²",
    category: "Biệt thự",
    img: projectImages[10],
    desc: "Thi công sơn bả trọn gói biệt thự kèm tường rào, sơn ngoại thất chống rêu mốc khí hậu Bắc Bộ, hoàn thiện trong 12 ngày.",
  },
  {
    slug: "son-nha-tron-goi-hoa-binh",
    title: "Sơn nhà trọn gói Hòa Bình",
    location: "TP. Hòa Bình",
    area: "240 m²",
    category: "Nhà phố",
    img: projectImages[11],
    desc: "Sơn nhà trọn gói cho gia chủ tại Hòa Bình – sử dụng sơn Mykolor Touch ngoại thất, Dulux EasyClean nội thất, bảo hành 24 tháng.",
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
    slug: "bao-gia-son-ba-2026",
    title: "Bảng báo giá sơn bả trọn gói 2026 tại Hải Phòng & miền Bắc",
    excerpt:
      "Tổng hợp đơn giá sơn bả nội – ngoại thất theo m² tại Hải Phòng, Quảng Ninh, Hà Nội. Bóc tách rõ vật tư, nhân công để chủ nhà dễ kiểm soát.",
    img: newsImages[0],
    date: "15/04/2026",
    category: "Báo giá",
    content: [
      "Đơn giá thi công sơn bả trọn gói tại Hải Phòng năm 2026 dao động 28.000 đ – 65.000 đ/m² hoàn thiện, tùy dòng sơn (Dulux, Jotun, Mykolor, Nippon) và mức độ xử lý bề mặt.",
      "Đào Duy Sơn báo giá minh bạch theo từng hạng mục: bả 2 lớp matit, sơn lót kháng kiềm, 2 lớp sơn phủ. Khách có thể yêu cầu báo giá riêng phần nhân công nếu đã có vật tư.",
      "Liên hệ hotline 0913 742 110 để nhận bảng báo giá sơn bả mới nhất và đặt lịch khảo sát miễn phí trong 24 giờ.",
    ],
  },
  {
    slug: "quy-trinh-7-buoc-son-ba",
    title: "Quy trình 7 bước thi công sơn bả chuẩn nhà sản xuất",
    excerpt:
      "Từ vệ sinh, xử lý tường, trét bột bả, sơn lót đến 2 lớp sơn phủ – từng bước đều ảnh hưởng độ bền màu sơn của ngôi nhà.",
    img: newsImages[1],
    date: "10/04/2026",
    category: "Quy trình",
    content: [
      "Bước 1: Vệ sinh bề mặt tường, loại bỏ bụi bẩn, lớp sơn cũ bong tróc.",
      "Bước 2: Xử lý vết nứt, trám vá bằng vữa chuyên dụng.",
      "Bước 3: Trét 2 lớp bột bả matit mỏng, chà nhám tạo phẳng.",
      "Bước 4: Lăn 1 lớp sơn lót kháng kiềm, tăng độ bám cho lớp phủ.",
      "Bước 5: Lăn lớp sơn phủ thứ nhất, để khô 2 giờ.",
      "Bước 6: Lăn lớp sơn phủ thứ hai đúng định mức nhà sản xuất.",
      "Bước 7: Kiểm tra, dặm vá điểm chưa đều, vệ sinh bàn giao.",
    ],
  },
  {
    slug: "son-chong-tham-tuong-nha-10-nam",
    title: "Sơn chống thấm tường nhà – giải pháp bền 10 năm",
    excerpt:
      "Kết hợp phụ gia chống thấm Kova CT-11A và lớp sơn ngoại thất chuyên dụng để xử lý triệt để thấm dột tường nhà ngoài Bắc.",
    img: newsImages[2],
    date: "01/04/2026",
    category: "Chống thấm",
    content: [
      "Nguyên nhân thấm tường ngoài thường do co ngót, nứt chân chim và chất lượng sơn không đủ khả năng chống nước, đặc biệt ở miền Bắc nhiều mưa nồm.",
      "Giải pháp Đào Duy Sơn áp dụng: trám trét triệt để khe nứt, quét 2 lớp phụ gia chống thấm Kova CT-11A pha xi măng, phủ 2 lớp sơn ngoại thất Dulux Weathershield.",
      "Kết quả: tường khô ráo, không thấm ngược, bảo hành 7 – 10 năm kèm chính sách bảo trì định kỳ.",
    ],
  },
  {
    slug: "son-chong-nong-mai-ton-mien-bac",
    title: "Sơn chống nóng mái tôn cho nhà ở miền Bắc",
    excerpt:
      "Mùa hè ngoài Bắc kéo dài hơn 4 tháng – sơn phản nhiệt mái tôn giúp giảm 10 – 15°C, tiết kiệm điện điều hòa đáng kể.",
    img: newsImages[3],
    date: "25/03/2026",
    category: "Chống nóng",
    content: [
      "Mái tôn hấp nhiệt khiến tầng áp mái nóng hơn 5 – 10°C so với mặt đường. Sơn phản nhiệt Insumax, Kova là giải pháp đơn giản – tiết kiệm để hạ nhiệt.",
      "Quy trình: vệ sinh mái, xử lý rỉ sét, sơn lót chống gỉ, phủ 2 lớp sơn phản nhiệt màu sáng để tối đa hóa khả năng phản xạ ánh sáng.",
      "Đào Duy Sơn nhận thi công sơn chống nóng mái tôn tại Hải Phòng, Quảng Ninh, Hưng Yên và các khu công nghiệp lân cận.",
    ],
  },
  {
    slug: "son-vach-ke-theo-yeu-cau",
    title: "Thi công sơn vạch kẻ theo yêu cầu – bãi đậu xe, nhà xưởng",
    excerpt:
      "Vạch kẻ rõ ràng, đúng tiêu chuẩn giúp tổ chức giao thông trong nhà xưởng và bãi đậu xe an toàn, chuyên nghiệp hơn.",
    img: newsImages[4],
    date: "18/03/2026",
    category: "Vạch kẻ",
    content: [
      "Sơn vạch kẻ phổ biến gồm: sơn dầu (cho công trình ngoài trời tải nhẹ), sơn nhiệt dẻo (đường giao thông) và sơn epoxy (nền nhà xưởng, hầm xe).",
      "Đào Duy Sơn thi công sơn vạch kẻ ô đậu xe, mũi tên chỉ hướng, ký hiệu lối thoát hiểm – nhận làm theo bản vẽ kỹ thuật của chủ đầu tư.",
      "Cam kết thi công ban đêm – cuối tuần để không gián đoạn vận hành nhà xưởng, bàn giao đúng tiến độ.",
    ],
  },
  {
    slug: "son-hieu-ung-son-gai-son-gam",
    title: "Sơn hiệu ứng – sơn gai – sơn gấm: chọn hiệu ứng nào cho phòng khách?",
    excerpt:
      "So sánh sơn gai, sơn gấm, sơn giả đá, giả bê tông để chọn đúng phong cách cho phòng khách biệt thự, căn hộ.",
    img: newsImages[5],
    date: "10/03/2026",
    category: "Hiệu ứng",
    content: [
      "Sơn gai có bề mặt nhám, tạo cảm giác mạnh mẽ – phù hợp tường nhấn phòng khách hoặc tiền sảnh khách sạn.",
      "Sơn gấm bề mặt mịn ánh kim, sang trọng – thường dùng cho phòng ngủ master, phòng VIP.",
      "Sơn giả đá marble, giả bê tông trần phù hợp phong cách hiện đại tối giản. Đào Duy Sơn nhận tư vấn và phối cảnh trước khi thi công.",
    ],
  },
];

export type ServiceArea = {
  name: string;
  slug: string;
  highlight: string;
};

export const serviceAreas: ServiceArea[] = [
  { name: "Hải Phòng", slug: "hai-phong", highlight: "Trụ sở – nhận làm trong ngày" },
  { name: "Quảng Ninh (Hạ Long, Cửa Ông)", slug: "quang-ninh", highlight: "Nhà phố biển – chống muối biển" },
  { name: "Hà Nội", slug: "ha-noi", highlight: "Nhà phố – căn hộ chung cư" },
  { name: "Hưng Yên", slug: "hung-yen", highlight: "Nhà trọn gói khu Phố Nối" },
  { name: "Bắc Ninh", slug: "bac-ninh", highlight: "Biệt thự + nhà xưởng KCN" },
  { name: "Hà Nam", slug: "ha-nam", highlight: "Sơn bả trọn gói nhà ở" },
  { name: "Ninh Bình", slug: "ninh-binh", highlight: "Biệt thự + chống thấm" },
  { name: "Hòa Bình", slug: "hoa-binh", highlight: "Sơn nhà giá rẻ vùng cao" },
  { name: "KCN Đại An – VSIP – Tràng Duệ", slug: "kcn", highlight: "Sơn epoxy + vạch kẻ" },
];
