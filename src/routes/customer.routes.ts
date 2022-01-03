import { Router } from "express";
import { validateResource } from "../middleware";
import { getCustomersHandler, getCustomersSchema } from "../resources";

const router = Router();

router.get("/", validateResource(getCustomersSchema), getCustomersHandler);


export default router;