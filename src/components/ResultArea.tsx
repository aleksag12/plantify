/** @jsxImportSource theme-ui */
import { Box, Text, Spinner } from "theme-ui";
import { Result } from "../types/result";
import SingleResult from "./SingleResult";

interface ResultAreaProps {
  isGeneratingResponse: boolean;
  result: Result | undefined;
}

const ResultArea = ({ isGeneratingResponse, result }: ResultAreaProps) => {
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
        Result
      </Text>
      <Text sx={{ fontSize: [1, 5], color: "secondaryText" }}>
        Here's what we found based on your image.
      </Text>

      {isGeneratingResponse ? (
        <Spinner sx={{ color: "primaryText", mb: 12, mt: 13 }} />
      ) : (
        <SingleResult result={result} />
      )}
    </Box>
  );
};

export default ResultArea;
