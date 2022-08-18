import { Request, Response } from "express";

const notFoundRoute = (req: Request, res: Response) => {
  res.status(404).send("content not found");
};

export { notFoundRoute };
