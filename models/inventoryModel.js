import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type is required"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "blood group type is required"],
      enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    },
    quantity: {
      type: Number,
      required: [true, "blood quantity is required"],
    },
    organisation: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: [true, "organisation is required"],
    },
    hospital: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donor: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inventory", inventorySchema);
