import { extendTheme } from "native-base";

// extend the theme
type MyThemeType = typeof BaseTheme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export const BaseTheme = extendTheme({
  components: {
    Text: {
      defaultProps: {
        fontSize: "sm",
      },
    },
    Input: {
      defaultProps: {
        borderColor: "warmGray.400",
        fontSize: "sm",
      },
    },
  },
  colors: {
    slateGray: {
      50: "#f3f2f2",
      100: "#d8d8d8",
      200: "#bebebe",
      300: "#a3a3a3",
      400: "#898989",
      500: "#6f6f6f",
      600: "#565656",
      700: "#3e3e3e",
      800: "#252525",
      900: "#0d0c0d",
    },
  },
  Pressable: {
    cursor: "pointer",
  },

  config: {
    initialColorMode: "light",
  },
});
