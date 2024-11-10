/** @jsxImportSource theme-ui */

import { Box, Button, Text } from "theme-ui";
import SupportedFormats from "./SupportedFormats";
import Icon from "./common/Icon";
import { useRef, useState } from "react";
import CustomCheckbox from "./common/Checkbox";
import { Result } from "../types/result";
import { identifyPlant } from "../backendSimulation/backendSimulation";

interface UploadAreaProps {
  responseGenerationStarted: () => void;
  responseGenerated: (result: Result) => void;
}

const UploadArea = ({
  responseGenerationStarted,
  responseGenerated,
}: UploadAreaProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [isIncludingCoordinates, setIsIncludingCoordinates] = useState(false);

  const handleUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleTakePhotoClick = () => {
    cameraInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    responseGenerationStarted();
    const file = event.target.files?.[0];
    if (file) {
      const response = await identifyPlant(
        file.name,
        URL.createObjectURL(file)
      );
      responseGenerated(response);
    }
  };

  const handleIncludingCoordinatesChange = () => {
    setIsIncludingCoordinates((prev) => !prev);
  };

  return (
    <Box
      variant="cards.primary"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: [4, 6],
        py: [10, 12],
        px: 8,
      }}
    >
      <Button
        variant="primary"
        onClick={handleUploadButtonClick}
        sx={{
          mb: [2, 4],
          pr: [8, 9],
          pl: [7, 8],
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Icon name="progress-upload" size={20} color="buttonText" />
        Upload Image
      </Button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".png, .jpg, .jpeg, .webp"
      />

      <input
        type="file"
        ref={cameraInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".png, .jpg, .jpeg, .webp"
        capture="environment"
      />

      <Box
        sx={{
          display: "flex",
          gap: [1, 2],
          alignItems: "center",
          justifyContent: "center",
          fontSize: [1, 4],
          fontWeight: "medium",
          textAlign: "center",
          mb: [6, 9],
        }}
      >
        <Text sx={{ color: "secondaryText" }}>or </Text>
        <Text
          onClick={handleTakePhotoClick}
          sx={{
            color: "primaryText",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Take a photo
        </Text>

        <Icon
          name="camera"
          size={[12, 16]}
          color="primaryText"
          sx={{ ml: 1 }}
        />
      </Box>

      <Text sx={{ fontSize: [1, 3], color: "secondaryText", mb: [7, 10] }}>
        (up to resolution 5,000 x 5,000 px)
      </Text>

      <Text sx={{ fontSize: [1, 3], color: "secondaryText", mb: [2, 4] }}>
        Supported formats:
      </Text>

      <SupportedFormats />

      <Box sx={{ display: "flex", alignItems: "center", mt: [7, 9] }}>
        <CustomCheckbox
          checked={isIncludingCoordinates}
          onChange={handleIncludingCoordinatesChange}
          sx={{ mr: [2, 3] }}
        />
        <Text
          sx={{ color: "primaryText", fontWeight: "medium", fontSize: [1, 4] }}
        >
          Include coordinates
        </Text>
      </Box>
    </Box>
  );
};

export default UploadArea;
