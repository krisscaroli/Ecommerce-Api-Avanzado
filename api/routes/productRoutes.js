import express from "express";
import * as productController from "../controllers/productController.js";
import isAuth from "../middlewares/authValidator.js";

const router = express.Router();

router.use(isAuth);

router
  .route("/products")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

export default router;
