import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "포챔스 파티 빌더",
  description: "Pokémon Champions 싱글 파티의 배치·선출·타입을 비교하는 실험실",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
