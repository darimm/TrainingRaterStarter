pe = require('parse-error');//parses error so you can read error message and handle them accordingly

to = function(promise) {
    return promise
    .then(data => {
        return [null, data];
    }).catch(err => [pe(err)])
};

TE = function(errMessage, log) {
    if (log === true) {
        console.error(errMessage);
    }
    throw new Error(errMessage);
};

ReE = function(res, err, code) {
    if (typeof err == 'object' && typeof err.message !== 'undefined') {
        err = err.message;
    }
    if (typeof code !== 'undefined') res.statusCode = code;
    return res.json({success: false, error: err});
};

ReS = function(res, data, code) {
    let sendData = {success: true};

    if (typeof data === 'object') {
        sendData = Object.assign(data, sendData);
    }
    if (typeof code !== 'undefined') {
        res.statusCode = code;
    }
    return res.json(sendData);
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