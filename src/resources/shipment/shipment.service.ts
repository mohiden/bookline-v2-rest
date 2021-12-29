import { DocumentDefinition, QueryOptions } from "mongoose";
import { ShipmentModel } from ".";
import { IShipment, IUser } from "../../lib";

export const createShipment = (
  input: DocumentDefinition<
    Omit<IShipment, "updatedAt" | "createdAt" | "totalBooks">
  >
) => {
  return ShipmentModel.create(input);
};

export const getShipments = (
  options: QueryOptions = { lean: true, skip: 0, limit: 5 },
  select?: string
) => {
  return ShipmentModel.find({}, {}, options)
    .populate<{ child: IUser }>({
      path: "createdBy",
      select: "-password",
    })
    .select(select);
};
