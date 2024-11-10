/** @jsxImportSource theme-ui */
import { Box, Container, Text } from "theme-ui";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <Logo />

      <Text sx={{ fontSize: [7, 7], fontWeight: "semiBold", mt: [8, 10] }}>
        404
      </Text>

      <Text sx={{ fontSize: [2, 4], color: "secondaryText" }}>
        Page not found
      </Text>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: [2, 4],
          fontWeight: "medium",
          textAlign: "center",
          mt: [8, 10],
        }}
      >
        <Text sx={{ color: "secondaryText" }}>Back to </Text>
        <Text
          onClick={() => navigate("/")}
          sx={{
            color: "primaryText",
            textDecoration: "underline",
            cursor: "pointer",
            ml: 2,
          }}
        >
          Home
        </Text>
      </Box>
    </Container>
  );
};

export default NotFound404;
