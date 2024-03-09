import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });
import * as url from "url";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

const PORT = process.env.PORT;
const BUCKET_NAME = process.env.BUCKET_NAME;
const BUCKET_REGION = process.env.BUCKET_REGION;
const BUCKET_KEY = process.env.BUCKET_KEY;
const BUCKET_SECRET = process.env.BUCKET_SECRET;

const s3Client = new S3Client({
  region: BUCKET_REGION,
  credentials: {
    accessKeyId: BUCKET_KEY,
    secretAccessKey: BUCKET_SECRET,
  },
});

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

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
        const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
        return url;
      } catch (error) {
        console.error("Error generating pre-signed URL:", error);
        return null;
      }
    })
  );
};

//app.use(cors({ origin: "https://www.website.com/", crednetials: true }));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/images", async (req, res) => {
  try {
    const folderPath = req.query.region + `/`; // Use your actual folder path
    const imageKeys = await listImagesInFolder(BUCKET_NAME, folderPath);
    const urls = await generatePreSignedUrls(BUCKET_NAME, imageKeys);

    // Send the URLs back to the client
    res.json(urls);
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    res.status(500).send("Error fetching image URLs");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
