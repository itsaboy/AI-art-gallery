import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import * as url from "url";

import { sendImagesToClient } from "./S3/getImages.js";
import { router } from "./routes/user.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/api/user", router);

app.get("/api/images", sendImagesToClient);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
