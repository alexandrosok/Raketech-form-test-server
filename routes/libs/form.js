const express = require('express');
const router = express.Router();
const FormController = require('../../controllers/Form.controller');

router.post('/title', FormController.validations.AddFormTitle, FormController.actions.SetFormTitle);
router.get('/title/get', FormController.actions.GetFormTitle);

router.post('/company-details', FormController.validations.AddCompanyDetails, FormController.actions.SetCompanyDetails);
router.get('/company-details/get', FormController.actions.GetCompanyDetails);

module.exports = router;
