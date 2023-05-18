import Navigation from "./Navigation";
import styles from "./Header.module.css";
const siteTitle = "The Sock Kingdom";

export default function Header() {
  return (
    <header className={styles.pageHeader}>
      <a href="/">
        <h1>{siteTitle}</h1>
      </a>
      <Navigation />
    </header>
  );
}
