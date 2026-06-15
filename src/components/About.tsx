"use client";

import { useEffect, useRef } from "react";

const stats = [
  { number: "13", label: "原创专辑" },
  { number: "3000万+", label: "专辑销量" },
  { number: "6次", label: "金曲奖提名" },
  { number: "25年", label: "音乐生涯" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28 scroll-fade" ref={ref}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-sans)] text-center text-gradient">
        关于 孙燕姿
      </h2>
      <p className="text-center text-text-dim text-sm tracking-widest mt-2 mb-4">STEFANIE SUN</p>
      <div className="w-15 h-0.5 mx-auto my-4 mb-12 rounded-full bg-gradient-to-r from-primary to-gold" />

      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
        <div className="text-sm md:text-base text-text-dim leading-8 space-y-4">
          <p>
            <span className="text-[#f5f0e8] font-semibold">孙燕姿</span>
            （Stefanie Sun，1978年7月23日—），新加坡籍华语流行乐女歌手、词曲创作人。
            2000年以同名专辑《孙燕姿》在台湾出道，凭借独特的嗓音和扎实的唱功迅速走红，成为华语乐坛"四小天后"之一。
          </p>
          <p>
            她的音乐风格多元，从抒情慢歌到轻快摇滚、世界音乐元素均有涉猎。
            孙燕姿的歌声有着<strong className="text-[#f5f0e8]">"既温暖又带着淡淡的忧伤"</strong>的特质，尤其擅长演绎情感层次丰富的作品。
            出道25年来，她发行了13张原创专辑，销量超过3000万张，被誉为华语乐坛的"宝藏女声"。
          </p>
          <p>
            即便多次暂别乐坛，每一次回归都能引发巨大关注。她的歌曲陪伴了一代人的青春，成为无数人心中不可替代的音乐记忆。
          </p>
          <p className="mt-3 text-sm text-primary">
            「唱歌是我与世界沟通的方式，每一首歌都是一个故事。」—— 孙燕姿
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:bg-primary/5 hover:border-primary/30 hover:-translate-y-0.5"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-sans">{s.number}</div>
              <div className="text-xs text-text-dim mt-1 tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
