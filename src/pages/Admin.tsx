/** @jsxImportSource theme-ui */
import { Box, Container, Spinner, Text } from "theme-ui";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";
import { Result } from "../types/result";
import { getPreviousRequests } from "../backendSimulation/backendSimulation";
import SingleResult from "../components/SingleResult";

const Admin = () => {
  const [allRequests, setAllRequests] = useState<Result[]>([]);
  const [isFetchingRequests, setIsFetchingRequests] = useState(true);

  useEffect(() => {
    getPreviousRequests().then((response) => {
      setAllRequests(response);
      setIsFetchingRequests(false);
    });
  }, []);

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

      <Text sx={{ fontSize: [5, 7], fontWeight: "semiBold", mb: 2 }}>
        User's Requests
      </Text>
      <Text sx={{ fontSize: [1, 5], color: "secondaryText" }}>
        Take a look at all user's requests.
      </Text>

      {isFetchingRequests ? (
        <Spinner
          size={24}
          sx={{ color: "primaryText", mt: [9, 10], height: "44px" }}
        />
      ) : (
        <>
          {allRequests.length > 0 ? (
            <>
              {allRequests.map((r) => (
                <SingleResult key={r.imageUrl} result={r} isAdmin />
              ))}
            </>
          ) : (
            <Text sx={{ fontSize: [1, 5], mt: [6, 8] }}>
              There are no requests yet.
            </Text>
          )}
        </>
      )}

      <Box sx={{ mt: 13 }} />
    </Container>
  );
};

export default Admin;
