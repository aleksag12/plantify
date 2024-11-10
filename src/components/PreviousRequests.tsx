/** @jsxImportSource theme-ui */
import { Box, Text } from "theme-ui";
import { Result } from "../types/result";
import SingleResult from "./SingleResult";

interface PreviousRequestsProps {
  previousRequests: Result[];
}

const PreviousRequests = ({ previousRequests }: PreviousRequestsProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: [10, 12],
        textAlign: "center",
      }}
    >
      <Text sx={{ fontSize: [5, 7], fontWeight: "semiBold", mb: 2 }}>
        Previous Requests
      </Text>
      <Text sx={{ fontSize: [1, 5], color: "secondaryText" }}>
        Take a look at your past plant discoveries.
      </Text>

      {previousRequests.length > 0 ? (
        <>
          {previousRequests.map((r) => (
            <SingleResult key={r.imageUrl} result={r} />
          ))}
        </>
      ) : (
        <Text sx={{ fontSize: [1, 5], mt: [6, 8] }}>No previous requests.</Text>
      )}
    </Box>
  );
};

export default PreviousRequests;
