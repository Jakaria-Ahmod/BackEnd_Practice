const express = require('express');

const router = express.Router();

const raginstion = require('./registion');

router.use('/registion', raginstion);

module.exports = router;
