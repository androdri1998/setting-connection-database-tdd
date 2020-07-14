import express, { Request, Response } from "express";
import HTTPStatusCode from "http-status-codes";

const routes = express.Router();

routes.post("/", (req: Request, res: Response) => {
  const { teste } = req.params;

  res.status(HTTPStatusCode.CREATED).json({
    created: true,
  });
});

export default routes;
