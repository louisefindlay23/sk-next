import { useState } from "react";
import Select from "react-select";

import { useRouter } from "next/router";
import { useLocales } from "context/LocaleContext";

import "/node_modules/flag-icons/css/flag-icons.min.css";

// TODO: See currency code (and possibly React-Select docs) to use useEffect and useState with onChange to update select values and then redirect to new locale.url

const LangIcon = ({ lang }) => {
  const langCode = lang.substring(3).toLowerCase();
  return <span className={`fi fi-${langCode}`} />;
};

export default function LanguageSelector() {
  const router = useRouter();
  const { currentLocales } = useLocales();

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

  const switchLanguage = (selectedOption) => {
    setSelectedLocale(selectedOption);

    const selectedLocale = currentLocales.find(
      (locale) => locale.lang_name === selectedOption.value
    );
    console.info(
      `Current url is: ${router.asPath} and new url will be ${selectedLocale.url}`
    );

    //router.replace(selectedLocale.url).then(() => router.reload());
    window.location.href = `${router.basePath}${selectedLocale.url}`;
  };

  return (
    <>
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
    </>
  );
}
