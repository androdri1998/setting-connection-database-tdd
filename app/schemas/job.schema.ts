import Joi from "@hapi/joi";

export const JobSchema = {
  body: Joi.object({
    name: Joi.string().min(1).required(),
  }),
};
