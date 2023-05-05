import Head from "next/head";

import { createClient } from "../prismicio";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { format } from "date-fns";

export default function Home({ home, posts }) {
  return (
    <>
      <Head>
        <title>The Sock Kingdom</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="page-content">
        <PrismicRichText field={home.data.overview_text} />
      </main>
      <div id="box-container">
        <h2>Posts</h2>
        {posts?.map((post) => {
          const coverImage = prismicH.asImageWidthSrcSet(post.data.cover_image);
          return (
            <article key={JSON.stringify(post.data)}>
              <div className="box-content">
                <a href={`/post/${post.uid}`}>
                  <PrismicRichText field={post.data.post_title} />
                </a>
                <time
                  dateTime={prismicH
                    .asDate(post.first_publication_date)
                    .toISOString()}
                >
                  {/* Use date-fns to extract only date and format to shortened version */}
                  {format(
                    prismicH.asDate(post.first_publication_date),
                    "dd/MM/yyyy"
                  )}
                </time>
                <PrismicRichText field={post.data.post_content.slice(0, 1)} />
              </div>
              <div className="box-image">
                <img
                  src={coverImage.src}
                  srcSet={coverImage.srcset}
                  alt={coverImage.alt}
                />
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const [home, posts] = await Promise.all([
    client.getSingle("home"),
    client.getAllByType("posts"),
  ]);
  return {
    props: {
      home,
      posts,
    },
  };
}
