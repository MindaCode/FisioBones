/* Barras de color SMPTE: el patrón de prueba clásico de las cintas VHS */
const COLORS = [
  "#b5b5a8",
  "#b5b520",
  "#20b5b5",
  "#20b520",
  "#b520b5",
  "#b52020",
  "#2020b5",
];

export default function ColorBars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-2.5 ${className}`} aria-hidden="true">
      {COLORS.map((color) => (
        <div key={color} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}
