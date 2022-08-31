import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"

const api = express();

api.use(express.json());

api.get("/status", (req, res) => {
  return res.json({
    msg: "API en línea y funcionando",
  });
});

//Registrar todas las rutas
api.use(productRoutes);
api.use(userRoutes);

export default api;
