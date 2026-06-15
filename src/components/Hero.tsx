"use client";

import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[linear-gradient(135deg,#0a0a12_0%,#1a0a12_40%,#0a0a12_70%,#120a1a_100%)]">
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(255,107,53,0.08) 0%, transparent 50%)," +
            "radial-gradient(ellipse at 70% 30%, rgba(240,165,0,0.05) 0%, transparent 50%)," +
            "radial-gradient(ellipse at 50% 80%, rgba(255,71,87,0.06) 0%, transparent 50%)",
        }}
      />

      {/* Floating music notes */}
      <Particles />

      {/* Content */}
      <div className="text-center z-20 px-5">
        <img
          src="/images/stefanie-2025.jpg"
          alt="孙燕姿"
          className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full object-cover mx-auto mb-8 border-[3px] border-primary/30 shadow-[0_0_60px_rgba(255,107,53,0.15)] animate-[fadeInUp_1s_ease]"
          style={{ viewTransitionName: "hero-photo" }}
        />

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-sans)] bg-gradient-to-r from-primary via-gold to-accent bg-clip-text text-transparent animate-[fadeInUp_1s_ease_0.2s_both]">
          孙燕姿
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-text-dim mt-3 tracking-[0.3em] animate-[fadeInUp_1s_ease_0.4s_both]">
          STEFANIE SUN · 音乐故事馆
        </p>

        <p className="mt-6 text-base text-gold italic opacity-80 animate-[fadeInUp_1s_ease_0.6s_both]">
          「每一个音符背后，都藏着一段故事」
        </p>
      </div>

      {/* Scroll hint */}
      <button
        className="absolute bottom-10 z-20 text-text-dim text-xs tracking-widest animate-bounce cursor-pointer bg-none border-none"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        向下探索
        <span className="block text-center mt-1 text-lg">↓</span>
      </button>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
