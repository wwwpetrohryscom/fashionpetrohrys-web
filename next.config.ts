import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      {
        source: "/sitemap.xlm",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default config;
