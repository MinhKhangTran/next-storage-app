import { increaseQuantity } from "@/controllers/itemControllers";
import nc from "next-connect";
import onError from "@/middlewares/errorHandler";
import isAuth from "@/middlewares/auth";

const handler = nc({ onError });
handler.use(isAuth).put(increaseQuantity);

export default handler;
