import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoadScript } from "@react-google-maps/api";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(224,7,7,1)",
    },
    info: {
      main: "rgba(0, 0, 0, 0.87)",
    }
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        libraries={['places']}
      >
        <Component {...pageProps} />
      </LoadScript>
    </ThemeProvider>
  );
}
