// import React from "react";
// import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { Provider } from "react-redux";

// import theme from "../src/Theme/theme";
// import GlobalStyles from "../src/Theme/globalStyles";
// import "../styles/globals.scss";
// import Navigation from "./../src/Components/Navigation/Navigation";
// import Footer from "./../src/Components/Footer/Footer";
// import store from "../src/redux/store";

// export default function MyApp({ Component, pageProps }) {
//   React.useEffect(() => {
//     const jssStyles = document.querySelector("#jss-server-side");
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <Provider store={store}>
//       <Navigation />
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <GlobalStyles />
//         <Component {...pageProps} />
//       </ThemeProvider>
//       <Footer />
//     </Provider>
//   );
// }

import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";

import theme from "../src/Theme/theme";
import GlobalStyles from "../src/Theme/globalStyles";
import "../styles/globals.scss";
import Navigation from "./../src/Components/Navigation/Navigation";
import Footer from "./../src/Components/Footer/Footer";
import store from "../src/redux/store";

export default function MyApp({Component, pageProps}) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        {/* <Navigation /> */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
        {/* <Footer /> */}
      </Provider>
    </React.Fragment>
  );
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };
