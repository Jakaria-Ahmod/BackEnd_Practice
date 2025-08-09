const express = require('express');

const router = express.Router();

const api = require('./api');

router.use(process.env.API_VERSION, api);

module.exports = router;
