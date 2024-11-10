/** @jsxImportSource theme-ui */
import IcoMoon from "icomoon-react";
import iconSet from "../../assets/icons/selection.json";
import { Box, BoxProps } from "theme-ui";

interface IconProps extends BoxProps {
  name: string;
  size?: number | number[];
  color?: string;
}

const Icon = ({
  name,
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) => {
  return (
    <Box
      {...props}
      sx={{
        fontSize: size,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IcoMoon iconSet={iconSet} icon={name} size="1em" color="currentColor" />
    </Box>
  );
};

export default Icon;
