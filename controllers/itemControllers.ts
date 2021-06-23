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

/**
 * Get Item by ID
 * GET /api/items/:id
 * PRIVATE
 */

export const getItemById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const item = await Item.findById(req.query.id);
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Update Item
 * PUT /api/items/:id
 * PRIVATE
 */

export const updateItem = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const item = await Item.findById(req.query.id);
    if (!item) {
      return res.status(400).json({ message: "Kein Item gefunden" });
    }
    const updateItem = await Item.findByIdAndUpdate(
      req.query.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateItem);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Delete Item
 * DELETE /api/items/:id
 * PRIVATE
 */

export const deleteItem = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const item = await Item.findById(req.query.id);
    if (!item) {
      return res.status(400).json({ message: "Kein Item gefunden" });
    }
    item.remove();
    res.status(200).json({ message: "Item gelöscht" });
  } catch (error) {
    console.log(error);
  }
};
