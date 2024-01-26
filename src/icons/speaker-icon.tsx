import { IconProps } from '../types/icon-types.ts';

export function SpeakerIcon({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="demio-icon "
      style={{ fontSize: '20px' }}
    >
      <path
        opacity="0.4"
        d="M45.333 40c0 .768-.59 2.667-2.666 2.667A2.667 2.667 0 0141 42.083l-7.083-5.666A20.235 20.235 0 0024 32.184v-19.03a20.238 20.238 0 009.917-4.233L41 3.25a2.66 2.66 0 011.667-.584c2.083 0 2.666 1.938 2.666 2.666V40z"
        fill={color}
      ></path>
      <path
        d="M45.333 18.073v9.187a5.289 5.289 0 000-9.187zM0 18.667v8A5.333 5.333 0 005.333 32h2.809a20.25 20.25 0 00-.182 2.667c0 3.203.728 6.364 2.13 9.245.433.89 1.377 1.421 2.367 1.421h6.19c2.17 0 3.474-2.486 2.158-4.213a10.613 10.613 0 01-2.18-6.453c.004-.902.127-1.799.368-2.667h2.34V13.333h-16A5.334 5.334 0 000 18.667z"
        fill={color}
      ></path>
    </svg>
  );
}
