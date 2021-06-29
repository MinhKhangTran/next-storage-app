import { decreaseQuantity } from "@/controllers/itemControllers";
import nc from "next-connect";
import onError from "@/middlewares/errorHandler";
import isAuth from "@/middlewares/auth";

const handler = nc({ onError });
handler.use(isAuth).put(decreaseQuantity);

export default handler;
