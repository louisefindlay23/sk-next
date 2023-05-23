import Link from "next/link";
import { useLocales } from "context/LocaleContext";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const LangIcon = ({ lang }) => {
  const langCode = lang.substring(3).toLowerCase();
  return <span className={`fi fi-${langCode}`} />;
};

export default function LanguageSelector() {
  const { currentLocales } = useLocales();
  return (
    <ul>
      {currentLocales.map((locale) => (
        <li key={locale.id}>
          <LangIcon lang={locale.lang} />
          <Link href={locale.url}>{locale.lang_name}</Link>
        </li>
      ))}
    </ul>
  );
}
