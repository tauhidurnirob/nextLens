import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Head from "next/head";

import theme from "../src/Theme/theme";
import GlobalStyles from "../src/Theme/globalStyles";
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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <Navigation />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
        <Footer />
      </Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
