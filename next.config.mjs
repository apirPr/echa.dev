/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
      },
    ],
    dangerouslyAllowSVG: true,
  }
};

export default nextConfig;
