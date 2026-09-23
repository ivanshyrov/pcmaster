import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

type KineticGridProps = {
  children: ReactNode;
};

export default function KineticGrid({ children }: KineticGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Параметры сетки
    const gap = 56;
    const speed = 12;
    let offset = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Вертикальные линии
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.18)';
      ctx.beginPath();
      for (let x = -(offset % gap); x < width; x += gap) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      ctx.stroke();

      // Горизонтальные линии
      ctx.beginPath();
      for (let y = -(offset % gap); y < height; y += gap) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Точки на пересечениях
      ctx.fillStyle = 'rgba(37, 99, 235, 0.35)';
      for (let x = -(offset % gap); x < width; x += gap) {
        for (let y = -(offset % gap); y < height; y += gap) {
          ctx.beginPath();
          ctx.arc(x, y, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      offset += speed * 0.016;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f4f6fb]">
      {/* Канвас-подложка: закреплена, позади контента */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />
      {/* Контент поверх фона */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}