import { Inter, Arvo } from "next/font/google";

import { Layout } from "components";
import { SiteProvider } from "context/SiteContext";
import { LocaleProvider } from "context/LocaleContext";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const arvo = Arvo({
  weight: ["700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const { locales } = pageProps;
  return (
    <SiteProvider>
      <LocaleProvider locales={locales}>
        <Layout>
          <style jsx global>
            {`
              :root {
                --heading-font: ${arvo.style.fontFamily};
                --body-font: ${inter.style.fontFamily};
              }
            `}
          </style>
          <Component {...pageProps} />
        </Layout>
      </LocaleProvider>
    </SiteProvider>
  );
}
