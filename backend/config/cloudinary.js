import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const uploadCloudinary = async (filePath) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRETE,
    });

    if (!filePath) {
      return null;
    }

    const uploadResult = await cloudinary.uploader.upload(filePath, {
      resource_type: 'auto', // handles images, videos, pdf, etc.
    });

    fs.unlinkSync(filePath); // remove file after upload

    return uploadResult.secure_url;
  } catch (error) {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // cleanup even on error
    }
    console.error('Cloudinary Upload Error:', error);
    return null;
  }
};

export default uploadCloudinary;
