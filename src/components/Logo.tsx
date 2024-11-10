/** @jsxImportSource theme-ui */
import { Image } from "theme-ui";

const Logo = () => (
  <Image
    src="/logo233.png"
    srcSet="/logo233.png 320w, /logo410.png 768w"
    alt="Logo"
    sx={{
      maxWidth: ["233px", "410px"],
      mt: [13, 15],
      mb: [9, 10],
    }}
  />
);

export default Logo;
