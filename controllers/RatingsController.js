const Ratings = require('../models').Ratings;

const create = async function(req, res) {
    res.setHeader('Content-Type','Application/json');
    let err, rating, ratingInfo, sessionId;

    sessionId = req.params.sessionId;
    ratingInfo = req.body;
    ratingInfo.sessionId = sessionId;

    if (!ratingInfo.rating) {
        TE('Please enter a rating');
    }
    if (ratingInfo.rating < 0 || ratingInfo.rating > 5) {
        ReE(res,'Rating must be between 0 and 5', 400);
    }


    [err, rating] = await to(Ratings.create(ratingInfo));
    if (err) ReE(res, err, 422);
    ReS(res, rating, 201);
}
module.exports.create = create;

const update = async function(req, res) {
    let err, rating, ratingInfo, ratingId;

    ratingId = req.params.ratingId;
    ratingInfo = req.body;

    [err, rating] = await to(Ratings.update({ rating: ratingInfo.rating }, {
        where: {
          id: ratingId
        }
      }
      ));
    if (err) ReE(res, err, 422);
    ReS(res, rating, 202);
}
module.exports.update = update;