import express from "express";
import dotenv from "dotenv";
import db from "./config/db";
import cors from "cors";
import bodyParser from "body-parser";
import wishlsitRouter from "./routes/wishlistRouter";
import recentlyWatchedRouter from "./routes/recentlywatchedRouter";
dotenv.config();

const app = express();
db();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/wishlist',wishlsitRouter)
app.use('/recentlywatched',recentlyWatchedRouter)

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
