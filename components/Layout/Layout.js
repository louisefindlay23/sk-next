import { useContext } from "react";

import Head from "next/head";

import { Footer, Header } from "./components";
import { SiteContext } from "context/SiteContext";

export default function Layout({ children }) {
  /* Use siteContex to set siteTitle */
  const siteTitle = useContext(SiteContext);
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>
      <div id="app">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
