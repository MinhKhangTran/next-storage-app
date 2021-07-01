import {
  deleteItem,
  getItemById,
  updateItem,
} from "@/controllers/itemControllers";
import nc from "next-connect";
import onError from "@/middlewares/errorHandler";
import isAuth from "@/middlewares/auth";
import { connectDB } from "@/config/db";

const handler = nc({ onError });
connectDB();
handler.use(isAuth).get(getItemById).put(updateItem).delete(deleteItem);

export default handler;
