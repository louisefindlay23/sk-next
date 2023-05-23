import Head from "next/head";
import { useContext } from "react";
import { Footer, Header } from "./components";
import { SiteContext } from "context/SiteContext";

export default function Layout({ children }) {
  const siteTitle = useContext(SiteContext);
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="app">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
