import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";
import { stages } from "./utils/configs";

dotenv.config({
  path: process.env.NODE_ENV === stages.DEV ? ".env.dev" : ".env.prod",
});

import errorMiddleware from "./middlewares/error-middleware";
import IndexRoutes from "./routes/index";

class App {
  public express: Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.middlewaresErrors();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(helmet());
  }

  private routes(): void {
    const IndexRoutesInstance = new IndexRoutes();
    this.express.use("/main", IndexRoutesInstance.mainRoutes);
  }

  private middlewaresErrors(): void {
    this.express.use(errorMiddleware());
  }
}

export default App;
