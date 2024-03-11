import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.BUCKET_KEY,
    secretAccessKey: process.env.BUCKET_SECRET,
  },
});

const listImagesInFolder = async (bucketName, folderPath) => {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    Prefix: folderPath,
  });

  try {
    const data = await s3Client.send(command);
    return data.Contents.map((item) => item.Key);
  } catch (error) {
    console.error("Error listing objects:", error);
    return [];
  }
};

const generatePreSignedUrls = async (bucketName, imageKeys) => {
  return Promise.all(
    imageKeys.map(async (key) => {
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: key,
      });

      try {
        const url = await getSignedUrl(s3Client, command, { expiresIn: 30 });
        return url;
      } catch (error) {
        console.error("Error generating pre-signed URL:", error);
        return null;
      }
    })
  );
};

export const sendImagesToClient = async (req, res) => {
  try {
    const folderPath = req.query.region + `/`;
    const imageKeys = await listImagesInFolder(process.env.BUCKET_NAME, folderPath);
    const urls = await generatePreSignedUrls(process.env.BUCKET_NAME, imageKeys);

    res.json(urls);
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    res.status(500).send("Error fetching image URLs");
  }
};
