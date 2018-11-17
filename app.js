const express = require('express');
require('./config/config');
const models = require('./models')
require('./global_functions');
const sessions = require('./controllers/SessionsController');
const users = require('./controllers/UsersController')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
    models.sequelize.sync();
}

app.get('/sessions',sessions.getAll);
app.get('/sessions/:SessionId',sessions.get);
app.put('/sessions',sessions.update);
app.post('/sessions',sessions.create);
app.get('/users',users.getAll);
app.get('/users/:UserId',users.get);
app.put('/users',users.update);
app.post('/users',users.create);
app.delete('/users/:UserId',users.del);

module.exports = app;
