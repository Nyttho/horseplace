/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "127.0.0.1",
      "horsplace-content-manager.onrender.com",
    ], // Notez la suppression de https://
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://horsplace-content-manager.onrender.com",
        permanent: true,
      },
      {
        source: "/admin/:path*",
        destination: "https://horsplace-content-manager.onrender.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
