import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2499ef",
    },
    secondary: {
      main: "#8ca3ba",
    },
    neutral: {
      main: "#72849a",
    },
    warning: {
      main: "#ffc675",
    },
    danger: {
      main: "#ff316f",
    },
    success:{
      main:"#36d190"
    },
    background: {
      default: "#f3f4f9",
    },
  },
  typography: {
    fontFamily: ["SamsungSans", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2499ef",
    },
    secondary: {
      main: "#8ca3ba",
    },
    neutral: {
      main: "#72849a",
    },
    warning: {
      main: "#ffc675",
    },
    danger: {
      main: "#ff316f",
    },
    success:{
      main:"#36d190"
    },
    background: {
      default: "#171c24",
    },
  },

  typography: {
    fontFamily: ["SamsungSans", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["SamsungSans", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
