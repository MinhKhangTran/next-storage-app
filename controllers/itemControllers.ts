import Item from "@/models/Item";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Create new Item
 * POST /api/items
 * PRIVATE
 */

export const createItem = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(200).json(newItem);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get Items
 * GET /api/items
 * PRIVATE
 */

export const getItems = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
  }
};
