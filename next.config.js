const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: "cataas.com",
      },
    ],
  },
  // compiler: {
  //   styledComponents: true,
  // },
};

module.exports = nextConfig;
