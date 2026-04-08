import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://longtech.vn"),
  title: {
    default: "ERP LONGTECH - Nền tảng ERP mã nguồn mở cho doanh nghiệp",
    template: "%s | ERP LONGTECH",
  },
  description:
    "Nền tảng ERP mã nguồn mở toàn diện cho doanh nghiệp. Kế thừa từ VietERP và được tùy biến bởi LONGTECH với các module HRM, CRM, MRP, Accounting, Ecommerce, TPM, OTB.",
  keywords: [
    "ERP",
    "open source",
    "Vietnam",
    "HRM",
    "CRM",
    "MRP",
    "Accounting",
    "quản lý doanh nghiệp",
    "phần mềm kế toán",
    "mã nguồn mở",
  ],
  authors: [{ name: "ERP LONGTECH Team" }],
  creator: "ERP LONGTECH",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    url: "https://longtech.vn",
    siteName: "ERP LONGTECH",
    title: "ERP LONGTECH - Nền tảng ERP mã nguồn mở cho doanh nghiệp",
    description:
      "14 modules ERP cho doanh nghiệp Việt Nam. Tuân thủ VAS, hoá đơn điện tử, BHXH. Mã nguồn mở, miễn phí.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body className="antialiased bg-bg">{children}</body>
    </html>
  );
}
