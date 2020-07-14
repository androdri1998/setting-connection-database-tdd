import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";

dotenv.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.prod",
});

import errorMiddleware from "./middlewares/error-middleware";
import mainRoutes from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/main", mainRoutes);

app.use(errorMiddleware());

export default app;
