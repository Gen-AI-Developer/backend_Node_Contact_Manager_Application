const errorHandler = (err, request, response, next) => {
    const statusCode = response.statusCode ? response.statusCode : 500;
    response.json({
        message: err.message, stackTrace: err.stack
    });

};

module.exports = errorHandler;