import Select from "react-select";
import Link from "next/link";
import { useLocales } from "context/LocaleContext";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const LangIcon = ({ lang }) => {
  const langCode = lang.substring(3).toLowerCase();
  return <span className={`fi fi-${langCode}`} />;
};

export default function LanguageSelector() {
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
  return (
    <>
      <Select
        options={options}
        defaultValue={options[0]}
        styles={{
          control: (provided) => ({
            ...provided,
            width: "300px",
          }),
        }}
      />
    </>
  );
}
