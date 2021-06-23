import { connectDB } from "@/config/db";
import { createItem, getItems } from "@/controllers/itemControllers";
import nc from "next-connect";

const handler = nc();

connectDB();
handler.post(createItem);
handler.get(getItems);
export default handler;