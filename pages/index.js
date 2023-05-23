import { RecentPostsSlice, TextSlice } from "components/slices";

import { createClient } from "prismicio";
import { SliceZone } from "@prismicio/react";

export default function Home({ home, recentPosts }) {
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

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const [home, recentPosts] = await Promise.all([
    client.getSingle("home"),
    client.getAllByType("posts", {
      pageSize: 3,
    }),
  ]);
  return {
    props: {
      home,
      recentPosts,
    },
  };
}
