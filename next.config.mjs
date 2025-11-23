/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rokbucket.rokomari.io",
      },
      {
        protocol: "https",
        hostname: "www.mobiledokan.co",
      },
      {
        protocol: "https",
        hostname: "cdn.media.amplience.net",
      },
      {
        protocol: "https",
        hostname: "www.sony-asia.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "static-01.daraz.com.bd",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
