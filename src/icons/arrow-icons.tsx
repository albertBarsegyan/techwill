import { IconProps } from '../types/icon-types.ts';

export function ArrowDownIcon({ style, color = 'currentColor', isUp }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{
        display: 'block',
        transition: 'all 0.3s ease-in-out 0s',
        transform: `rotate(${isUp ? -180 : 0}deg)`,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.7332 10.8691L3.1082 6.28164C2.96133 6.13476 2.96133 5.89726 3.1082 5.75039L3.72695 5.13164C3.87383 4.98477 4.11133 4.98477 4.2582 5.13164L7.99883 8.83476L11.7395 5.13164C11.8863 4.98477 12.1238 4.98477 12.2707 5.13164L12.8895 5.75039C13.0363 5.89726 13.0363 6.13476 12.8895 6.28164L8.26445 10.8691C8.11758 11.016 7.88008 11.016 7.7332 10.8691Z"
        fill={color}
      />
    </svg>
  );
}

export function ArrowUpIcon({ style, color }: IconProps) {
  return <ArrowDownIcon color={color} style={{ transform: 'rotate(180deg)', ...style }} />;
}

export function ArrowLeft({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="demio-icon "
      style={{ fontSize: '16px' }}
      fill={color}
    >
      <path d="M5.131 7.734L9.72 3.11a.375.375 0 01.531 0l.619.62a.375.375 0 010 .53L7.166 8l3.703 3.74a.375.375 0 010 .532l-.619.619a.375.375 0 01-.531 0L5.13 8.266a.375.375 0 010-.532z"></path>
    </svg>
  );
}

export function ArrowLeftDouble({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="demio-icon "
      style={{ fontSize: '16px' }}
      fill={color}
    >
      <path d="M2.11 7.734L6.73 3.11a.38.38 0 01.536 0l.623.62a.373.373 0 010 .53L4.16 8l3.73 3.74a.374.374 0 010 .532l-.623.619a.38.38 0 01-.535 0L2.11 8.266a.373.373 0 010-.532z"></path>
      <path d="M8.11 7.734l4.62-4.625a.38.38 0 01.536 0l.623.62a.374.374 0 010 .53L10.16 8l3.73 3.74a.374.374 0 010 .532l-.623.619a.38.38 0 01-.535 0L8.11 8.266a.373.373 0 010-.532z"></path>
    </svg>
  );
}

export function ArrowRight({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="demio-icon "
      style={{ fontSize: '16px' }}
      fill={color}
    >
      <path d="M10.869 8.266L6.28 12.89a.375.375 0 01-.531 0l-.619-.62a.375.375 0 010-.53L8.834 8 5.131 4.26a.375.375 0 010-.532l.619-.619a.375.375 0 01.531 0l4.588 4.625a.375.375 0 010 .532z"></path>
    </svg>
  );
}

export function ArrowRightDouble({ color = 'currentColor' }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="demio-icon "
      style={{ fontSize: '16px' }}
      fill={color}
    >
      <path d="M7.89 8.266L3.27 12.89a.38.38 0 01-.536 0l-.623-.62a.374.374 0 010-.53L5.84 8 2.11 4.26a.373.373 0 010-.532l.623-.619a.38.38 0 01.535 0l4.62 4.625a.373.373 0 010 .532z"></path>
      <path d="M13.89 8.266L9.27 12.89a.38.38 0 01-.536 0l-.623-.62a.374.374 0 010-.53L11.84 8 8.11 4.26a.373.373 0 010-.532l.623-.619a.38.38 0 01.535 0l4.62 4.625a.374.374 0 010 .532z"></path>
    </svg>
  );
}
