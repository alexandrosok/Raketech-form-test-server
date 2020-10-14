const express = require('express');
const router = express.Router();
const HealthController = require('../../controllers/Health.controller');

router.get('/status', HealthController.actions.GetAppHealth);

module.exports = router;
