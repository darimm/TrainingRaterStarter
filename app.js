const express = require('express');
require('./config/config');
const models = require('./models')
const app = express();
const bodyParser = require('body-parser');
const sessions = require('./controllers/SessionsController');
const users = require('./controllers/UsersController')
require('./global_functions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


app.get('/',(req,res)=>{
    res.send('Hello.');
});

app.get('/sessions',sessions.getAll);
app.get('/sessions/:{SessionId}',sessions.get);
app.put('/sessions',sessions.update);
app.post('/sessions',sessions.create);
app.get('/users',users.getAll);
app.get('/users/:{UserId}',users.get);
app.put('/users',users.update);
app.post('/users',users.create);
app.delete('/users',users.delete);

models.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((err) => {
    console.error('Unable to connect to the database:',err);
});

if (CONFIG.app === 'dev') {
    models.sequelize.sync();
}
module.exports = app;
