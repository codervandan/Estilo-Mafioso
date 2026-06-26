const { celebrate, Joi } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }

  return helpers.error("string.uri");
};

const validateClothingItemBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    imageUrl: Joi.string().required().custom(validateURL),
    price: Joi.number().required().min(1),
    description: Joi.string().required().min(2).max(500),
    category: Joi.string().required().min(2).max(30),
    sizes: Joi.array().items(Joi.string()).required(),
    inStock: Joi.boolean().required(),
  }),
});

const validateClothingItemId = celebrate({
  params: Joi.object().keys({
    itemId: Joi.string().hex().length(24).required(),
  }),
});

module.exports = {
  validateClothingItemBody,
  validateClothingItemId,
};
