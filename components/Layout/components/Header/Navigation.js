import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import * as prismicH from "@prismicio/helpers";
import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "prismicio";

import LanguageSelector from "../LanguageSelector";

import styles from "./Header.module.css";

export default function Navigation() {
  const router = useRouter();
  const [navigation, setNavigation] = useState();

  useEffect(() => {
    const getNavigation = async () => {
      const client = createClient();
      const navigationMenu = await client.getSingle("navigation");
      setNavigation(navigationMenu);
    };
    getNavigation();
  }, []);

  if (!navigation) {
    return null;
  }

  const currentLocale = router.locale;
  console.info(currentLocale);
  // TODO: Use PrismicNextLink everywhere

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navigation &&
          navigation.data.menu.map((link) => {
            return (
              <li key={JSON.stringify(link)}>
                <PrismicNextLink field={link.link_url} locale={currentLocale}>
                  {prismicH.asText(link.link_text)}
                </PrismicNextLink>
              </li>
            );
          })}
      </ul>
      <LanguageSelector />
    </nav>
  );
}
