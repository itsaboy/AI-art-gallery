import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });
import express from "express";
import mongoose from "mongoose";
import path from "path";
import * as url from "url";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

import { userRoutes } from "./routes/user.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

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

const sendImagesToClient = async (req, res) => {
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

app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/api/user", userRoutes);

app.get("/api/images", sendImagesToClient);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
