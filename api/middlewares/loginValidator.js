import joi from "joi";
const loginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().min(8).required()
});

export default async (req, res, next) => {
  try {
    //TODO: validacion
    await loginSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Error de validacion",
      error,
    });
  }
};
