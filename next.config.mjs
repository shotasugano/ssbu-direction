/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
