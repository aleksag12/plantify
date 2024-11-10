/** @jsxImportSource theme-ui */
import { Box, BoxProps } from "theme-ui";
import Icon from "./Icon";

interface CustomCheckboxProps extends BoxProps {
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox = ({
  checked,
  onChange,
  ...props
}: CustomCheckboxProps) => {
  return (
    <Box
      {...props}
      onClick={onChange}
      sx={{
        width: ["14px", "20px"],
        height: ["14px", "20px"],
        border: ["1px solid", "2px solid"],
        borderColor: "primaryText",
        borderRadius: 6,
        background: checked ? "primaryText" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.2s",
        cursor: "pointer",
      }}
    >
      {checked && <Icon name="check" color="buttonText" size={[8, 12]} />}
    </Box>
  );
};

export default CustomCheckbox;
