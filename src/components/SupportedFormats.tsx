/** @jsxImportSource theme-ui */
import { Box, Text } from "theme-ui";

const SupportedFormats = () => {
  const supportedFormats = ["png", "jpeg", "jpg", "webp"];

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {supportedFormats.map((format) => (
        <Box
          key={format}
          sx={{
            border: "solid 1px",
            borderColor: "tertiaryText",
            borderRadius: 2,
            display: "flex",
            paddingY: 1,
            paddingX: 2,
          }}
        >
          <Text sx={{ fontSize: [0, 1], color: "secondaryText" }}>
            {format}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default SupportedFormats;
