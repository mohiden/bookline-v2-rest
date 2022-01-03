import { Router } from "express";
import { customers_detail } from "../resources";

const router = Router();

router.get("/customers_detail", customers_detail);

export default router;