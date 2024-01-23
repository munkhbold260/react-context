import "@/styles/globals.css";

import { NumberProvider } from "@/context/NumChangeContext";
import ThemeProvider from "@/context/ThemeChangeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NumberProvider>
        <Component {...pageProps} />
      </NumberProvider>
    </ThemeProvider>
  );
}
