import {
  deleteItem,
  getItemById,
  updateItem,
} from "@/controllers/itemControllers";
import nc from "next-connect";
import onError from "@/middlewares/errorHandler";

const handler = nc({ onError });
handler.get(getItemById).put(updateItem).delete(deleteItem);

export default handler;
