/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "127.0.0.1",
      "horsplace-content-manager.onrender.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://horsplace-content-manager.onrender.com",
        permanent: true,
        basePath: false,
      },
      {
        source: "/admin/:path*",
        destination: "https://horsplace-content-manager.onrender.com/:path*",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
