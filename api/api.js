import express from "express";

const api = express();

api.use(express.json());

api.get("/status", (req, res) => {
  return res.json({
    msg: "API en línea y funcionando",
  });
});

export default api;
