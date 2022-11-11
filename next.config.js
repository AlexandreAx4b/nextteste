// next.config.js

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
