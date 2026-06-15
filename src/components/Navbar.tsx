"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > 100) {
        setVisible(current <= lastScroll || current <= 200);
      } else {
        setVisible(true);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  const links = [
    { href: "#about", label: "关于" },
    { href: "#timeline", label: "时间线" },
    { href: "#songs", label: "歌曲故事" },
    { href: "#gallery", label: "照片" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-4 flex justify-between items-center bg-deep/80 backdrop-blur-xl border-b border-glass-border transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-lg font-semibold font-[family-name:var(--font-sans)]">
        <span className="text-primary">燕姿</span>{" "}
        <span className="text-[#f5f0e8] text-sm md:text-base">· 音乐故事馆</span>
      </div>

      <button
        className="md:hidden text-[#f5f0e8] text-2xl bg-none border-none cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex absolute md:relative top-full left-0 right-0 md:top-auto flex-col md:flex-row gap-6 p-4 md:p-0 bg-deep/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-b md:border-none border-glass-border`}
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-sm text-text-dim hover:text-primary transition font-medium tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
