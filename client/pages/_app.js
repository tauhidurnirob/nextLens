import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";

import theme from "../src/Theme/theme";
import GlobalStyles from "../src/Theme/globalStyles";
import "../styles/globals.scss";
import store from "../src/redux/store";
import Footer from "./../src/Components/Footer/Footer";
import Navigation from "./../src/Components/Navigation/Navigation";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <CssBaseline />
        <GlobalStyles />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}
