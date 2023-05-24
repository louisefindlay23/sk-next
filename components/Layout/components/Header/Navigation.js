import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";
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

  return (
    <nav>
      <ul className={styles.navList}>
        {navigation &&
          navigation.data.menu.map((link) => {
            return (
              <li key={JSON.stringify(link)}>
                {currentLocale != "en-us" ? (
                  <a href={`/${currentLocale}${link.link_url.url}`}>
                    {prismicH.asText(link.link_text)}
                  </a>
                ) : (
                  <PrismicLink field={link.link_url}>
                    {prismicH.asText(link.link_text)}
                  </PrismicLink>
                )}
              </li>
            );
          })}
      </ul>
      <LanguageSelector />
    </nav>
  );
}
