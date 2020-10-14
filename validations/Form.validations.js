const {body} = require('express-validator');

const FormValidations = {
    AddFormTitle: [
        body('title').isString(),
    ],
    AddCompanyDetails: [
        body('CompanyDetails').isString()
    ]
};

module.exports = FormValidations;

