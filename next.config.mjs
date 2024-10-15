/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/ssbu-direction" : undefined,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/ssbu-direction" : undefined,
  distDir: "docs",
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
