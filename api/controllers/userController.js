import User from "../models/User.js";

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.json({
      msg: "Usuario creado",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrio un error al registrar usuario",
      error,
    });
  }
};

export {createUser};
