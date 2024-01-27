export const primaryChipStyles = () => ({
  chip: (isActive: boolean) => ({
    borderRadius: "8px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: isActive ? "#AAE5C9" : "#eeeeee",
    background: isActive ? "#EEFDF6" : "#ffffff",
    height: "28px",
    color: isActive ? "primary.main" : "textDark",
    "& .MuiChip-label": {
      paddingRight: "0",
      marginRight: "4px",
      fontFeatureSettings: "'clig' off, 'liga' off",
      fontFamily: "Lato",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
    },
    "& .MuiChip-deleteIcon": {
      marginRight: 0,
    },
    "&.MuiButtonBase-root.MuiChip-root .MuiChip-deleteIcon": {
      margin: 0,
    },
  }),
});
