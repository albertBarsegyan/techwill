import { IconProps } from '../types/icon-types.ts';

export function ChatIcon({ color = 'currentColor' }: IconProps) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M42 0H6a6.006 6.006 0 00-6 6v27a6.006 6.006 0 006 6h9v7.875a1.126 1.126 0 001.79.91L28.5 39H42a6.006 6.006 0 006-6V6a6.006 6.006 0 00-6-6zM12 22.5a3 3 0 110-5.999 3 3 0 010 5.999zm12 0a3 3 0 110-5.999 3 3 0 010 5.999zm12 0a3 3 0 110-5.999 3 3 0 010 5.999z"
        fill={color}
      ></path>
      <path
        d="M36 16.5a3 3 0 100 5.999 3 3 0 000-5.999zm-12 0a3 3 0 100 5.999 3 3 0 000-5.999zm-12 0a3 3 0 100 5.999 3 3 0 000-5.999z"
        fill={color}
      ></path>
    </svg>
  );
}
