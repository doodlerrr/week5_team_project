const errorLogger = (error, request, response, next) => {
    console.error(error);
    next(error);
}

const errorHandler = (error, reqest, response, next) => {
    const status = error.status || 400;
    response.status(error);
    response.json({ errorMessage: error.errorMessage});
};

module.exports = { errorLogger, errorHandler };