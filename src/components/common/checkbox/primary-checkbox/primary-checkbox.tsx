import { Checkbox, SxProps } from "@mui/material";
import { ChangeEvent } from "react";

const CheckboxUncheckedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="14"
        height="14"
        rx="3"
        stroke="#A9B2B9"
        strokeWidth="2"
      />
    </svg>
  );
};

const CheckboxCheckedIcon = ({ color }: { color: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill={color} />
      <path
        d="M12.7153 3.95639L6.55016 10.1215L4.28488 7.85621C4.17505 7.74638 3.99697 7.74638 3.88712 7.85621L3.22422 8.51911C3.11439 8.62894 3.11439 8.80702 3.22422 8.91687L6.35127 12.0439C6.4611 12.1538 6.63918 12.1538 6.74903 12.0439L13.7759 5.01706C13.8857 4.90723 13.8857 4.72915 13.7759 4.6193L13.113 3.95639C13.0032 3.84657 12.8251 3.84657 12.7153 3.95639Z"
        fill="white"
      />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke={color} />
    </svg>
  );
};

const CheckboxSubcheckedIcon = () => {
  return (
    <svg
      style={{ display: "block" }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#02BF6F" />
      <path d="M4.5 7.5H11.5V8.5H4.5V7.5Z" fill="white" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#02BF6F" />
    </svg>
  );
};

export function PrimaryCheckbox({
  checked,
  onChange,
  disabled,
  isSubChecked,
  sx,
  dataTestId,
  id,
}: {
  checked: boolean;
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isSubChecked?: boolean;
  sx?: SxProps;
  dataTestId?: string;
  id?: string;
}) {
  return (
    <Checkbox
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      id={id}
      icon={<CheckboxUncheckedIcon />}
      inputProps={
        {
          ["data-testid"]: dataTestId,
        } as React.InputHTMLAttributes<HTMLInputElement>
      }
      color="primary"
      disableRipple
      checkedIcon={
        isSubChecked ? (
          <CheckboxSubcheckedIcon />
        ) : (
          <CheckboxCheckedIcon color={disabled ? "#AAE5C9" : "#02BF6F"} />
        )
      }
      sx={{
        "&.MuiButtonBase-root.MuiCheckbox-root": {
          padding: 0,
        },
        ...(sx ?? []),
      }}
    />
  );
}
