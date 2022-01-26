'use strict'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ["www.notion.so", "images.unsplash.com"]
  },
  async redirects() {
    return [
      // redirect the index page to our notion test suite
      {
        source: '/',
        destination: '/c21c68f4f56a45d3974824913639d3a0',
        // don't set permanent to true because it will get cached by the browser
        // while developing on localhost
        permanent: false
      }
    ]
  }
})
