import Shopping from "../models/Shopping.js";

const createShopping = async (req, res) => {
  try {
    const newShopping = await Shopping.create(req.body);
    return res.json({
      msg: "Venta creado",
      data: newShopping,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrio un error al registrar la venta",
      error,
    });
  }
};

export { createShopping };