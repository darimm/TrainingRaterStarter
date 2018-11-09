const express = require('express');
require('./config/config');
const models = require('./models')
const app = express();
const sessions = require('./controllers/SessionsController');
require('./global_functions');

app.get('/',(req,res)=>{
    res.send('Hello World.');
});

app.get('/sessions',sessions.getAll());
app.get('/sessions/:{SessionId}',sessions.get());

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
