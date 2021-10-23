import { createTheme, responsiveFontSizes } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});
const theme = createTheme({
  palette: {
    primary: {
      main: "#911f27",
      light: "#c7514f",
      dark: "#5d0000",
    },
    secondary: {
      main: "#face7f",
      light: "#ffffaf",
      dark: "#c59d51",
    },
    text: {
      secondary: "#545658",
    },
  },
  typography: {
    fontFamily: "Tajawal",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1: {
      fontSize: "1.1rem",
    },
    body2: {
      fontSize: "0.957rem",
    },
  },
  direction: "rtl",
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            fontFamily: "Tajawal",
          },
        },
      },
      variants: [
        {
          props: { variant: "filled" },
          style: {
            "& .MuiInputBase-root:after": {
              borderBottomColor: "#911f27",
            },
          },
        },
        {
          props: { variant: "standard" },
          style: {
            "& .MuiInputBase-root:after": {
              borderBottomColor: "#911f27",
            },
            "& .MuiInputBase-root:hover": {
              borderBottomColor: "#911f27 !important",
            },
          },
        },
      ],
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontSize: "1.0rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px 7px 7px 7px",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          [breakpoints.up("sm")]: {
            "@media all": {
              minHeight: 67,
            },
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
