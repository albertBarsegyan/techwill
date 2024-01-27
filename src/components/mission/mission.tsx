import { Box, Typography } from "@mui/material";
import { ImageLazyLoader } from "../common/image-lazy-loader/image-lazy-loader.tsx";
import googleMapImage from "../../assets/img/google-map.png";
import { ButtonComponent } from "../common/button/primary-button/primary-button.tsx";

export function Mission({ handleNextPage }: { handleNextPage: () => void }) {
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
        Group
      </Typography>

      <ImageLazyLoader
        style={{ width: "100%", height: "300px", borderRadius: "4px" }}
        src={googleMapImage}
        alt=""
      />

      <Typography
        sx={{ fontSize: "24px", color: "primary.main", marginTop: "12px" }}
      >
        Mission 1: Performance
      </Typography>

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

      <ButtonComponent
        sx={{
          textAlign: "center",
          width: "100%",
          backgroundColor: "primary.main",
          marginTop: "80px",
          color: "white",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "100px",
        }}
        hoverBackgroundColor="textDark"
        onClick={handleNextPage}
      >
        Start now
      </ButtonComponent>
    </Box>
  );
}
