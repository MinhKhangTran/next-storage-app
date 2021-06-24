import asyncWrapper from "@/middlewares/async";
import Item from "@/models/Item";
import { NextApiRequest, NextApiResponse } from "next";
import { createCustomError } from "@/utils/customError";
import { itemSchema } from "@/utils/itemValidation";

/**
 * Create new Item
 * POST /api/items
 * PRIVATE
 */

export const createItem = asyncWrapper(
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    //valdation
    try {
      await itemSchema.validate(
        { name: req.body.name, menge: req.body.menge },
        { abortEarly: false }
      );
    } catch (error) {
      return next(createCustomError(error, 500));
    }
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
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
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
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    const item = await Item.findById(req.query.id);
    if (!item) {
      return next(createCustomError("Kein Item gefunden", 404));
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
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    const item = await Item.findById(req.query.id);
    if (!item) {
      return next(createCustomError("Kein Item gefunden", 404));
    }
    //valdation
    try {
      await itemSchema.validate(
        { name: req.body.name, menge: req.body.menge },
        { abortEarly: false }
      );
    } catch (error) {
      return next(createCustomError(error, 500));
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
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    const item = await Item.findById(req.query.id);
    if (!item) {
      return next(createCustomError("Kein Item gefunden", 404));
    }
    item.remove();
    res.status(200).json({ message: "Item gelöscht" });
  }
);
