"use client";

import { useEffect, useCallback } from "react";
import { galleryImages } from "@/data/gallery";

interface LightboxProps {
  currentIndex: number;
  onClose: () => void;
  onNavigate: (dir: number) => void;
}

export default function Lightbox({ currentIndex, onClose, onNavigate }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    },
    [onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (currentIndex < 0) return null;

  const img = galleryImages[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-3xl text-white/60 hover:text-white transition cursor-pointer z-10 bg-none border-none"
        onClick={onClose}
      >
        ✕
      </button>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-white/50 hover:text-white p-4 rounded-lg transition cursor-pointer bg-white/5 border-none"
        onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
      >
        ‹
      </button>

      <img
        src={img.src}
        alt={img.alt}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-white/50 hover:text-white p-4 rounded-lg transition cursor-pointer bg-white/5 border-none"
        onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-dim text-sm">
        {currentIndex + 1} / {galleryImages.length}
      </div>
    </div>
  );
}
