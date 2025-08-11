// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // disable next/image optimization
  },
};

module.exports = nextConfig;
