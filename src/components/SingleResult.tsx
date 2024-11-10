/** @jsxImportSource theme-ui */
import { Box, Text } from "theme-ui";
import { Result } from "../types/result";
import Icon from "./common/Icon";
import StarRating from "./StarRating";

interface SingleResultProps {
  result: Result | undefined;
  isAdmin?: boolean;
}

const SingleResult = ({ result, isAdmin }: SingleResultProps) => {
  return (
    <Box
      variant="cards.primary"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: 13,
        pb: [10, 11],
        pt: 0,
        px: [9, 12],
      }}
    >
      <Box
        sx={{
          background: "background",
          position: "relative",
          top: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: 8,
          outline: "solid",
          outlineWidth: "12px",
          outlineColor: "background",
          overflow: "hidden",
        }}
      >
        <img
          src={result?.imageUrl}
          alt="Plant"
          style={{
            width: "120px",
            height: "120px",
            objectFit: "cover",
          }}
        />
      </Box>

      {!result?.isIdentified && (
        <Box
          sx={{
            display: "flex",
            position: "relative",
            top: "-58px",
            width: "40px",
            height: "40px",
            background: "warning",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="info" color="buttonText" size={24} />
        </Box>
      )}

      <Text
        sx={{
          fontSize: [4, 6],
          fontWeight: "medium",
          mt: result?.isIdentified ? "-12px" : "-48px",
        }}
      >
        {result?.isIdentified
          ? result?.plant?.name
          : "We couldn’t identify this plant"}
      </Text>

      {result?.isIdentified && (
        <Text
          sx={{
            fontSize: [1, 3],
            mt: [1, 2],
          }}
        >
          {result.plant?.scientificName}
        </Text>
      )}

      {result?.isIdentified && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            height: ["26px", "36px"],
            background: result.plant?.isEndangered
              ? "error"
              : "secondaryButton",
            borderRadius: 8,
            pr: [5, 7],
            pl: [4, 6],
            mb: 6,
            mt: [4, 6],
          }}
        >
          <Icon
            name={
              result.plant?.isEndangered ? "warning" : "check-circle-regular"
            }
            size={[12, 16]}
            color="buttonText"
          />
          <Text
            sx={{
              fontSize: [0, 2],
              color: "buttonText",
              fontWeight: "medium",
            }}
          >
            {result.plant?.isEndangered ? "Endangered" : "Not Endangered"}
          </Text>
        </Box>
      )}

      <Text
        sx={{
          fontSize: [1, 3],
          color: "secondaryText",
          mt: result?.isIdentified ? 0 : 2,
        }}
      >
        {result?.isIdentified
          ? result?.plant?.description
          : "Some plants are harder to identify. Try a clearer image."}
      </Text>

      {isAdmin && <StarRating />}
    </Box>
  );
};

export default SingleResult;
