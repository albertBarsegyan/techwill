import { IconProps } from '../types/icon-types.ts';

export function EmbedIcon({ color = 'currentColor' }: IconProps) {
  return (
    <svg width="29" height="36" viewBox="0 0 29 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.1509 13.5195C22.8871 13.5195 21.7765 14.0557 20.9339 14.8599L8.98497 6.47268C9.25306 5.89821 9.40625 5.28545 9.40625 4.59609C9.40625 2.10672 7.37646 0.115234 4.9254 0.115234C2.39774 0.115234 0.40625 2.14502 0.40625 4.63438C0.40625 7.12375 2.43604 9.11524 4.8871 9.11524C6.15093 9.11524 7.29987 8.57907 8.10412 7.73651L20.0531 16.1237C19.785 16.6982 19.6318 17.3493 19.6318 18.0003C19.6318 18.6897 19.785 19.3408 20.0914 19.9152L8.06583 28.2259C7.26157 27.4216 6.11263 26.9237 4.8871 26.9237C2.39774 26.9237 0.40625 28.9535 0.40625 31.4046C0.40625 33.8557 2.43604 35.8855 4.8871 35.8855C7.37646 35.8855 9.36795 33.8557 9.36795 31.4046C9.36795 30.7152 9.21476 30.0642 8.90838 29.4897L20.9339 21.2174C21.7382 22.0216 22.8871 22.5195 24.1126 22.5195C26.602 22.5195 28.5935 20.4897 28.5935 18.0386C28.6318 15.5493 26.602 13.5195 24.1509 13.5195ZM4.8871 7.58332C3.24029 7.58332 1.93816 6.24289 1.93816 4.63438C1.93816 3.02587 3.27859 1.68545 4.8871 1.68545C6.49561 1.68545 7.83604 3.02587 7.83604 4.63438C7.83604 6.24289 6.53391 7.58332 4.8871 7.58332ZM4.8871 34.3918C3.24029 34.3918 1.93816 33.0514 1.93816 31.4429C1.93816 29.7961 3.27859 28.494 4.8871 28.494C6.49561 28.494 7.83604 29.8344 7.83604 31.4429C7.87434 33.0514 6.53391 34.3918 4.8871 34.3918ZM24.1509 20.9876C22.5041 20.9876 21.202 19.6472 21.202 18.0386C21.202 16.3918 22.5424 15.0897 24.1509 15.0897C25.7977 15.0897 27.0999 16.4301 27.0999 18.0386C27.0999 19.6854 25.7594 20.9876 24.1509 20.9876Z"
        fill={color}
      />
    </svg>
  );
}
