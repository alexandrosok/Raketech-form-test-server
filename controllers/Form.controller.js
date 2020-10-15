const http = require('request-promise');
const HttpResponse = require('../Helpers/HttpResponse');
const {validationResult} = require('express-validator');
const FormValidations = require('../validations/Form.validations');
require('dotenv').config();

const validations = {
    AddFormTitle: FormValidations.AddFormTitle,
    AddCompanyDetails: FormValidations.AddCompanyDetails,
    AddAbout: FormValidations.AddAbout,
    AddSubmitMessage: FormValidations.AddSubmitMessage
};

const SetSubmitMessage = (req, res) => {

    const errors = validationResult(req).array();

    if (errors.length > 0) {
        return res.status(409).json({errors: errors, success: false, type: "conflict"});
    }

    let {message} = req.body;
    http({
        method: 'POST',
        uri: `${process.env.HOST}/wp-json/raketech-form-test/v1/form/submit-message`,
        json: true,
        body: {message},
    })
        .then((response) => {
            let {message, data} = JSON.parse(response);
            res.status(200).send({
                status: HttpResponse.Success,
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

const GetSubmitMessage = (req, res) => {
    http({
        method: 'GET',
        uri: `${process.env.HOST}/wp-json/raketech-form-test/v1/form/submit-message/get`,
        json: true,
    })
        .then((response) => {
            res.status(200).send({
                status: HttpResponse.Success,
                message: "Submit Message Record",
                submitMessage: response
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

const GetAbout = (req, res) => {
    http({
        method: 'GET',
        uri: `${process.env.HOST}/wp-json/raketech-form-test/v1/form/about/get`,
        json: true,
    })
        .then((response) => {
            res.status(200).send({
                status: HttpResponse.Success,
                message: "About Content",
                about: response
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

const SetAbout = (req, res) => {

    const errors = validationResult(req).array();

    if (errors.length > 0) {
        return res.status(409).json({errors: errors, success: false, type: "conflict"});
    }

    let {about} = req.body;
    http({
        method: 'POST',
        uri: `${process.env.HOST}/wp-json/raketech-form-test/v1/form/about`,
        json: true,
        body: {about},
    })
        .then((response) => {
            let {message, data} = JSON.parse(response);
            res.status(200).send({
                status: HttpResponse.Success,
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

/**
 *
 * @param req
 * @param res
 * @constructor
 */
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
                title: response.title
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

/**
 *
 * @param req
 * @param res
 * @returns {*}
 * @constructor
 */
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
                status: HttpResponse.Success,
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

/**
 *
 * @param req
 * @param res
 * @returns {*}
 * @constructor
 */
const SetCompanyDetails = (req, res) => {

    const errors = validationResult(req).array();

    if (errors.length > 0) {
        return res.status(409).json({errors: errors, success: false, type: "conflict"});
    }

    let {CompanyDetails} = req.body;
    http({
        method: 'POST',
        uri: `${process.env.HOST}/wp-json/raketech-form-test/v1/form/company-details`,
        json: true,
        body: {details: CompanyDetails},
    })
        .then((response) => {
            let {message, data} = JSON.parse(response);
            res.status(200).send({
                status: HttpResponse.Success,
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

/**
 *
 * @param req
 * @param res
 * @constructor
 */
const GetCompanyDetails = (req, res) => {
    http({
        method: 'GET',
        uri: `${process.env.HOST}/wp-json/raketech-form-test/v1/form/company-details/get`,
        json: true,
    })
        .then((response) => {
            res.status(200).send({
                status: HttpResponse.Success,
                message: "Company Details content",
                details: response.details
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
        SetSubmitMessage,
        GetSubmitMessage,
        GetAbout,
        SetAbout,
        GetCompanyDetails,
        SetCompanyDetails,
        SetFormTitle,
        GetFormTitle
    }
};
