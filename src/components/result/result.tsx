import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { ButtonComponent } from "../common/button/primary-button/primary-button.tsx";
import { useAuth } from "../../hooks/use-auth.tsx";

export function Result() {
  const { logout } = useAuth();

  const handleReset = () => {
    localStorage.clear();
    logout();
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      sx={{ height: "100vh", width: "100%" }}
    >
      <Box>
        <Typography
          sx={{ fontSize: "24px", color: "primary.main", fontWeight: "600" }}
        >
          Learning Goals:
        </Typography>

        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Enhance self-awareness through non-verbal communication.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Foster a deeper connection with nature and others.
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Develop the ability to concentrate without verbal communication.
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: "300",
            color: "lightColor",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Your dedication to personal growth and learning is inspiring! Thank
          you for participating!
        </Typography>

        <ButtonComponent
          onClick={handleReset}
          hoverBackgroundColor="textDark"
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
        >
          Repeat
        </ButtonComponent>
      </Box>
    </Stack>
  );
}
