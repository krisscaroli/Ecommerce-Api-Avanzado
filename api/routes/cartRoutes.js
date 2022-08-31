import express from "express";
import * as cartController from "../controllers/cartController.js";

const router = express.Router();

router.route("/carts").get().post(cartController.createCart);

export default router;
