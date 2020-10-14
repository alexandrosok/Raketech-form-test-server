const {body} = require('express-validator');

const FormValidations = {
    AddFormTitle: [
        body('title').isString(),
    ],
    AddCompanyDetails: [
        body('CompanyDetails').isString()
    ],
    AddAbout: [
        body('about').isString()
    ],
    AddSubmitMessage: [
        body('message').isString()
    ]
};

module.exports = FormValidations;

