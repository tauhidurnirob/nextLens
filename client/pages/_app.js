import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/Theme/theme";
import "../styles/globals.scss";
import Navigation from "../src/Components/Navigation/Navigation";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
