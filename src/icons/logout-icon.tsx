import { IconProps } from '../types/icon-types.ts';

export function LogoutIcon({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontSize: '20px' }}
    >
      <path
        opacity="0.4"
        d="M16.875 42H9a9 9 0 01-9-9V15a9 9 0 019-9h7.875A1.125 1.125 0 0118 7.125v3.75A1.125 1.125 0 0116.875 12H9a3 3 0 00-3 3v18a3 3 0 003 3h7.875A1.125 1.125 0 0118 37.125v3.75A1.125 1.125 0 0116.875 42z"
        fill={color}
      ></path>
      <path
        d="M33.094 8.278l14.24 14.119a2.25 2.25 0 010 3.197L33.084 39.73a2.257 2.257 0 01-3.178-.01l-2.053-2.052a2.255 2.255 0 01.075-3.254l7.275-6.665H17.25A2.245 2.245 0 0115 25.5v-3a2.245 2.245 0 012.25-2.25h17.953l-7.275-6.666a2.25 2.25 0 01-.066-3.244l2.054-2.053a2.25 2.25 0 013.178-.01z"
        fill={color}
      ></path>
    </svg>
  );
}
