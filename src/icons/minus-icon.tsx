import { IconProps } from '../types/icon-types.ts';

export function MinusIcon({ color }: IconProps) {
  return (
    <svg
      style={{ display: 'block' }}
      width="18"
      height="2"
      viewBox="0 0 18 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="17" height="2" rx="1" fill={color} />
    </svg>
  );
}
