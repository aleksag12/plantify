/** @jsxImportSource theme-ui */
import { Box, Button, Container, Spinner, Text } from "theme-ui";
import Logo from "../components/Logo";
import UploadArea from "../components/UploadArea";
import { useRef, useState } from "react";
import ResultArea from "../components/ResultArea";
import { Result } from "../types/result";
import { getPreviousRequests } from "../backendSimulation/backendSimulation";
import PreviousRequests from "../components/PreviousRequests";

const Home = () => {
  const [isGeneratingResponse, setIsGeneratingResponse] = useState(false);
  const [result, setResult] = useState<Result | undefined>(undefined);
  const [isPreviousRequestsShown, setIsPreviousRequestsShown] = useState(false);
  const [isFetchingPreviousRequests, setIsFetchingPreviousRequests] =
    useState(false);
  const [previousRequests, setPreviousRequests] = useState<Result[]>([]);
  const resultScrollRef = useRef<HTMLDivElement>(null);
  const previousRequestsScrollRef = useRef<HTMLDivElement>(null);

  const fetchPreviousRequests = async () => {
    setIsFetchingPreviousRequests(true);
    const response = await getPreviousRequests();
    setPreviousRequests(response);
    setIsFetchingPreviousRequests(false);
    setIsPreviousRequestsShown(true);
    setTimeout(() => {
      previousRequestsScrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

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

      <Text sx={{ fontSize: [1, 5], color: "secondaryText" }}>
        Upload a picture of any plant, and our AI will identify it for you.
      </Text>

      <UploadArea
        responseGenerationStarted={() => {
          setIsGeneratingResponse(true);
          setTimeout(() => {
            resultScrollRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }}
        responseGenerated={(result: Result) => {
          setResult(result);
          setIsGeneratingResponse(false);
          setTimeout(() => {
            resultScrollRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 200);
        }}
      />

      <Box
        sx={{
          color: "tertiaryText",
          fontSize: [0, 2],
          mt: 4,
          textAlign: "center",
        }}
      >
        <Text sx={{ fontWeight: "regular" }}>
          By uploading an image you agree to our{" "}
        </Text>
        <Text sx={{ fontWeight: "semiBold" }}>Terms of Use</Text>
        <Text sx={{ fontWeight: "regular" }}> and </Text>
        <Text sx={{ fontWeight: "semiBold" }}>Privacy Policy</Text>
        <Text sx={{ fontWeight: "regular" }}>.</Text>
      </Box>

      <Box ref={resultScrollRef} />

      {(isGeneratingResponse || result) && (
        <ResultArea
          isGeneratingResponse={isGeneratingResponse}
          result={result}
        />
      )}

      {!isPreviousRequestsShown && (
        <>
          {isFetchingPreviousRequests ? (
            <Spinner
              size={24}
              sx={{ color: "primaryText", mt: [9, 10], height: "44px" }}
            />
          ) : (
            <Button
              variant="secondary"
              sx={{ mt: [9, 10], px: ["auto", 13] }}
              onClick={fetchPreviousRequests}
            >
              Show Previous Requests
            </Button>
          )}
        </>
      )}

      <Box ref={previousRequestsScrollRef} />

      {isPreviousRequestsShown && (
        <PreviousRequests previousRequests={previousRequests} />
      )}

      <Box sx={{ mt: 13 }} />
    </Container>
  );
};

export default Home;
