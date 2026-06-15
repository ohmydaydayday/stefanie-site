"use client";

import { useState, useEffect, useRef } from "react";
import { songData } from "@/data/songs";
import SongCard from "./SongCard";

const filters = [
  { key: "all", label: "全部" },
  { key: "2020s", label: "2020s" },
  { key: "2010s", label: "2010s" },
  { key: "2000s", label: "2000s" },
];

export default function SongsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === "all"
      ? songData
      : songData.filter((s) => s.filter.includes(activeFilter));

  return (
    <section id="songs" className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28 scroll-fade" ref={ref}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-sans)] text-center text-gradient">
        每一首歌，都有一个故事
      </h2>
      <p className="text-center text-text-dim text-sm tracking-widest mt-2 mb-4">点击卡片展开完整故事</p>
      <div className="w-15 h-0.5 mx-auto my-4 mb-8 rounded-full bg-gradient-to-r from-primary to-gold" />

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`px-4 py-1.5 rounded-full text-xs border transition-all duration-300 cursor-pointer font-inherit ${
              activeFilter === f.key
                ? "border-primary bg-primary/10 text-primary"
                : "border-glass-border glass text-text-dim hover:border-primary/50 hover:text-primary/80"
            }`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Song cards grid */}
      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
        }}
      >
        {filtered.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-dim mt-10">暂无该年代的歌曲</p>
      )}

      <style jsx>{`
        .visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
