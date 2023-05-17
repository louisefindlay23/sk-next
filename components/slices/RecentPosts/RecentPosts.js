import { PrismicImage, PrismicRichText } from "@prismicio/react";

//import Date from "../../../components/Date/Date.vue";
import styles from "./RecentPosts.module.css";

function RecentPosts({ slice, context }) {
  return (
    <div className={styles.boxContainer}>
      <PrismicRichText field={slice.primary.post_heading} wrapper="section" />
      {context.map((post) => (
        <article key={JSON.stringify(post)}>
          <div className={styles.boxContent}>
            <a href="`/post/${post.uid}`">
              <PrismicRichText field={post.data.body[0].primary.heading} />
            </a>
            // Add Date
            <PrismicRichText
              field={post.data.body[2].primary.text.slice(0, 1)}
            />
            <div className={styles.boxImage}>
              <PrismicImage field={post.data.body[1].primary.image} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default RecentPosts;
