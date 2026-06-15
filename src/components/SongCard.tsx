"use client";

import { useState } from "react";
import type { Song } from "@/data/songs";

interface SongCardProps {
  song: Song;
}

export default function SongCard({ song }: SongCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg ${
        expanded ? "border-primary/20" : ""
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="p-6 pb-4 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold font-[family-name:var(--font-sans)] truncate">{song.title}</h3>
          <div className="text-xs text-text-dim mt-1 space-x-2">
            <span>{song.year}</span>
            <span>·</span>
            <span>{song.album}</span>
            {song.badge && (
              <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary ml-1">
                {song.badge}
              </span>
            )}
          </div>
        </div>
        <div className="text-3xl shrink-0 leading-none">{song.emoji}</div>
      </div>

      {/* Preview */}
      <div className="px-6 pb-3 text-xs md:text-sm text-text-dim italic leading-relaxed">{song.preview}</div>

      {/* Expand icon */}
      <div
        className={`text-center pb-4 text-primary-dim text-xs transition-transform duration-300 ${
          expanded ? "rotate-180" : ""
        }`}
      >
        ▼
      </div>

      {/* Expanded detail */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: expanded ? "2000px" : "0" }}
      >
        <div className="px-6 pb-6 border-t border-glass-border space-y-5">
          <div>
            <h4 className="text-sm text-gold font-[family-name:var(--font-sans)] mb-2 tracking-wider">
              ◆ 创作背景
            </h4>
            <p className="text-sm text-text-dim leading-relaxed">{song.creation}</p>
          </div>
          <div>
            <h4 className="text-sm text-gold font-[family-name:var(--font-sans)] mb-2 tracking-wider">
              ◆ 歌曲故事
            </h4>
            <p className="text-sm text-text-dim leading-relaxed">{song.story}</p>
          </div>
          <div>
            <h4 className="text-sm text-gold font-[family-name:var(--font-sans)] mb-2 tracking-wider">
              ◆ 演唱背景
            </h4>
            <p className="text-sm text-text-dim leading-relaxed">{song.performance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
