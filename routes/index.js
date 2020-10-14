const express = require('express');
const router = express.Router();

router.use('/health', require('./libs/health'));
router.use('/form', require('./libs/form'));

module.exports = router;
