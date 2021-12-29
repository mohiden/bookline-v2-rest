import { Response, Request } from "express";
import { createShipmentItem, getShipmentItems, GetShipmentItemsInput } from ".";
import { CreateShipmentItemInput } from "./shipmentItem.schema";

export const createShipmentItemHandler = async (
  req: Request<{}, {}, CreateShipmentItemInput["body"]>,
  res: Response
) => {
  console.log(req.body);
  try {
    return res.send(await createShipmentItem(req.body));
  } catch (e) {
    console.log(e);
    return res.status(400).send((e.message && e.message) || e.toString());
  }
};

export const getShipmentItemsHandler = async (
  req: Request<
    GetShipmentItemsInput["params"],
    {},
    {},
    GetShipmentItemsInput["query"] & qs.ParsedQs
  >,
  res: Response
) => {
  try {
    return res.send({
      data: await getShipmentItems(
        {
          skip: Number(req.query.page),
          limit: Number(req.query.size),
        },
        req.params.select
      ),
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send((e.message && e.message) || e.toString());
  }
};
