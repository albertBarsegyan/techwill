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

      <Typography
        sx={{ color: "#515151", fontWeight: "300", fontSize: "20px" }}
      >
        Description:
      </Typography>
      <Typography
        sx={{ color: "#515151", fontWeight: "300", marginTop: "4px" }}
      >
        Please choose a partner and engage in a silent exchange for 15 seconds,
        looking at each other without speaking.
      </Typography>
      <Typography
        sx={{
          color: "lightColor",
          marginTop: "20px",
          fontSize: "48px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        00:{seconds}
      </Typography>

      <Typography
        textAlign="center"
        sx={{
          fontSize: "36px",
          color: "#6C6A6A",
          fontWeight: 600,
          marginTop: "",
        }}
      >
        20 points
      </Typography>

      {!isActive && (
        <ButtonComponent
          sx={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "primary.main",
            color: "white",
            fontSize: "28px",
            marginTop: "40px",
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
