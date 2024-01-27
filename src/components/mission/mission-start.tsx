import { Box, Typography } from "@mui/material";
import { ImageLazyLoader } from "../common/image-lazy-loader/image-lazy-loader.tsx";

import { ButtonComponent } from "../common/button/primary-button/primary-button.tsx";
import actionImage from "../../assets/img/action.png";
import { useStopwatch } from "../../hooks/use-stopwatch.tsx";
import { useLayoutEffect } from "react";

export function MissionStart({ handleNext }: { handleNext: () => void }) {
  const { seconds, handleStart, isActive } = useStopwatch(15);

  useLayoutEffect(() => {
    if (!isActive) handleStart();
  }, []);

  return (
    <Box>
      <Typography
        sx={{
          color: "lightColor",
          marginTop: "30px",
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        Mission 1: Performance
      </Typography>

      <ImageLazyLoader
        style={{ width: "100%", height: "300px", borderRadius: "4px" }}
        src={actionImage}
        alt=""
      />

      <Typography></Typography>
      <Typography
        sx={{
          color: "lightColor",
          marginTop: "60px",
          fontSize: "48px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        00:{seconds}
      </Typography>

      {!isActive && (
        <ButtonComponent
          sx={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "primary.main",
            color: "white",
            fontSize: "28px",
            marginTop: "60px",
            fontWeight: "700",
            marginBottom: "100px",
          }}
          disabledStyles={{
            background: "#86d984",
            color: "white",
            cursor: "disabled",
          }}
          hoverBackgroundColor="textDark"
          onClick={handleNext}
        >
          Result
        </ButtonComponent>
      )}
    </Box>
  );
}
