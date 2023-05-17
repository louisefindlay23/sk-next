import { Layout } from "components";

import TextSlice from "components/slices/Text/Text";
import RecentPostsSlice from "components/slices/RecentPosts/RecentPosts";

import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";

export default function Home({ home, recentPosts }) {
  const components = {
    text: TextSlice,
    recent_posts: RecentPostsSlice,
  };
  return (
    <Layout>
      <main>
        <SliceZone
          slices={home.data.body}
          components={components}
          context={recentPosts}
        />
      </main>
      <footer id="page-footer">
        <p>© {new Date().getFullYear()} The Sock Kingdom</p>
      </footer>
    </Layout>
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
