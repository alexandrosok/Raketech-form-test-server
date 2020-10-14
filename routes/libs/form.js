const express = require('express');
const router = express.Router();
const HealthController = require('../../controllers/Form.controller');

router.post('/title', HealthController.actions.SetFormTitle);
router.get('/title/get', HealthController.actions.GetFormTitle);

module.exports = router;
