import { Router } from "express";
import { validateResource } from "../middleware";
import {
  createUserHandler,
  createUserSchema,
  loginUserHandler,
  loginUserSchema,
} from "../resources";

export const router = Router();

router.post("/", validateResource(createUserSchema), createUserHandler);
router.post("/login", validateResource(loginUserSchema), loginUserHandler);
