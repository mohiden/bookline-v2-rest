import { Request, Response } from "express";
import { createShipment, CreateShipmentInput } from ".";
export const createShipmentHandler = async (
  req: Request<{}, {}, CreateShipmentInput["body"]>,
  res: Response
) => {
  try {
    const shipment = await createShipment({
      ...req.body,
      createdBy: res.locals.user["_id"],
    });
    return res.send(shipment);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
};
