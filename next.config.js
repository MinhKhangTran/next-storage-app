module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,

    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_SECRET_KEY: process.env.CLOUDINARY_API_SECRET,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
