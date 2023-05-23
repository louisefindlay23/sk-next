import { Layout } from "components";
import { PostList } from "components/Layout/components";
import { HeadingSlice } from "components/slices";

import { createClient } from "prismicio";
import { SliceZone } from "@prismicio/react";

import styles from "components/Layout/components/PostList/PostList.module.css";

export default function PostPage({ postPage, posts }) {
  const components = {
    heading: HeadingSlice,
  };
  return (
    <Layout>
      <div className={`${styles.boxContainer} ${styles.page}`}>
        <SliceZone slices={postPage.data.body} components={components} />
        <PostList posts={posts} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const [postPage, posts] = await Promise.all([
    client.getByUID("pages", "post"),
    client.getAllByType("posts"),
  ]);
  return {
    props: {
      postPage,
      posts,
    },
  };
}
