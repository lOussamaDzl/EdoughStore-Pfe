import express from "express";
const router = express.Router();

import { createOrder } from "../controllers/orderContoller.js";

import {
  authenticate,
  authorizedAdmin,
} from "../middlewares/authMiddleware.js";

router.route("/").post(authenticate, createOrder);

export default router;
