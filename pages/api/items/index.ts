import { connectDB } from "@/config/db";
import { createItem, getItems } from "@/controllers/itemControllers";
import nc from "next-connect";
import onError from "@/middlewares/errorHandler";

const handler = nc({ onError });

connectDB();
handler.post(createItem).get(getItems);

export default handler;
