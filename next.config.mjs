/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  webpack: (config) => {
    config.cache = {
      type: 'filesystem',
      compression: false,
      // Removed buildDependencies
    };
    return config;
  },
};

export default nextConfig;
