const {body} = require('express-validator');

const FormValidations = {
    AddFormTitle: [
        body('title').exists(),
    ]
};

module.exports = FormValidations;

