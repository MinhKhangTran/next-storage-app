import { connectDB } from "@/config/db";
import { createItem, getItems } from "@/controllers/itemControllers";
import nc from "next-connect";
import onError from "@/middlewares/errorHandler";
import isAuth from "@/middlewares/auth";

const handler = nc({ onError });

connectDB();
handler.use(isAuth).get(getItems);
handler.use(isAuth).post(createItem);

export default handler;
