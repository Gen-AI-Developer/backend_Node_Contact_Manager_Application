const { contants } = require("../constants")
const errorHandler = (err, request, response, next) => {
    const statusCode = response.statusCode ? response.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            response.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });

            break;
        case 404:
            response.json({ title: "Not Found", message: err.message, stackTrace: err.stack });

            break;
        default:
            break;
    }

};

module.exports = errorHandler;