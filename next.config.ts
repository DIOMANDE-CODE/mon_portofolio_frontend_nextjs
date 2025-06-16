import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ['127.0.0.1', 'localhost','192.168.43.32', 'picsum.photos','monportofoliobackend.up.railway.app'],
  },
};

export default nextConfig;
