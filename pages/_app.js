import { SiteProvider } from "context/SiteContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  );
}
