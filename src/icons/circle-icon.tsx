export function CircleIcon({ size, color }: { size: number; color?: string }) {
  return <div style={{ width: size, height: size, borderRadius: '100%', backgroundColor: color }}></div>;
}
