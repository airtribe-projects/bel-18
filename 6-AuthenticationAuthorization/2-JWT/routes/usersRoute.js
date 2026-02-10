const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/usersController');

router.post('/register', async (req, res) => {
    const user = req.body;
    const dbUser = await registerUser(user);
    res.send(dbUser);
});

router.post('/login', async (req, res) => {
    const user = req.body;
    const dbUser = await loginUser(user);
    res.send(dbUser);
});

module.exports = router;
