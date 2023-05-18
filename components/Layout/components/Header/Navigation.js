import { useEffect, useState } from "react";

import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";
import { createClient } from "prismicio";
import styles from "./Header.module.css";

export default function Navigation() {
  const [navigation, setNavigation] = useState();
  useEffect(() => {
    const getNavigation = async () => {
      const client = createClient();
      const navigationMenu = await client.getSingle("navigation");
      setNavigation(navigationMenu);
    };
    getNavigation();
  }, []);

  return (
    <nav>
      <ul className={styles.navList}>
        {navigation &&
          navigation.data.menu.map((link) => {
            return (
              <li key={JSON.stringify(link)}>
                <PrismicLink field={link.link_url}>
                  {prismicH.asText(link.link_text)}
                </PrismicLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
