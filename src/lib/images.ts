const local = (n: number) => `/images/works/${String(n).padStart(3, "0")}.jpg`;

export const workImages = Array.from({ length: 220 }, (_, i) => local(i + 1));

export const heroImage = local(180);
export const heroImageAlt = local(70);
export const featuredImage = local(130);
export const pageBannerImage = local(200);

export const serviceImages = {
  "son-nha-dan-dung": local(155),
  "son-biet-thu": local(130),
  "son-van-phong": local(60),
  "son-chong-tham": local(70),
  "son-epoxy-nha-xuong": local(1),
  "son-chong-nong-mai-ton": local(45),
  "son-vach-ke-bai-do-xe": local(50),
  "son-hieu-ung-nghe-thuat": local(100),
  "son-lai-nha-cu": local(115),
  "son-thach-cao-tron-goi": local(125),
} as const;

export const projectImages = [
  local(180),
  local(72),
  local(135),
  local(50),
  local(60),
  local(150),
  local(95),
  local(200),
  local(85),
  local(28),
  local(120),
  local(160),
];

export const newsImages = [
  local(8),
  local(76),
  local(108),
  local(143),
  local(176),
  local(33),
];

export const aboutImages = [
  local(180),
  local(130),
  local(60),
  local(70),
  local(1),
  local(45),
  local(100),
  local(115),
];

// Backwards-compat alias for older imports
export const pinImages = workImages;
