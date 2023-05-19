import { createClient } from "prismicio";
import { SliceZone, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";

import { Layout } from "components";
import {
  HeadingSlice,
  ImageSlice,
  TextSlice,
  CodeSlice,
} from "components/slices";

import styles from "./Post.module.css";

export default function Post({ post }) {
  const components = {
    heading: HeadingSlice,
    image: ImageSlice,
    text: TextSlice,
    code: CodeSlice,
  };
  return (
    <Layout>
      <article>
        <h2>Post</h2>
        <SliceZone slices={post.data.body} components={components} />
      </article>
      <footer className={styles.boxContainer}>
        <h3>Authors</h3>
        {/* Render linked authors from grouped content relationship --> */}
        {post.data.authors.map((author) => (
          <div key={JSON.stringify(author)}>
            <div className={styles.boxContent} key={JSON.stringify(author)}>
              <PrismicRichText
                field={author.author_relationship.data.author_name}
              />
              <PrismicRichText
                field={author.author_relationship.data.author_bio}
              />
              <a href={author.author_relationship.data.author_website_link.url}>
                {prismicH.asText(
                  author.author_relationship.data.author_website_text
                )}
              </a>
            </div>
            <div className={styles.boxImage}>
              <PrismicNextImage
                field={author.author_relationship.data.author_image}
              />
            </div>
          </div>
        ))}
      </footer>
    </Layout>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const post = await client.getByUID("posts", params.uid, {
    fetchLinks: [
      "authors.author_profile",
      "authors.author_image",
      "authors.author_bio",
      "authors.author_website_link",
      "authors.author_website_text",
    ],
  });
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  // TODO: How do I use /post instead of /posts?
  const client = createClient();
  const posts = await client.getAllByType("posts");
  return {
    paths: posts.map((post) => prismicH.asLink(post)),
    fallback: true,
  };
}
