import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAD Kitchen | مطبخ زاد",
  description: "اطلب أشهى الوجبات من مطبخ زاد",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
