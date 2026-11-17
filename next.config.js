/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};
