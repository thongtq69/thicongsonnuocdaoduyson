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
  title: "Thi Công Sơn Nước Đào Duy Sơn - Dịch vụ sơn nhà trọn gói chuyên nghiệp",
  description:
    "Nhận thi công sơn nước nhà ở, biệt thự, văn phòng, nhà xưởng trọn gói. Báo giá minh bạch, thợ lành nghề, bảo hành dài hạn. Hotline 0913 742 110.",
  keywords: [
    "thi công sơn nước",
    "sơn nhà",
    "Đào Duy Sơn",
    "sơn trọn gói",
    "sơn chống thấm",
    "sơn epoxy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${bvp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
