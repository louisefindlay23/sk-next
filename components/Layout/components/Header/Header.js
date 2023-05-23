import Navigation from "./Navigation";
import styles from "./Header.module.css";
import { useContext } from "react";
import { SiteContext } from "context/SiteContext";

export default function Header() {
  const siteTitle = useContext(SiteContext);
  return (
    <header className={styles.pageHeader}>
      <a href="/">
        <h1>{siteTitle}</h1>
      </a>
      <Navigation />
    </header>
  );
}
