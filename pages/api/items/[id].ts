import {
  deleteItem,
  getItemById,
  updateItem,
} from "@/controllers/itemControllers";
import nc from "next-connect";

const handler = nc();

handler.get(getItemById).put(updateItem).delete(deleteItem);

export default handler;
