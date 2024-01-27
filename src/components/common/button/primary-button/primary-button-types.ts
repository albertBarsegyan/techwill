import { ComponentWithChildren } from "../../../../types/component-types.ts";
import { CSSProperties } from "react";

export const enum PrimaryButtonVariant {
  Text = "Text",
  Outlined = "Outlined",
  Filled = "Filled",
  Link = "Link",
}

export interface PrimaryButtonProps extends ComponentWithChildren {
  onClick: () => void;
  variant?: PrimaryButtonVariant;
  className?: string;
  style?: CSSProperties;
  color?: string;
}
