import { IconProps } from '../types/icon-types.ts';

interface CloseIconProps extends IconProps {
  size?: string;
}

export function CloseIconWithRound({ color, size = '24px' }: CloseIconProps) {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      className=""
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
    >
      <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
      <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
    </svg>
  );
}

export const CloseIcon = ({ color, size = '24px' }: CloseIconProps) => {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      className=""
      width={size}
      height={size}
      fill={color}
      aria-hidden="true"
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
    </svg>
  );
};

export const CloseIconWithRoundFilled = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2059_283)">
        <path
          d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM11.8 10.0344C11.9469 10.1813 11.9469 10.4188 11.8 10.5656L10.5625 11.8C10.4156 11.9469 10.1781 11.9469 10.0312 11.8L8 9.75L5.96562 11.8C5.81875 11.9469 5.58125 11.9469 5.43437 11.8L4.2 10.5625C4.05312 10.4156 4.05312 10.1781 4.2 10.0312L6.25 8L4.2 5.96562C4.05312 5.81875 4.05312 5.58125 4.2 5.43437L5.4375 4.19688C5.58437 4.05 5.82188 4.05 5.96875 4.19688L8 6.25L10.0344 4.2C10.1813 4.05312 10.4188 4.05312 10.5656 4.2L11.8031 5.4375C11.95 5.58437 11.95 5.82188 11.8031 5.96875L9.75 8L11.8 10.0344Z"
          fill="#DA1E28"
        />
      </g>
      <defs>
        <clipPath id="clip0_2059_283">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
