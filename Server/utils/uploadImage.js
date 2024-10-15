// cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.APP_CLOUDINARY_API_KEY,
  api_secret: process.env.APP_CLOUDINARY_SECRET_KEY,
});

exports.uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );
    uploadStream.end(file.buffer);
  });
};

exports.uploadImage = async (file) => {
  //   try {
  //     const base64Image = Buffer.from(file.buffer).toString("base64");
  //     const dataURL = `data:${file.mimetype};base64,${base64Image}`;
  //     const uploadRes = await cloudinary.uploader.upload(dataURL);
  //     return uploadRes.url;
  //   } catch (error) {
  //     console.error("Error uploading image to Cloudinary:", error);
  //     throw new Error("Image upload failed");
  //   }
  //   try {
  //     const uploadRes = await cloudinary.uploader.upload_stream(
  //       { resource_type: "image" },
  //       (error, result) => {
  //         if (error) {
  //           console.error("Error uploading image to Cloudinary:", error);
  //           return res.status(500).json({
  //             status: "error",
  //             message: "Image upload failed",
  //           });
  //         }
  //         res.status(200).json({
  //           status: "success",
  //           message: "Image uploaded successfully",
  //           data: {
  //             imageUrl: result.secure_url,
  //           },
  //         });
  //       }
  //     );
  // Write the buffer to the upload stream
  // uploadRes.end(file.buffer);
  //   } catch (error) {
  //     console.error("Error uploading image to Cloudinary:", error);
  //     res.status(500).json({
  //       status: "error",
  //       message: "Image upload failed",
  //     });
  //   }
};
