import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";

import theme from "../src/Theme/theme";
import "../styles/globals.scss";
import Navigation from "./../src/Components/Navigation/Navigation";
import Footer from "./../src/Components/Footer/Footer";
import store from "../src/redux/store";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </Provider>
  );
}
