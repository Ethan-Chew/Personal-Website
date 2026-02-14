const nextConfig = {
  experimental: {
    serverMinification: false,
  },
  outputFileTracing: true,
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