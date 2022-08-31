import Category from "../models/Category.js";

const createCategory = async (req, res) => {
    try {
      const newCategory= await Category.create(req.body);
      return res.json({
        msg: "Categoria creado",
        data: newCategory,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocurrio un error al registrar categoria",
        error,
      });
    }
  };
  
  export { createCategory };