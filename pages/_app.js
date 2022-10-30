import "../styles/globals.css";
import "antd/dist/antd.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-quill/dist/quill.snow.css";
import useAuth from "../components/auth/hook/use-auth";
import Auth from "../components/auth/log-in";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&display=swap');

@font-face {
  font-family: "Wremena";
  src: url("/fonts/WremenaRegular.woff2") format("woff2"),
       url("/fonts/WremenaRegular.woff") format("woff");
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  *[data-font="wremena"] {
    font-family: 'Wremena', sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  const needsAuth = !useAuth();

  return (
    <>
      <GlobalStyle />

      {needsAuth && <Auth />}
      {!needsAuth && <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
