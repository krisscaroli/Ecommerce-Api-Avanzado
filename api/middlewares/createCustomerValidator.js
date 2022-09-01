import joi from "joi";
let options = ["Administrator", "Seller", "Customer"];
const createCustomerSchema = joi.object({
  name: joi.string().required(),
  lastname: joi.string().required(),
  phone: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().min(8).required(),
  deliveryAddress: joi.string().required(),
  street: joi.string().required(),
  location: joi.string().required(),
  outdoorNumber: joi.number().required(),
  intdoorNumber: joi.number().required(),
  betweenStreets: joi.string().required(),
  city: joi.string().required(),
  country: joi.string().required(),
  zipCode: joi.string().required(),
  references: joi.string().required(),
  personalContact: joi.string(),
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
