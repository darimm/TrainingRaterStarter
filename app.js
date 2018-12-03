const express = require('express');
require('./config/config');
const models = require('./models')
require('./global_functions');
const sessions = require('./controllers/SessionsController');
const users = require('./controllers/UsersController')
const bodyParser = require('body-parser');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

/* PASSPORT SETUP */
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = CONFIG.jwt_encryption;

passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
    let err, user;
    [err, user] = await to(Users.findById(jwt_payload.user_id));
    
    if (err) return done(err, false);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false); // this shouldn't ever happen. means there is no user and no error.
    }
}))
/* END PASSPORT SETUP */

//CORS
app.use(function (req, res, next) {
    // Website you wish to allow to connect * in this case is any
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Which methods you want to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //Which headers you want to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
    //Set to true if you need the website to include cookies in the requests sent
    //to the API (eg in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    //Pass to the next layer of middleware
    next();
});


app.get('/',(req,res)=>{
    res.send('Hello.');
});

models.sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.')
})
.catch((err) => {
    console.error('Unable to connect to the database:',err);
});

if (CONFIG.app === 'dev') {
    // models.sequelize.sync();
    models.sequelize.sync({force: true}); // will drop all tables before synchronizing
}

app.get('/sessions', passport.authenticate('jwt', { session: false }), sessions.getAll);
app.get('/sessions/:SessionId', passport.authenticate('jwt', { session: false }), sessions.get);
app.put('/sessions', passport.authenticate('jwt', { session: false }), sessions.update);
app.post('/sessions', passport.authenticate('jwt', { session: false }), sessions.create);
app.get('/users',users.getAll);
app.get('/users/:UserId',users.get);
app.put('/users',users.update);
app.post('/users',users.create);
app.delete('/users/:UserId',users.del);
app.post('/login', users.login);
module.exports = app;