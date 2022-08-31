import Cart from '../controllers/models/cart.js'

const createCart = async (req, res) => {
    try {
      const newCar= await Cart.create(req.body);
      return res.json({
        msg: "Carrito creado",
        data: newCar,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocurrio un error al registrar categoria",
        error,
      });
    }
  };
  
  export { createCart };