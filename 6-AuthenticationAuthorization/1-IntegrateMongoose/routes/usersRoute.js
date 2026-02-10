const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/usersController');

router.post('/', async (req, res) => {
    const user = req.body;
    const dbUser = await registerUser(user);
    res.send(dbUser);
});

module.exports = router;
