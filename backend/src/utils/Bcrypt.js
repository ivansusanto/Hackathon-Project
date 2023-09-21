const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const generateHashedPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

module.exports = generateHashedPassword;