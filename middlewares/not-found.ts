import { NextApiRequest, NextApiResponse } from "next";

export const notFound = (_: NextApiRequest, res: NextApiResponse, next: any) =>
  res.status(404).send("Sackgasse miep mipe 🥲");
