import express from 'express';
import * as productController from '../controllers/productController.js';

const router = express.Router();

router
    .route('/products')
    .get()
    .post(productController.createProduct);

export default router;