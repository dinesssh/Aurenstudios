import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = "agency";
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  ...(isGithubActions ? { output: "export" } : {}),
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: !!isGithubActions,
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
