import { SxStyleType } from "../../../../types/theme-types.ts";
import { ZIndex } from "../../../../constants/style-constants.ts";

type RuleNames = "modalContainer" | "content" | "cancelButton";

export const primaryModalUseStyles = (): SxStyleType<RuleNames> => ({
  modalContainer: {
    background: "rgba(0, 0, 0, 0.2)",
    width: "100%",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: ZIndex.ForthLayer,
  },
  content: {
    flexBasis: "400px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
    background: "white",
    borderRadius: "4px",
    padding: "24px",
    zIndex: ZIndex.ForthLayer,
  },

  cancelButton: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    padding: "10px 16px",
    borderRadius: "4px",
    color: "textDarker",
    borderStyle: "solid",
    borderColor: "gray200",
    borderWidth: "1px",
    background: "transparent",
    cursor: "pointer",
  },
});

type ButtonRuleNames = "primaryButton" | "successButton" | "dangerButton";

export const buttonByStatusStyles = (): SxStyleType<ButtonRuleNames> => ({
  primaryButton: {
    padding: "10px 16px",
    color: "lightColor",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    border: 0,
    cursor: "pointer",
    borderRadius: "4px",
  },
  successButton: {
    padding: "10px 16px",
    color: "lightColor",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    border: 0,
    cursor: "pointer",
    borderRadius: "4px",
    bgcolor: "primary.main",
  },
  dangerButton: {
    padding: "10px 16px",
    color: "lightColor",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    border: 1,
    cursor: "pointer",
    borderRadius: "4px",
    bgcolor: "redLight",
    "&:hover": {
      bgcolor: "transparent",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "redLight",
      color: "redLight",
    },
  },
});
