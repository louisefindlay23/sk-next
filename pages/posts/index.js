import { Layout } from "components";
import { PostList } from "components/Layout/components";
import { HeadingSlice } from "components/slices";

import { createClient } from "prismicio";
import { SliceZone } from "@prismicio/react";

import styles from "components/Layout/components/PostList/PostList.module.css";

export default function PostPage({ postPage }) {
  const components = {
    heading: HeadingSlice,
  };
  return (
    <Layout>
      <div className={[styles.boxContainer, styles.page]}>
        <SliceZone slices={postPage.data.body} components={components} />
      </div>
      <PostList />
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const postPage = await client.getByUID("pages", "post");
  return {
    props: {
      postPage,
    },
  };
}
