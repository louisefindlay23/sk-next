import styles from "./Footer.module.css";

export default function Footer() {
  const siteTitle = "The Sock Kingdom";
  return (
    <footer className={styles.pageFooter}>
      <p>
        © {new Date().getFullYear()} {siteTitle}
      </p>
    </footer>
  );
}
