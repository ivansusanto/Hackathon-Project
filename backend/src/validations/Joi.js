const DefaultJoi = require("joi");
const JoiDate = require("@joi/date");

const Joi = DefaultJoi.extend(JoiDate);

module.exports = Joi;