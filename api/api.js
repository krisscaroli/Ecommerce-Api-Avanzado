import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import shoppingRoutes from "./routes/shoppingRoutes.js";
import authRoutes from "./routes/authRoutes.js";


const api = express();

api.use(express.json());

api.get("/status", (req, res) => {
  return res.json({
    msg: "API en línea y funcionando",
  });
});

//Registrar todas las rutas
api.use( productRoutes);
api.use(userRoutes);
api.use(cartRoutes);
api.use(shoppingRoutes);
api.use(authRoutes);

export default api;
