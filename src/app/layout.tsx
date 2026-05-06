import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const bvp = Be_Vietnam_Pro({
  variable: "--font-sans-vn",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Thi Công Sơn Bả Đào Duy Sơn – Dịch vụ sơn bả trọn gói Hải Phòng & miền Bắc",
  description:
    "Đội sơn bả uy tín Hải Phòng – Đào Duy Sơn nhận thi công sơn bả trọn gói nhà ở, biệt thự, văn phòng, nhà xưởng tại Hải Phòng, Quảng Ninh (Hạ Long, Cửa Ông), Hà Nội, Hưng Yên, Bắc Ninh, Hà Nam, Ninh Bình, Hòa Bình. Sơn chống thấm, sơn vạch kẻ, sơn hiệu ứng, sơn gai, sơn gấm. Hotline 0913 742 110.",
  keywords: [
    "Sơn bả trọn gói Hải Phòng",
    "Dịch vụ sơn bả trọn gói Hải Phòng",
    "Sơn bả trọn gói Hà Nam",
    "Thi công sơn bả Quảng Ninh",
    "Dịch vụ sơn nhà đẹp",
    "Thi công thạch cao tại Hải Phòng",
    "Sơn nhà giá rẻ",
    "Thi công sơn bả Hà Nội",
    "Bảng báo giá sơn bả",
    "Thi công sơn chống thấm",
    "Sửa chữa nhà trọn gói",
    "Thi công sơn vạch kẻ theo yêu cầu",
    "Thi công sơn vạch kẻ bãi đậu xe",
    "Thi công sơn vạch kẻ nhà xưởng",
    "Thi công sơn nhà trọn gói Hưng Yên",
    "Thi công sơn dầu Hải Phòng",
    "Thi công sơn bả tại Đại An",
    "Thi công sơn bả",
    "Đội sơn bả Hải Phòng",
    "Dịch vụ sơn bả uy tín",
    "Chi phí sơn nhà",
    "Thi công sơn gai",
    "Thi công sơn gấm",
    "Sơn nhà chuyên nghiệp",
    "Thi công sơn bả Hạ Long",
    "Thi công sơn bả Ninh Bình",
    "Thi công sơn bả Hòa Bình",
    "Sơn bả trọn gói Bắc Ninh",
    "Thi công sơn chống thấm tường nhà",
    "Thi công sơn chống thấm sân thượng",
    "Thi công sơn chống nóng mái tôn",
    "Dịch vụ sơn nhà Hạ Long Quảng Ninh",
    "Dịch vụ sơn nhà Cửa Ông Quảng Ninh",
    "Sơn nhà giá rẻ Quảng Ninh",
    "Thi công sơn hiệu ứng",
    "Đào Duy Sơn",
  ],
  openGraph: {
    title: "Thi Công Sơn Bả Đào Duy Sơn – Hải Phòng & miền Bắc",
    description:
      "Dịch vụ sơn bả trọn gói tại Hải Phòng, Quảng Ninh, Hà Nội, Hưng Yên, Bắc Ninh, Ninh Bình. Sơn chống thấm, sơn vạch kẻ, thạch cao – báo giá minh bạch, bảo hành 24 tháng.",
    type: "website",
    locale: "vi_VN",
    siteName: "Thi Công Sơn Nước Đào Duy Sơn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${bvp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
