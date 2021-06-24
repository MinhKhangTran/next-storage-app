import mongoose, { Schema } from "mongoose";
import { IUser } from "@/interfaces/User";

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
