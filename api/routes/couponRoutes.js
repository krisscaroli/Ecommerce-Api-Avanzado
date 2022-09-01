import express from "express";
import * as couponController from "../controllers/couponController.js";

const router = express.Router();

router.route("/coupons").get().post(couponController.createCoupon);

export default router;