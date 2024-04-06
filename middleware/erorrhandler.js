const { constants } = require("../constants")
const errorHandler = (err, request, response, next) => {
    const statusCode = response.statusCode ? response.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            response.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            response.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
            break
        case constants.UNAUTHORIZES:
            response.json({ title: "Un Authorized", message: err.message, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            response.json({ title: "Forbidden", message: err.message, stackTrace: err.stack });
            break;
        case constants.SERVER_ERROR:
            response.json({ title: "Server Error", message: err.message, stackTrace: err.stack });

            break;
        default:
            console.log('No Error - All Good. *_*')
            break;
    }

};

module.exports = errorHandler;