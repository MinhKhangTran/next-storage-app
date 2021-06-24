import { NextApiRequest, NextApiResponse } from "next";

const asyncWrapper = (fn: any) => {
  return async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncWrapper;
