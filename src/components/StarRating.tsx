/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import { useState } from "react";
import Icon from "./common/Icon";

interface StarRatingProps {
  onRate?: (rating: number) => void;
}

const StarRating = ({ onRate }: StarRatingProps) => {
  const [rating, setRating] = useState(0);

  const handleRating = (starIndex: number) => {
    setRating(starIndex);
    if (onRate) {
      onRate(starIndex);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mt: 6 }}>
      {Array.from({ length: 5 }, (_, index) => (
        <Box
          key={index}
          onClick={() => handleRating(index + 1)}
          sx={{ cursor: "pointer" }}
        >
          <Icon
            name={index < rating ? "star-filled" : "star"}
            size={20}
            color={index < rating ? "gold" : "tertiaryText"}
            sx={{
              transition: "color 0.4s",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default StarRating;
