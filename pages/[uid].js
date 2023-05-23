import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "prismicio";

import { HeadingSlice, ImageSlice, TextSlice } from "components/slices";

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

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("pages", params.uid);
  return {
    props: { page },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType("pages");
  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  };
}
