const express = require('express');

const router = express.Router();

const raginstion = require('./registion');
const login = require('./Login');

router.use('/registion', raginstion);
router.use('/login', login);

module.exports = router;
