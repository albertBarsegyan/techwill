import { IconProps } from '../types/icon-types.ts';

export const PlusIcon = ({ color = 'currentColor' }: IconProps) => {
  return (
    <svg
      style={{ display: 'block' }}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.75 5.25H6.75V0.25C6.75 0.111875 6.63812 0 6.5 0H5.5C5.36188 0 5.25 0.111875 5.25 0.25V5.25H0.25C0.111875 5.25 0 5.36188 0 5.5V6.5C0 6.63812 0.111875 6.75 0.25 6.75H5.25V11.75C5.25 11.8881 5.36188 12 5.5 12H6.5C6.63812 12 6.75 11.8881 6.75 11.75V6.75H11.75C11.8881 6.75 12 6.63812 12 6.5V5.5C12 5.36188 11.8881 5.25 11.75 5.25Z"
        fill={color}
      />
    </svg>
  );
};

export const PlusBoldIcon = ({ color = 'currentColor' }: IconProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontSize: '24px', display: 'block' }}
    >
      <path
        d="M17.625 7.875h-7.5v-7.5A.375.375 0 009.75 0h-1.5a.375.375 0 00-.375.375v7.5h-7.5A.375.375 0 000 8.25v1.5c0 .207.168.375.375.375h7.5v7.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-7.5h7.5A.375.375 0 0018 9.75v-1.5a.375.375 0 00-.375-.375z"
        fill={color}
      ></path>
    </svg>
  );
};
