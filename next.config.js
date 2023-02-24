const withPWA = require('next-pwa');
const { resolveBackendUrl } = require('./lib/urls');

const backendUrl = resolveBackendUrl(
  process.env.NEXT_PUBLIC_API_URL,
  process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5000' : 'https://api.revenue.et',
);

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development' || process.env.DOCKER_BUILD === '1',
  },
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: false,
  productionBrowserSourceMaps: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    BACKEND_URL: backendUrl.endsWith('/') ? backendUrl : `${backendUrl}/`,
  },
  images: {
    domains: [
      'revenue-docs.s3.eu-west-1.amazonaws.com',
      'revenue-cdn.s3.eu-west-1.amazonaws.com',
    ],
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.parallelism = 1;
    }
    return config;
  },
});
