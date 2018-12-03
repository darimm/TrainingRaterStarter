const Users = require('../models').Users;
const validator = require('validator');

/* *********************************************** */

const getAll = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let err, users;

  let whereStatement = {};
  if (req.query.name) {
    whereStatement.name = {
      $like: '%' + req.query.name + '%'
    };
  }

  [err, users] = await to(Users.findAll({
    where: whereStatement
  }))
  if (err) return ReE(res, err, 500) // This should literally never fail. 
  return ReS(res, users, 200)
}
module.exports.getAll = getAll;

/* *********************************************** */

const get = async (req, res) => {
  let err, user;
  let userId = parseInt(req.params.UserId)
  res.setHeader('Content-Type', 'application/json');

  [err, user] = await to(Users.findById(userId))
  if (!user) ReE (res, err, 404);
  if (err) ReE (res, err, 422);
  ReS(res, user, 200);
}
module.exports.get = get;

/* *********************************************** */

const update = async function (req, res) {
  let err, user, data;
  data = req.body;

  [err, user] = await to(Users.update(data, {
    where: {
      id: data.id
    }
  }));
  if (err) return ReS(res,err,422);
  return ReS(res, user, 200);
}
module.exports.update = update;

/* *********************************************** */

const del = async function (req, res) {
  let userId = parseInt(req.params.UserId)
  let err, user;
  data = req.body;

  [err, user] = await to(Users.destroy({
    where: {
      id: userId
    }
  }));
  if (err) return ReE(res, err, 404)  // This should probably never happen. SQL doesn't care if the entity 
                                      // exists or not, and you shouldn't be able to hit an invalid delete route
  ReS(res,user,204);
}
module.exports.del = del;

/* *********************************************** */

const create = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  let err, user, userInfo;
  userInfo = req.body;

  if (!userInfo.email) {
    return ReE(res, 'Please enter an email to register', 422);
  } else if (!userInfo.password) {
    return ReE(res, 'Please enter a password to register', 422);
  } else {
  let err, user;
  [err, user] = await to(createUser(userInfo));
  if (err) return ReE(res, err, 422); 
  
  return ReS(res,user,201);
  }
}
module.exports.create = create;

/* *********************************************** */

const login = async function (req, res) {
  let err, user;

  [err,user] = await to(authUser(req.body));
  if (err) return ReE(res, err, 422);
  return ReS(res, {token: user.getJWT(), user: user.toJSON() });
}
module.exports.login = login;

/* Utility Functions / Readability Functions */

const createUser = async function(userInfo) {
  let err;
  if(validator.isEmail(userInfo.email)) {
    [err, user] = await to(Users.create(userInfo));
    if(err) TE('User already exists with that username');
    return user;
  } else {
    TE('Email is invalid');
  }
  
}

const authUser = async function (userInfo) { // returns user token
if (!userInfo.email) TE('Please enter an email to login');
if (!userInfo.password) TE('Please enter a password to login');

let user;
if(validator.isEmail(userInfo.email)) {
  [err, user] = await to(Users.findOne({where: {email: userInfo.email } }));
  if (err) TE(err.message);
} else {
  TE('A valid email was not entered');
}

if (!user) TE('Not registered');

[err,user] = await to(user.comparePassword(userInfo.password));

if (err) TE(err.message);

return user;
}
module.exports.authUser = authUser;