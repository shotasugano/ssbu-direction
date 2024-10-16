/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // build時にssbu-directionがbasePathになるのでローカルでbuild、検証したいときはコメントアウトする
  basePath:
    process.env.NODE_ENV === "production" ? "/ssbu-direction" : undefined,
  // build時にssbu-directionがassetPrefixになるのでローカルでbuild、検証したいときはコメントアウトする.
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/ssbu-direction" : undefined,
  distDir: "docs",
  appDir: true,
  reactStrictMode: true,
};

export default nextConfig;
