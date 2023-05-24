import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

const repositoryName = "onboarding-content-management";

const routes = [
  { type: "posts", path: "/:lang?/posts/:uid" },
  { type: "home", path: "/:lang?" },
  { type: "pages", path: "/:lang?/:uid" },
];

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
