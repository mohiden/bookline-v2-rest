import mongoose from "mongoose";
import { IShipment } from "../../lib";

const COLLECTION_NAME = "shipments";

const schema = new mongoose.Schema<IShipment>(
  {
    month: { type: mongoose.Schema.Types.String, required: true },
    year: { type: mongoose.Schema.Types.String, required: true },
    total: { type: mongoose.Schema.Types.Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const ShipmentModel = mongoose.model<IShipment>(
  "Shipment",
  schema,
  COLLECTION_NAME
);
