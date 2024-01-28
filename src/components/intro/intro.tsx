import { Box, Typography } from "@mui/material";
import { ButtonComponent } from "../common/button/primary-button/primary-button.tsx";
import { ImageLazyLoader } from "../common/image-lazy-loader/image-lazy-loader.tsx";
import hikingImage from "../../assets/img/hiking.jpg";

export function Intro({ handleStartQuiz }: { handleStartQuiz: () => void }) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "24px",
          color: "lightColor",
          fontWeight: "600",
        }}
      >
        Information
      </Typography>

      <ImageLazyLoader
        style={{
          height: "300px",
          marginTop: "12px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "4px",
        }}
        src={hikingImage}
        alt=""
      />

      <Typography
        sx={{
          fontSize: "18px",
          marginTop: "12px",
          textAlign: "left",
          fontWeight: "300",
        }}
      >
        Experiential hiking involves immersing yourself in the outdoor
        environment and gaining a deeper connection with nature. To enhance your
        experience and ensure safety, consider the following must-have items for
        experiential hiking: comfortable footwear, weather-appropriate clothing,
        hydration, headlamp/flashlight, insect repellent, emergency shelter, and
        a first aid kit.
      </Typography>

      <ButtonComponent
        sx={{
          textAlign: "center",
          width: "100%",
          backgroundColor: "primary.main",
          marginTop: "24px",
          marginBottom: "40px",
          color: "white",
          fontSize: "28px",
          fontWeight: "700",
        }}
        hoverBackgroundColor="textDark"
        onClick={handleStartQuiz}
      >
        Start quiz
      </ButtonComponent>
    </Box>
  );
}
