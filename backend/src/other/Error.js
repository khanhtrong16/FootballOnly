export function errorFn(res, error) {
    return res.status(400).json({
        message: error.message,
    });
}
