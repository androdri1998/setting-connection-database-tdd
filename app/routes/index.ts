import express, { Request, Response } from "express";
import HTTPStatusCode from "http-status-codes";

class IndexRoutes {
  public mainRoutes: express.Router;

  constructor() {
    this.mainRoutes = express.Router();

    this.routes();
  }

  private routes(): void {
    this.mainRoutes.post("/", (req: Request, res: Response) => {
      const { teste } = req.params;

      res.status(HTTPStatusCode.CREATED).json({
        created: true,
      });
    });
  }
}

export default IndexRoutes;
