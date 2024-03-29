import express from "express";
import { createUser, getAllUser, signin } from "../controllers/user-controller.js";

const router = express.Router();
router.get("/", getAllUser);
router.post("/signup", createUser);
router.post("/signin", signin);
export default router;
