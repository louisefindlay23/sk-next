import { useState, useCallback } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Date from "components/Layout/components/Date/Date";
import styles from "./PostList.module.css";

function PostList({ posts }) {
  /* Use first post as default */
  const [showPosts, setPosts] = useState(posts.slice(0, 1));
  const [postPage, setPostPage] = useState(0);

  /* Get the last post */
  const getPreviousPosts = useCallback(() => {
    const previousPosts = posts.slice(postPage - 1, postPage);
    const previousPage = postPage - 1;
    setPosts(previousPosts);
    setPostPage(previousPage);
  }, [posts, postPage]);

  /* Get the next post */
  const getNextPosts = useCallback(() => {
    const nextPosts = posts.slice(postPage + 1, postPage + 2);
    const nextPage = postPage + 1;
    setPosts(nextPosts);
    setPostPage(nextPage);
  }, [posts, postPage]);

  return (
    <>
      {showPosts.map((post) => (
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
      {/* Pagination buttons */}
      <div className={styles.pagination}>
        <button onClick={getPreviousPosts} disabled={postPage === 0}>
          Previous
        </button>
        <button onClick={getNextPosts} disabled={postPage === posts.length - 1}>
          Next
        </button>
      </div>
    </>
  );
}

export default PostList;
