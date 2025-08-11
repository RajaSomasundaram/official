/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

module.exports = nextConfig;
