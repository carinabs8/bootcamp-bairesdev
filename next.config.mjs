/** @type {import('next').NextConfig} */
const recipeDomain = process.env.REACT_APP_RECIPE_DOMAIN || 'http://localhost:3001';

const nextConfig = {
   async rewrites() {
    return [
      {
        source: '/recipes/detail/:slug',
        destination: `${recipeDomain}/recipes/:slug`
      },
    ]
  },
};

export default nextConfig;
