import express from "express";
import { login, register } from "../controllers/authController.js";
import loginValidator from "../middlewares/loginValidator.js";
import createCustomerValidator from "../middlewares/createCustomerValidator.js";
import createSellerAndAdminValidator from "../middlewares/createSellerAndAdminValidator.js";

const router = express.Router();

router.post("/register",createSellerAndAdminValidator, register);
router.post("/customer/register",createCustomerValidator, register);
router.post("/login", loginValidator, login);

export default router;
