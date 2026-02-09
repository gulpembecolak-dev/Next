import type { NextConfig } from "next";

const repo = "next01";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: `/${repo}`,
  },
};

export default nextConfig;
