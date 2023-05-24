import { useState } from "react";
import Select from "react-select";

import { useRouter } from "next/router";
import { useLocales } from "context/LocaleContext";

import styles from "components/Layout/components/Header/Header.module.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

/* Create country flag from flag-icons package */
const LangIcon = ({ lang }) => {
  const langCode = lang.substring(3).toLowerCase();
  return <span className={`fi fi-${langCode}`} />;
};

export default function LanguageSelector() {
  const router = useRouter();
  const { currentLocales } = useLocales();

  /* Set the react-select component's options with the locale values and label as the country flag and locale name */
  const options = currentLocales.map((locale) => ({
    value: locale.lang_name,
    label: (
      <div>
        <LangIcon lang={locale.lang} />
        {locale.lang_name}
      </div>
    ),
  }));

  const [selectedLocale, setSelectedLocale] = useState(options[0]);

  /* Update the select with the new selected option and then retrieve the locale data and route to the document with the new locale */
  const switchLanguage = (selectedOption) => {
    setSelectedLocale(selectedOption);

    const selectedLocale = currentLocales.find(
      (locale) => locale.lang_name === selectedOption.value
    );

    /* Push the current path with the selected locale */
    router.push(router.asPath, null, { locale: selectedLocale.lang });
  };

  return (
    <div className={styles.languageSelect}>
      <Select
        options={options}
        value={selectedLocale}
        styles={{
          control: (provided) => ({
            ...provided,
            width: "300px",
          }),
        }}
        onChange={switchLanguage}
      />
    </div>
  );
}
