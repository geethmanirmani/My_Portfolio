import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? "/My_Portfolio" : "",
  trailingSlash: true,
};

export default nextConfig;
