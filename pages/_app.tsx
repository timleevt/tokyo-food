import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import { UserContext } from "@/context/UserContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(224,7,7,1)",
    },
    info: {
      main: "rgba(0, 0, 0, 0.87)",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Tokyo Foods</title>
        <meta name="description" content="Food recommendations by locals" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-content">
        <UserContext.Provider value="hello from context">
          <Navbar />
          <Component {...pageProps} />
        </UserContext.Provider>
      </div>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}
