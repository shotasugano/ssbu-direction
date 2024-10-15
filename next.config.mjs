/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "" : undefined,
  distDir: "docs",
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
