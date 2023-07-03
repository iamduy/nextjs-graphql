/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  env: {
    NEXT_BASE_API_URL: process.env.NEXT_BASE_API_URL,
  },
  trailingSlash: false,
};