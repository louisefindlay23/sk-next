import { SliceZone } from "@prismicio/react";
import { createClient } from "prismicio";

import { TextSlice, RecentPostsSlice } from "components/slices";
import { getLocales } from "lib/getLocales";

export default function Home({ home, recentPosts, locales }) {
  const components = {
    text: TextSlice,
    recent_posts: RecentPostsSlice,
  };
  return (
    <main>
      <SliceZone
        slices={home.data.body}
        components={components}
        context={recentPosts}
      />
    </main>
  );
}

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });
  const [home, recentPosts] = await Promise.all([
    client.getSingle("home", { lang: locale }),
    client.getAllByType("posts", {
      lang: locale,
      pageSize: 3,
    }),
  ]);
  const locales = await getLocales(home, client);
  return {
    props: {
      home,
      recentPosts,
      locales,
    },
  };
}
