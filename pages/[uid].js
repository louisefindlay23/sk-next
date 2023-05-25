import { SliceZone } from "@prismicio/react";
import { createClient } from "prismicio";

import { HeadingSlice, ImageSlice, TextSlice } from "components/slices";

import { getLocales } from "lib/getLocales";

export default function Page({ page }) {
  const components = {
    heading: HeadingSlice,
    image: ImageSlice,
    text: TextSlice,
  };
  return (
    <main className="page">
      <SliceZone slices={page.data.body} components={components} />
    </main>
  );
}

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("pages", params.uid, { lang: locale });
  const locales = await getLocales(page, client);
  return {
    props: { page, locales },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType("pages", { lang: "*" });
  return {
    paths: pages.map((page) => page.url),
    fallback: false,
  };
}
