import Coupon from "../models/Coupon.js";

const createCoupon = async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    return res.json({
      msg: "Cupón creado",
      data: newCoupon,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrio un error al registrar el cupón",
      error,
    });
  }
};

export { createCoupon };
