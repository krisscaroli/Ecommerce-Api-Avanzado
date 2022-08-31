import express from 'express';
import * as shoController from '../controllers/productController.js';

const router = expppiress.Router();

router
    .route('/products')
    .get()
    .post(productController.createProduct);

export default router;