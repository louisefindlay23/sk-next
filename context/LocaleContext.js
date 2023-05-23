import { createContext, useContext, useState } from "react";

const LocaleContext = createContext(null);

export function LocaleProvider({ children, locales }) {
  const [currentLocales, setCurrentLocales] = useState(locales);
  return (
    <LocaleContext.Provider
      value={{
        currentLocales,
        setCurrentLocales,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocales() {
  const context = useContext(LocaleContext);

  if (!context)
    throw new Error("useLocales must be used inside a `LocaleProvider`");

  return context;
}
