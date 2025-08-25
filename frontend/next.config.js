/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  images: {
    domains: ['localhost'],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  },
  // Configuration pour utiliser le répertoire src
  distDir: '.next',
  // Assure que Next.js trouve le répertoire app dans src
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Configuration explicite pour le répertoire src
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ajouter des alias pour les imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    }
    return config
  },
}

const path = require('path')
module.exports = nextConfig
