import { Theme } from "theme-ui";
import pxToRem from "../util/pxToRem";
import remToPx from "../util/remToPx";

const theme: Theme = {
  colors: {
    background: "#F5F9FC",
    cardBackground: "#FFFFFF",
    primaryButton: "#282B2C",
    primaryButtonHover: "#000000",
    secondaryButton: "#0FB573",
    secondaryButtonHover: "#0FAD6E",
    buttonText: "#FFFFFF",
    primaryText: "#282B2C",
    secondaryText: "#7D7F80",
    tertiaryText: "#C6C6C6",
    warning: "#FFB200",
    error: "#FF6141",
    gold: "#FFCF40",
  },

  fonts: {
    body: "Omnes, sans-serif",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  fontSizes: [
    pxToRem(10.5), // 0
    pxToRem(12.5),
    pxToRem(14.5), // 2
    pxToRem(16.5),
    pxToRem(18.5), // 4
    pxToRem(20.5),
    pxToRem(24.5), // 6
    pxToRem(32.5),
  ],

  breakpoints: ["768px"],
  space: [
    pxToRem(0), // 0
    pxToRem(2),
    pxToRem(4), // 2
    pxToRem(6),
    pxToRem(8), // 4
    pxToRem(10),
    pxToRem(12), // 6
    pxToRem(16),
    pxToRem(20), // 8
    pxToRem(24),
    pxToRem(32), // 10
    pxToRem(36),
    pxToRem(48), // 12
    pxToRem(64),
    pxToRem(96), // 14
    pxToRem(128),
  ],
  radii: [
    pxToRem(0), // 0
    pxToRem(2),
    pxToRem(4), // 2
    pxToRem(8),
    pxToRem(12), // 4
    pxToRem(16),
    pxToRem(20), // 6
    pxToRem(64),
    pxToRem(128), // 8
  ],

  buttons: {
    base: {
      color: "buttonText",
      fontWeight: "semiBold",
      py: 6,
      borderRadius: 8,
      "&:active": {
        opacity: "0.9",
      },
      cursor: "pointer",
    },
    primary: {
      variant: "buttons.base",
      bg: "primaryButton",
      "&:hover": {
        bg: "primaryButtonHover",
      },
    },
    secondary: {
      variant: "buttons.base",
      width: (theme: Theme) => [
        `calc(100% - ${remToPx(theme.space?.[8] + "") * 2}px)`,
        "auto",
      ],
      bg: "secondaryButton",
      "&:hover": {
        bg: "secondaryButtonHover",
      },
    },
  },

  cards: {
    primary: {
      bg: "cardBackground",
      width: (theme: Theme) => [
        `calc(100% - ${remToPx(theme.space?.[8] + "") * 2}px)`,
        "680px",
      ],
      borderRadius: 4,
    },
  },

  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "body",
      bg: "background",
      color: "primaryText",
      lineHeight: "1.25",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
  },
};

export default theme;
