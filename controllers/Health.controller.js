const http = require('request-promise');
const HttpResponse = require('../Helpers/HttpResponse');
require('dotenv').config();

const GetAppHealth = (req, res) => {
    http({
        method: 'GET',
        uri: `${process.env.HOST}/wp-json/raketech-form-test/v1/health/status`,
        json: true
    })
        .then((response) => {
            res.status(200).send({
                status: HttpResponse.Success,
                message: "Health Status",
                response
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
    actions: {
        GetAppHealth
    }
};
