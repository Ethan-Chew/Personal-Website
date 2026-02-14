const nextConfig = {
  experimental: {
    serverMinification: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.ethanchew.com",
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig