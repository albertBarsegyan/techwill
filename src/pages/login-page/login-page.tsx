import { InputLabel, Stack, Typography } from "@mui/material";
import { PageLayout } from "../../layouts/page-layout/page-layout.tsx";
import { PrimaryInput } from "../../components/common/input/primary-input/primary-input.tsx";
import { useState } from "react";
import { ButtonComponent } from "../../components/common/button/primary-button/primary-button.tsx";
import { useAuth } from "../../hooks/use-auth.tsx";

export function LoginPage() {
  const [email, setEmail] = useState("friend.user@mail");
  const [password, setPassword] = useState("our-friend-user");
  const { login } = useAuth();

  const handleLogin = () => {
    if (email && password) {
      login();
    }
  };

  return (
    <PageLayout>
      <Stack alignItems="center">
        <Typography
          sx={{
            marginTop: "100px",
            marginBottom: "40px",
            color: "primary.main",
            fontSize: "36px",
            fontWeight: "600",
          }}
        >
          Log in
        </Typography>

        <InputLabel
          sx={{ width: "100%", color: "#575656", marginBottom: "8px" }}
        >
          User name
        </InputLabel>
        <PrimaryInput
          value={email}
          onChange={(inputValue) => setEmail(inputValue)}
        />

        <InputLabel
          sx={{
            width: "100%",
            color: "#575656",
            marginTop: "24px",
            marginBottom: "8px",
          }}
        >
          Password
        </InputLabel>
        <PrimaryInput
          type="password"
          value={password}
          onChange={(inputValue) => setPassword(inputValue)}
        />

        <ButtonComponent
          sx={{
            marginTop: "40px",
            width: "100%",
            backgroundColor: "primary.main",
            padding: "10px 0",
            color: "white",
            fontWeight: "700",
          }}
          disabledStyles={{
            color: "white",
            cursor: "pointer",
            backgroundColor: "#86d984",
          }}
          disabled={!(email && password)}
          hoverBackgroundColor={"textDark"}
          onClick={handleLogin}
        >
          Log in
        </ButtonComponent>
      </Stack>
    </PageLayout>
  );
}
