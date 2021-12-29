import { Router } from "express";
import { validateResource } from "../middleware";
import {
  createBookHandler,
  createBookSchema,
  getBooksHandler,
  getBooksSchema,
} from "../resources";

const router = Router();

router.get("/:select?", validateResource(getBooksSchema), getBooksHandler);
router.post("/", validateResource(createBookSchema), createBookHandler);

export default router;
