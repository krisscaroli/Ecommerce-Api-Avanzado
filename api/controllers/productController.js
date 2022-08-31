import Product from "../models/Product.js";

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.json({
      msg: "Producto creado",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrio un error al registrar producto",
      error,
    });
  }
};

export { createProduct };
