import { createContext, useEffect, useState } from "react";

import * as prismicH from "@prismicio/helpers";
import { createClient } from "prismicio";
const client = createClient();

export const SiteContext = createContext(null);

export const SiteProvider = ({ children }) => {
  const [siteTitle, setSiteTitle] = useState(null);
  useEffect(() => {
    client
      .getSingle("navigation")
      .then((response) => {
        const siteTitle = prismicH.asText(response.data.site_title);
        setSiteTitle(siteTitle);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <SiteContext.Provider value={siteTitle}>{children}</SiteContext.Provider>
  );
};

export default { SiteContext, SiteProvider };
