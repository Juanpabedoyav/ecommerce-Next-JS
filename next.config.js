/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

//This is pwa config
/* const withPWA = require('next-pwa')

// module.exports = withPWA({
pwa:{
  desc: 'public',
  register: true,
  mode: 'production',
  disable: false,
}  
reactStrictMode: true,
  swcMinify: true


 }); */
