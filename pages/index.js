import { SliceZone, PrismicLink } from "@prismicio/react";
import { createClient } from "prismicio";

import { TextSlice, RecentPostsSlice } from "components/slices";
import { getLocales } from "lib/getLocales";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const LangIcon = ({ lang }) => {
  const langCode = lang.substring(3).toLowerCase();
  return <span className={`fi fi-${langCode}`} />;
};

export default function Home({ home, recentPosts, locales }) {
  console.info(locales);
  const components = {
    text: TextSlice,
    recent_posts: RecentPostsSlice,
  };
  return (
    <main>
      <SliceZone
        slices={home.data.body}
        components={components}
        context={recentPosts}
      />
      {locales.map((locale) => (
        <li key={locale.id}>
          <LangIcon lang={locale.lang} />
          <PrismicLink href={locale.url}>{locale.lang_name}</PrismicLink>
        </li>
      ))}
    </main>
  );
}

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });
  const [home, recentPosts] = await Promise.all([
    client.getSingle("home", { lang: locale }),
    client.getAllByType("posts", {
      lang: locale,
      pageSize: 3,
    }),
  ]);
  const locales = await getLocales(home, client);
  return {
    props: {
      home,
      recentPosts,
      locales,
    },
  };
}
