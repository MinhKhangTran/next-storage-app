import User from "@/models/User";
import { createCustomError } from "@/utils/customError";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import asyncWrapper from "./async";

const isAuth = asyncWrapper(
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    const session = await getSession({ req });
    if (!session) {
      return next(createCustomError("Bitte Einloggen", 401));
    }

    const user = await User.findOne({ name: session?.user?.name });
    console.log(user);

    req.user = user;
    next();
  }
);
export default isAuth;
