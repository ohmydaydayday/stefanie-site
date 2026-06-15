"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { galleryImages } from "@/data/gallery";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(-1);
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

  const navigate = useCallback(
    (dir: number) => {
      setLightboxIdx((prev) => {
        const next = prev + dir;
        if (next < 0) return galleryImages.length - 1;
        if (next >= galleryImages.length) return 0;
        return next;
      });
    },
    []
  );

  return (
    <section id="gallery" className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28 scroll-fade" ref={ref}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-sans)] text-center text-gradient">
        光影·燕姿
      </h2>
      <p className="text-center text-text-dim text-sm tracking-widest mt-2 mb-4">PHOTO GALLERY</p>
      <div className="w-15 h-0.5 mx-auto my-4 mb-12 rounded-full bg-gradient-to-r from-primary to-gold" />

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 180px), 1fr))",
        }}
      >
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden cursor-pointer aspect-[3/4] transition-all duration-400 hover:scale-[1.03] hover:shadow-2xl group"
            onClick={() => setLightboxIdx(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {img.alt}
            </div>
          </div>
        ))}
      </div>

      {lightboxIdx >= 0 && (
        <Lightbox
          currentIndex={lightboxIdx}
          onClose={() => setLightboxIdx(-1)}
          onNavigate={navigate}
        />
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
