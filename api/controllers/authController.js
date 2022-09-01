import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import User from "../models/User.js";
import config from "../config/index.js";



const login = async (req, res) => {
  try {
    /**1.Buscamos un usuario con el correo del body*/
    const user = await User.findOne({
      email: req.body.email,
    });
    /**usuario no encontrado */
    if (!user) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
      });
    }
    /**2.Si hay usuario se compara la contrasena con bcrypt*/
    const passCorrect = await bcrypt.compare(req.body.password, user.password);
    /**contrasena incorrecta */
    if (!passCorrect) {
      return res.status(401).json({
        msg: "Credenciales inválidas",
      });
    }
    /**3.crear token y devolverlo*/
    const payload = {
      userId: user.id,
    };

    const token = jwt.encode(payload, config.jwt.secret);

    return res.json({
      msg: "Login correcto",
      data: { token },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al hacer login",
    });
  }
};

const register = async (req, res) => {
  try {
    /**
     * encriptamos el password
     */
    const encryptedPass = await bcrypt.hash(req.body.password, 4);
    req.body.password = encryptedPass;
    const user = await User.create(req.body);

    /**ocultamos la encriptacion del password */
    user.password = undefined;
    return res.json({
      msg: "Usuario creado",
      data: { user },
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Ocurrio un error al registrar usuario",
      error,
    });
  }
};

export { login, register };
