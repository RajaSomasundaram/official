/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  basePath: "/offcial", // The repo name
  assetPrefix: "/offcial/", // The repo name
};

module.exports = nextConfig;
