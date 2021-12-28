import { DocumentDefinition } from "mongoose";
import { ShipmentModel } from ".";
import { IShipment } from "../../lib";

export const createShipment = (
  input: DocumentDefinition<
    Omit<IShipment, "updatedAt" | "createdAt" | "totalBooks">
  >
) => {
  return ShipmentModel.create(input);
};
