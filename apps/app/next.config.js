module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
      },
    ],
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `https:${process.env.VERCEL}/api/:path*`,
    },
  ],
};
