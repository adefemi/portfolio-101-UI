/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "cdn.pixabay.com",
      "portfolio-101-bk.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
