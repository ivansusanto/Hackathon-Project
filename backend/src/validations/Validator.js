const Joi = require("./Joi");

module.exports = async function validate(schema, data) {
    const joiSchema = Joi.object(schema);
    
    try {
        return await joiSchema.validateAsync(data);
    } catch (err) {
        return err;
    }
}