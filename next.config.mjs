/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "127.0.0.1", "your-strapi-domain.com"], // Ajoutez "localhost" ici
  },
};

export default nextConfig;
