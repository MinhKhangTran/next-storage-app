import mongoose, { Schema } from "mongoose";
import { IItem } from "@/interfaces/Item";

const itemSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Bitte einen Namen eingeben"],
      trim: true,
      lowercase: true,
    },
    menge: {
      type: Number,
      required: [true, "Bitte eine Menge eingeben"],
    },
    bild: {
      //   wegen cloudinary
      public_id: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
    },
    //User
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Item ||
  mongoose.model<IItem>("Item", itemSchema);
