const express = require('express');
const registerController = require('../../../controller/registon.controller');

const router = express.Router();

router.post('/', registerController);

module.exports = router;
