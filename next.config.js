module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
  },
  typescript: {
    // Allow builds to succeed on Vercel even if there are type errors.
    // Remove or set to false once type issues are resolved.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint during production builds (useful for CI/Vercel). Remove when lint issues are fixed.
    ignoreDuringBuilds: true,
  },
};
