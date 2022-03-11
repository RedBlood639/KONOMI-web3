import BaseColors from "./colors";
import BaseFonts from "./fonts";
import MediaSize from "./mediaSize";
export const defaultTheme = {
  mediaSize: {
    ...MediaSize,
  },
  colors: {
    ...BaseColors,
  },
  fonts: {
    ...BaseFonts,
  },
  transition: {
    normal: "all .1s ease-in-out",
  },
};
