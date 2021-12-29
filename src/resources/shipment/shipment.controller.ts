import { Request, Response } from "express";
import {
  createShipment,
  CreateShipmentInput,
  getShipments,
  GetShipmentsInput,
} from ".";

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
    return res.status(500).send((e.message && e.message) || e.toString());
  }
};

export const getShipmentsHandler = async (
  req: Request<
    GetShipmentsInput["params"],
    {},
    {},
    GetShipmentsInput["query"] & qs.ParsedQs
  >,
  res: Response
) => {
  try {
    const shipments = await getShipments(
      {
        limit: Number(req.query.size),
        skip: Number(req.query.page),
      },
      req.params.select
    );
    return res.send(shipments);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.toString());
  }
};
