const express = require('express');
const router = express.Router();
const FormController = require('../../controllers/Form.controller');

router.post('/title', FormController.validations.AddFormTitle, FormController.actions.SetFormTitle);
router.get('/title/get', FormController.actions.GetFormTitle);

router.post('/company-details', FormController.validations.AddCompanyDetails, FormController.actions.SetCompanyDetails);
router.get('/company-details/get', FormController.actions.GetCompanyDetails);

router.post('/about', FormController.validations.AddAbout, FormController.actions.SetAbout);
router.get('/about/get', FormController.actions.GetAbout);

router.post('/submit-message', FormController.validations.AddSubmitMessage, FormController.actions.SetSubmitMessage);
router.get('/submit-message/get', FormController.actions.GetSubmitMessage);

module.exports = router;
