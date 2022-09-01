import express from 'express';
import * as shoppingController from '../controllers/shoppingController.js';

const router = express.Router();

router
    .route('/shoppings')
    .get()
    .post(shoppingController.createShopping);

export default router;