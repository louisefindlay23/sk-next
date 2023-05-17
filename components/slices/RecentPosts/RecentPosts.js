import { PrismicImage, PrismicRichText } from "@prismicio/react";

import Date from "components/Layout/components/Date/Date";
import styles from "./RecentPosts.module.css";

function RecentPosts({ slice, context }) {
  return (
    <div className={styles.boxContainer}>
      <section>
        <PrismicRichText field={slice.primary.post_heading} />
      </section>
      {context.map((post) => (
        <article key={JSON.stringify(post)}>
          <div className={styles.boxContent}>
            <a href="`/post/${post.uid}`">
              <PrismicRichText field={post.data.body[0].primary.heading} />
            </a>
            <Date postDate={post.first_publication_date} />
            <PrismicRichText
              field={post.data.body[2].primary.text.slice(0, 1)}
            />
          </div>
          <div className={styles.boxImage}>
            <PrismicImage field={post.data.body[1].primary.image} />
          </div>
        </article>
      ))}
    </div>
  );
}

export default RecentPosts;
