import asyncWrapper from "@/middlewares/async";
import Item from "@/models/Item";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Create new Item
 * POST /api/items
 * PRIVATE
 */

export const createItem = asyncWrapper(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const newItem = await Item.create(req.body);
    res.status(200).json(newItem);
  }
);

/**
 * Get Items
 * GET /api/items
 * PRIVATE
 */

export const getItems = asyncWrapper(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  }
);

/**
 * Get Item by ID
 * GET /api/items/:id
 * PRIVATE
 */

export const getItemById = asyncWrapper(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const item = await Item.findById(req.query.id);
    if (!item) {
      return res.status(400).json({ message: "Kein Item gefunden" });
    }
    res.status(200).json(item);
  }
);

/**
 * Update Item
 * PUT /api/items/:id
 * PRIVATE
 */

export const updateItem = asyncWrapper(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const item = await Item.findById(req.query.id);
    if (!item) {
      return res.status(400).json({ message: "Kein Item gefunden" });
    }
    const updateItem = await Item.findByIdAndUpdate(
      req.query.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json(updateItem);
  }
);

/**
 * Delete Item
 * DELETE /api/items/:id
 * PRIVATE
 */

export const deleteItem = asyncWrapper(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const item = await Item.findById(req.query.id);
    if (!item) {
      return res.status(400).json({ message: "Kein Item gefunden" });
    }
    item.remove();
    res.status(200).json({ message: "Item gelöscht" });
  }
);
