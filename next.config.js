const prismic = require("@prismicio/client");

module.exports = async () => {
  reactStrictMode: true;
  const client = prismic.createClient("onboarding-content-management");
  const repository = await client.getRepository();
  const locales = repository.languages.map((lang) => lang.id);
  return Promise.resolve({
    redirects: async () => {
      return [
        {
          source: "/post",
          destination: "/posts",
          permanent: true,
        },
      ];
    },
    i18n: {
      locales,
      defaultLocale: locales[0],
    },
  });
};
