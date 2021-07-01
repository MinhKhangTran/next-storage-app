import nc from "next-connect";
import { connectDB } from "@/config/db";
import { NextApiResponse, NextApiRequest } from "next";
import { contactEmail } from "@/controllers/emailController";

const handler = nc();
connectDB();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await contactEmail(req.body);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: "Try again later", error: error });
  }
});

export default handler;
