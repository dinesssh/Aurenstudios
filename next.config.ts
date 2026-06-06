import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || "Aurenstudios";
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  ...(isGithubActions ? { output: "export" } : {}),
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: !!isGithubActions,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
