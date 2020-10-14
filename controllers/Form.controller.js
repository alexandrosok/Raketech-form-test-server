const http = require('request-promise');
const HttpResponse = require('../Helpers/HttpResponse');
const {validationResult} = require('express-validator');
const FormValidations = require('../validations/Form.validations');
require('dotenv').config();

const validations = {
    AddFormTitle: FormValidations.AddFormTitle,
};

const GetFormTitle = (req, res) => {
    http({
        method: 'GET',
        uri: `${process.env.HOST}/wp-json/raketech-form-test/v1/form/title/get`,
        json: true,
    })
        .then((response) => {
            res.status(200).send({
                status: HttpResponse.Success,
                message: "Form Title",
                title: response
            }).end();

        })
        .catch((err) => {
            res.status(400).send({
                status: HttpResponse.Error,
                message: "Something went wrong",
                error: err
            }).end();
        });

}
const SetFormTitle = (req, res) => {

    const errors = validationResult(req).array();

    if (errors.length > 0) {
        return res.status(409).json({errors: errors, success: false, type: "conflict"});
    }

    let {title} = req.body;
    http({
        method: 'POST',
        uri: `${process.env.HOST}/wp-json/raketech-form-test/v1/form/title`,
        json: true,
        body: {title},
    })
        .then((response) => {
            let {status, message, data} = JSON.parse(response);
            res.status(200).send({
                status,
                message,
                data
            }).end();

        })
        .catch((err) => {
            res.status(400).send({
                status: HttpResponse.Error,
                message: "Something went wrong",
                error: err
            }).end();
        });
};

module.exports = {
    validations,
    actions: {
        SetFormTitle,
        GetFormTitle
    }
};
