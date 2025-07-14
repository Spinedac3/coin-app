import * as Joi from 'joi';
export const validationSchema = Joi.object({
  PORT: Joi.number().default(4000),
  JWT_SECRET: Joi.string().required(),
  DATABASE_URL: Joi.string().uri().required(),
});
