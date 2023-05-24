const prismic = require("@prismicio/client");

module.exports = async () => {
  reactStrictMode: true;
  const client = prismic.createClient("onboarding-content-management");
  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);
  return {
    i18n: {
      locales,
      // This is the default locale. It will not be included in URLs.
      defaultLocale: locales[0],
    },
  };
};
