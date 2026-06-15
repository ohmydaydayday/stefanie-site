import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "孙燕姿 · 音乐故事馆",
  description: "25首经典歌曲背后的创作故事、歌词寓意与演唱背景 — 献给所有喜欢孙燕姿的人",
  openGraph: {
    title: "孙燕姿 · 音乐故事馆",
    description: "25首经典歌曲背后的创作故事、歌词寓意与演唱背景",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Serif+SC:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
