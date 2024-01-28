import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ButtonComponent } from "../common/button/primary-button/primary-button.tsx";

const questionVariants = [
  {
    id: 0,
    title:
      "Comfortable Footwear, Weather-Appropriate Clothing, Hydration, Headlamp/Flashlight",
  },
  {
    id: 1,
    title:
      "Weather-Appropriate Clothing, Insect Repellent, Emergency Shelter, First Aid Kit",
  },
  {
    id: 2,
    title:
      "Comfortable Footwear, Hydration, Insect Repellent, Emergency Shelter, First Aid Kit",
  },
  {
    id: 3,
    title:
      "Weather-Appropriate Clothing, Hydration, Headlamp/Flashlight, Emergency Shelter",
  },
];

export function Quiz({ handleNextStep }: { handleNextStep: () => void }) {
  const [checkedId, setCheckedId] = useState<number | null>(null);

  const nextPageValidation = () => {
    if (checkedId !== null) handleNextStep();
  };

  return (
    <>
      <Typography
        sx={{
          color: "lightColor",
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        Quiz
      </Typography>

      <Typography sx={{ fontWeight: "700", marginTop: "18px" }}>
        When preparing for experiential hiking, which combination of items is
        recommended for ensuring both comfort and safety?
      </Typography>

      <FormGroup sx={{ marginTop: "18px" }}>
        {questionVariants.map((questionVariant) => (
          <FormControlLabel
            sx={{ margin: "10px 0", alignItems: "start", gap: "0 10px" }}
            onChange={() => setCheckedId(questionVariant.id)}
            checked={checkedId === questionVariant.id}
            key={questionVariant.id}
            control={
              <Checkbox
                sx={{
                  "&.MuiCheckbox-root": {
                    padding: 0,
                  },
                }}
              />
            }
            label={questionVariant.title}
          />
        ))}
      </FormGroup>

      <ButtonComponent
        sx={{
          textAlign: "center",
          width: "100%",
          backgroundColor: "primary.main",
          marginTop: "80px",
          color: "white",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "40px",
        }}
        disabledStyles={{
          color: "white",
          cursor: "pointer",
          backgroundColor: "#86d984",
        }}
        disabled={checkedId === null}
        hoverBackgroundColor="textDark"
        onClick={nextPageValidation}
      >
        Next
      </ButtonComponent>
    </>
  );
}
