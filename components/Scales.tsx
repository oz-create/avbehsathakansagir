// Kartvizitteki terazi amblemi, SVG olarak yeniden çizildi.
export default function Scales({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 540"
      fill="none"
      stroke="currentColor"
      strokeWidth={7}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M240 18 L262 50 L240 82 L218 50 Z" />
      <path d="M122 95 H200 Q220 95 240 124 Q260 95 280 95 H358" />
      <path d="M44 134 H196 Q202 134 202 140 V460" />
      <path d="M436 134 H284 Q278 134 278 140 V460" />
      <path d="M240 124 V525" />
      <path d="M78 140 L10 340 M78 140 L146 340" />
      <path d="M402 140 L334 340 M402 140 L470 340" />
      <path d="M8 340 H148 A70 70 0 0 1 8 340 Z" />
      <path d="M332 340 H472 A70 70 0 0 1 332 340 Z" />
    </svg>
  );
}
