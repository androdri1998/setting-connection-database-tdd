import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import "express-async-errors";

import errorMiddleware from "./middlewares/error-middleware";
import processConsts from "./utils/process-consts";

dotenv.config({
  path: processConsts.stage === "dev" ? ".env.dev" : ".env.prod",
});

console.log(process.env.TESTE);

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(errorMiddleware());

export default app;
