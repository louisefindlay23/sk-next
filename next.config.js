/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/post",
        destination: "/posts",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
