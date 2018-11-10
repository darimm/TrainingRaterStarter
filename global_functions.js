pe = require('parse-error');//parses error so you can read error message and handle them accordingly

to = function(promise) {
    return promise
    .then(data => {
        return [null, data];
    }).catch(err => [pe(err)])
};

    // parseApiError = (err, res) => {
    // if (err) {
    //     if (typeof err == 'object' && typeof err.message != 'undefined') {
    //         err = err.message;
    //     }

    //     if (typeof code !== 'undefined') {
    //         res.statusCode = code;
    //     }
    //     res.statusCode = 422
    //     return res.json({ success: false, error: err });
    //     }
    // }