import express from "express";
import * as userController from "../controllers/userController.js";
import createCustomerValidator from "../middlewares/createCustomerValidator.js";

const router = express.Router();

router
  .route("/users")
  .get()
  .post(createCustomerValidator, userController.createUser);

export default router;
