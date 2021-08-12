module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/getAPI",
        destination: "https://api.notion.com"
      }
    ]
  }
}