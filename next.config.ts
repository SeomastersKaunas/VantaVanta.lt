import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/:slug",
        destination: "/produktai/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
