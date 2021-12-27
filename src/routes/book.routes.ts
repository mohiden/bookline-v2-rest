import { Router } from "express";
import { validateResource } from "../middleware";
import { createBookHandler, createBookSchema } from "../resources";

const router = Router();
router.get("/", (req, res) => {
  console.log(req.body);
  res.send("Here");
});
router.post("/", validateResource(createBookSchema), createBookHandler);

export { router };
