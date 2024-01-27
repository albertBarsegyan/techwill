import { useId } from "react";
import "./toggle-switch.css";

interface ToggleSwitchProps {
  isChecked: boolean;
  handleChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function ToggleSwitch({
  isChecked,
  handleChange,
  disabled = false,
}: ToggleSwitchProps) {
  const id = useId();

  return (
    <div className="toggle-switch">
      <input
        onChange={(event) => handleChange(event.target.checked)}
        type="checkbox"
        checked={isChecked}
        className="toggle-switch-checkbox"
        disabled={disabled}
        id={id}
      />

      <label className={"toggle-switch-label"} htmlFor={id}>
        <span className={"toggle-switch-inner"}></span>
        <span className="toggle-switch-switch"></span>
      </label>
    </div>
  );
}
