import { useContext } from "react";
import { SiteContext } from "context/SiteContext";

import styles from "./Footer.module.css";

export default function Footer() {
  const siteTitle = useContext(SiteContext);
  return (
    <footer className={styles.pageFooter}>
      <p>
        © {new Date().getFullYear()} {siteTitle}
      </p>
    </footer>
  );
}
