import asyncWrapper from "@/middlewares/async";
import Item from "@/models/Item";
import { NextApiRequest, NextApiResponse } from "next";
import { createCustomError } from "@/utils/customError";
import { itemSchema } from "@/utils/itemValidation";
import { IImage } from "@/interfaces/Item";
import cloudinary from "cloudinary";
import { APIFeatures } from "@/utils/apiFeatures";

// Setting up cloudinary config
//@ts-expect-error
cloudinary.config({
  cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
});

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
    const bild = req.body.bild;

    //cloudinary actions
    const result = await cloudinary.v2.uploader.upload(bild, {
      folder: "storage/items",
    });

    let imageLink: IImage = { public_id: "", url: "" };
    console.log(result);

    imageLink.public_id = result.public_id;

    imageLink.url = result.secure_url;

    req.body.bild = imageLink;

    req.body.user = req.user;
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
    const user = req.user;
    //add search
    const apiFeatures = new APIFeatures(
      Item.find({ user }).sort({ createdAt: -1 }),
      req.query
    ).search();
    const items = await apiFeatures.query;
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
