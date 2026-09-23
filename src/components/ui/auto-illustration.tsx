import { Radio, Video, Speaker, Camera, Radar, ShieldCheck, Music2, Zap } from 'lucide-react';
import type { ReactNode } from 'react';

export type AutoVariant =
  | 'headunit'
  | 'dashcam'
  | 'subwoofer'
  | 'rear-camera'
  | 'parktronic'
  | 'alarm'
  | 'speakers'
  | 'amplifier';

const icons: Record<AutoVariant, ReactNode> = {
  headunit: <Radio size={18} />,
  dashcam: <Video size={18} />,
  subwoofer: <Speaker size={18} />,
  'rear-camera': <Camera size={18} />,
  parktronic: <Radar size={18} />,
  alarm: <ShieldCheck size={18} />,
  speakers: <Music2 size={18} />,
  amplifier: <Zap size={18} />,
};

// Координаты маркера (место установки) на схематичной машине
const markers: Record<AutoVariant, [number, number]> = {
  headunit: [140, 58],
  dashcam: [96, 48],
  subwoofer: [202, 84],
  'rear-camera': [205, 86],
  parktronic: [188, 82],
  alarm: [48, 44],
  speakers: [124, 88],
  amplifier: [184, 72],
};

export default function AutoIllustration({ variant }: { variant: AutoVariant }) {
  const [mx, my] = markers[variant];

  return (
    <svg viewBox="0 0 240 150" className="w-full h-auto" role="img" aria-hidden="true">
      {/* мягкая подложка */}
      <circle cx="120" cy="80" r="72" fill="#f1f5f9" />

      {/* кузов */}
      <path
        d="M20 100 C20 88 28 78 44 73 L70 66 C88 61 106 59 124 59 L164 59 C182 59 196 66 206 78 L214 88 C218 94 214 100 208 100 Z"
        fill="#eff6ff"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* кабина */}
      <path
        d="M86 61 L98 40 C106 32 118 30 132 30 L156 30 C168 30 175 36 179 44 L188 60 Z"
        fill="#dbeafe"
        stroke="#2563eb"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* линии дверей */}
      <path d="M116 61 L116 100" stroke="#bfdbfe" strokeWidth="2" />
      <path d="M158 60 L158 100" stroke="#bfdbfe" strokeWidth="2" />

      {/* ручки дверей */}
      <line x1="124" y1="84" x2="130" y2="84" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="168" y1="84" x2="174" y2="84" stroke="#93c5fd" strokeWidth="2.5" strokeLinecap="round" />

      {/* фара */}
      <path d="M22 84 L36 78 L36 90 L24 90 Z" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />

      {/* колёса */}
      <circle cx="62" cy="112" r="17" fill="#ffffff" stroke="#2563eb" strokeWidth="3" />
      <circle cx="62" cy="112" r="7" fill="#dbeafe" />
      <circle cx="178" cy="112" r="17" fill="#ffffff" stroke="#2563eb" strokeWidth="3" />
      <circle cx="178" cy="112" r="7" fill="#dbeafe" />

      {/* датчики парктроника */}
      {variant === 'parktronic' && (
        <>
          <circle cx="182" cy="97" r="2.5" fill="#2563eb" />
          <circle cx="192" cy="99" r="2.5" fill="#2563eb" />
          <circle cx="202" cy="97" r="2.5" fill="#2563eb" />
        </>
      )}

      {/* маркер места установки */}
      <g transform={`translate(${mx - 10}, ${my - 10})`}>
        <circle cx="10" cy="10" r="16" fill="#2563eb" stroke="#ffffff" strokeWidth="2" />
        <g className="text-white">{icons[variant]}</g>
      </g>
    </svg>
  );
}