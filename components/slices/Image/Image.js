// TODO: Update all PrismicImage to use PrismicNextImage
import { PrismicNextImage } from "@prismicio/next";
import styles from "./Image.module.css";

function Image({ slice }) {
  return (
    <PrismicNextImage
      className={styles.featuredImage}
      field={slice.primary.image}
    />
  );
}

export default Image;
