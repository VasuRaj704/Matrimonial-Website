const express = require('express');
const router = express.Router();

const User = require('../model/userSchema');

router.get('', (req, res) => {
    users = User.find()
    res.json({message:'users loaded ', users:users})
});

module.exports = router;