const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const SALT_ROUND = 5;
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (user) => {
    user.password = await bcrypt.hash(user.password, SALT_ROUND);
    const dbUser = await usersModel.create(user);
    return dbUser;
};


const loginUser = async ({email, password}) => {
    
    const body = {
        email: email
    };

    const dbUser = await usersModel.findOne(body);

    if (!dbUser) {
        throw new Error("User not found");
    }

    const isSamePassword = await bcrypt.compare(password, dbUser.password)
    
    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    const token = jwt.sign({username: dbUser.name, role: dbUser.role}, JWT_SECRET, {expiresIn: '1h'});

    return token;
};

module.exports = {
    registerUser, 
    loginUser
}