const express = require('express');
const logger = require('morgan');
const cors = require('cors');

//importación rutas
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api')

//connect
const {connect} = require('./db/db')

//express + usos
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

//rutas
app.use('/', indexRouter);
app.use('/api', apiRouter);

//conexión con base de datos
connect();

module.exports = app;