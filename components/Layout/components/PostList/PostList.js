// TODO: Query all posts at once and then selectively return for Previous and Next buttons. Also, /page/1 etc. or ?page=1.
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Date from "components/Layout/components/Date/Date";
import styles from "./PostList.module.css";

function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <article key={JSON.stringify(post.data)}>
          <div className={styles.boxContent}>
            <PrismicLink document={post}>
              <PrismicRichText field={post.data.body[0].primary.heading} />
            </PrismicLink>
            <Date postDate={post.first_publication_date} />
            {/* Slice the post's first paragraph for the excerpt */}
            <PrismicRichText
              field={post.data.body[2].primary.text.slice(0, 1)}
            />
          </div>
          <div className={styles.boxImage}>
            <PrismicNextImage field={post.data.body[1].primary.image} />
          </div>
        </article>
      ))}
    </>
  );
}

export default PostList;
