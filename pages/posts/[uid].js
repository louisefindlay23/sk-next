import { SliceZone, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "prismicio";
import { getLocales } from "lib/getLocales";

import {
  HeadingSlice,
  ImageSlice,
  TextSlice,
  CodeSlice,
} from "components/slices";

import styles from "styles/Post.module.css";

export default function Post({ post }) {
  const components = {
    heading: HeadingSlice,
    image: ImageSlice,
    text: TextSlice,
    code: CodeSlice,
  };
  return (
    <main>
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
              <PrismicNextLink
                field={author.author_relationship.data.author_website_link}
              >
                {prismicH.asText(
                  author.author_relationship.data.author_website_text
                )}
              </PrismicNextLink>
            </div>
            <div className={styles.boxImage}>
              <PrismicNextImage
                field={author.author_relationship.data.author_image}
              />
            </div>
          </div>
        ))}
      </footer>
    </main>
  );
}

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });
  const post = await client.getByUID("posts", params.uid, {
    fetchLinks: [
      "authors.author_profile",
      "authors.author_image",
      "authors.author_bio",
      "authors.author_website_link",
      "authors.author_website_text",
    ],
    lang: locale,
  });
  const locales = await getLocales(post, client);
  return {
    props: { post, locales },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const posts = await client.getAllByType("posts", { lang: "*" });
  return {
    paths: posts.map((post) => post.url),
    fallback: false,
  };
}
