import joi from "joi";
let options = ["Administrator", "Seller", "Customer"];
const createCustomerSchema = joi.object({
  name: joi.string().required(),
  lastname: joi.string().required(),
  phone: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().min(8).required(),
  role: joi
    .string()
    .valid(...options)
    .default("Seller")
    .required(),
  isActive: joi.boolean().default(true).required(),
});

export default async (req, res, next) => {
  try {
    //TODO: validacion
    await createCustomerSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Error de validacion",
      error,
    });
  }
};
