"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = ctx;
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    const notes = ['♩', '♪', '♫', '♬', '𝄞'];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      note: string;
      rotation: number;
      rotSpeed: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = 12 + Math.random() * 20;
        this.speedY = -0.2 - Math.random() * 0.4;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = 0.1 + Math.random() * 0.3;
        this.note = notes[Math.floor(Math.random() * notes.length)];
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 0.5;
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = 12 + Math.random() * 20;
        this.speedY = -0.2 - Math.random() * 0.4;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = 0.1 + Math.random() * 0.3;
        this.note = notes[Math.floor(Math.random() * notes.length)];
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotSpeed;
        if (this.y < -30 || this.x < -30 || this.x > w + 30) {
          this.reset();
          this.y = h + 30;
        }
      }

      draw() {
        c.save();
        c.translate(this.x, this.y);
        c.rotate((this.rotation * Math.PI) / 180);
        c.font = `${this.size}px serif`;
        c.fillStyle = `rgba(255,107,53,${this.opacity})`;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.fillText(this.note, 0, 0);
        c.restore();
      }
    }

    const count = Math.min(25, Math.floor(w / 40));
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) particles.push(new Particle());

    let animId: number;
    function animate() {
      c.clearRect(0, 0, w, h);
      particles.forEach((p) => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    }
    animate();

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 pointer-events-none z-10" />;
}
