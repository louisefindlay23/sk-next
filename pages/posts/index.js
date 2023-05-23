import { createClient } from "prismicio";
import { SliceZone } from "@prismicio/react";

import { HeadingSlice } from "components/slices";
import { PostList } from "components/Layout/components";
import { getLocales } from "lib/getLocales";

import styles from "components/Layout/components/PostList/PostList.module.css";

export default function PostPage({ postPage, posts }) {
  const components = {
    heading: HeadingSlice,
  };
  return (
    <div className={`${styles.boxContainer} ${styles.page}`}>
      <SliceZone slices={postPage.data.body} components={components} />
      <PostList posts={posts} />
    </div>
  );
}

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });
  const [postPage, posts] = await Promise.all([
    client.getByUID("pages", "post", { lang: locale }),
    client.getAllByType("posts", { lang: locale }),
  ]);
  const locales = await getLocales(postPage, client);
  return {
    props: {
      postPage,
      posts,
      locales,
    },
  };
}
