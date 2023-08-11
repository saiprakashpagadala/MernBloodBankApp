// package imports
import express, { json } from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

// file imports
import testRoutes from "./routes/testRoute.js";
import authRoutes from "./routes/authRoute.js";
import connectDB from "./config/db.js";

// dotenv config
dotenv.config();

//db connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);

// port
const PORT = process.env.PORT || 8080;
const MODE = process.env.DEV_MODE;

// listen
app.listen(PORT, () => {
  console.log(`Node Server Running at port ${PORT} in ${MODE}`.bgBlue.white);
});
