/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/sale',
        destination: 'https://kylejs.notion.site/Moving-Out-Sale-3bc9290d98334ca69ca5cb8ea85575b3',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
