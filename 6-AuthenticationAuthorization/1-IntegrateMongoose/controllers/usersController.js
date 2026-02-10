const users = require('../models/usersModel');
const bcrypt = require('bcrypt');
const SALT_ROUND = 5;

const registerUser = async (user) => {
    user.password = await bcrypt.hash(user.password, SALT_ROUND);
    const dbUser = await users.create(user);
    return dbUser;
};

module.exports = {
    registerUser
}