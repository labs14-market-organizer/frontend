import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
	primary: {
		light: "#7ddd69",
		main: "#478529",
		dark: "#2f6615",
		contrastText: "#fff"
	  },
	  secondary: {
		light: "#008ba3",
		main: "#044d4c",
		dark: "#002e2d",
		contrastText: "#fff"
	  },
	  accent: {
		main: "#ce8400"
	  },
	  error: {
		main: "#b21b2d"
	  },
	  info: {
		main: "#2072f3"
	  },
	  success: {
		main: "#48a932"
	  },
	  warning: {
		main: "#eabc34"
	  },
  },
    

    typography: {
      useNextVariants: true,
      // Use the system font instead of the default Roboto font.
      fontFamily: [
		"Roboto",
        "Raleway",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        "Pacifico"
      ].join(",")
    }
  
});