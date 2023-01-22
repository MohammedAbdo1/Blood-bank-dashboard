import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import "../styles/Table.css";
import { theme } from "../theme";
import YEBBLayout from "./../components/yebbLayout";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [initialApp, setInitialApp] = useState(false);

  useEffect(() => {
    setInitialApp(true);
  }, []);
  if (!initialApp) return <></>;
  return (
    <ThemeProvider theme={theme}>
      <YEBBLayout>
        <Component {...pageProps} />
      </YEBBLayout>
    </ThemeProvider>
  );
}
