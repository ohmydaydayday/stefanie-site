"use client";

import { useEffect, useRef } from "react";
import { timelineData } from "@/data/timeline";

function TimelineItem({ year, title, desc, index }: { year: string; title: string; desc: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative pl-8 mb-10 opacity-0 -translate-x-5 transition-all duration-600"
      style={{
        transition: "all 0.6s ease",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Dot */}
      <div className="absolute left-[-22px] top-[6px] w-3 h-3 rounded-full bg-primary border-[3px] border-deep shadow-[0_0_0_2px_rgba(255,107,53,0.3)]" />
      <div className="text-xs text-gold font-semibold tracking-wider">{year}</div>
      <div className="text-lg font-semibold mt-1 mb-1.5 font-[family-name:var(--font-sans)] text-[#f5f0e8]">{title}</div>
      <div className="text-sm text-text-dim leading-relaxed">{desc}</div>
    </div>
  );
}

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 scroll-fade" ref={ref}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-sans)] text-center text-gradient">
        音乐时间线
      </h2>
      <p className="text-center text-text-dim text-sm tracking-widest mt-2 mb-4">25年音乐旅程</p>
      <div className="w-15 h-0.5 mx-auto my-4 mb-12 rounded-full bg-gradient-to-r from-primary to-gold" />

      <div className="relative pl-8 md:pl-10">
        {/* Vertical line */}
        <div className="absolute left-[14px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-transparent" />

        {timelineData.map((item, i) => (
          <TimelineItem key={i} {...item} index={i} />
        ))}
      </div>

      <style jsx>{`
        .visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
}
