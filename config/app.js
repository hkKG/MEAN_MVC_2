// hier wird Express-Application-Object erzeugt und konfiguriert
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// todo winston: erfolgrech initialisiert


var routes = require('../app/routes/generated/index');//--
var users = require('../app/routes/generated/users');//--

// create application
var app = express();

// Basic app settings:
//      set views
app.set('views', path.join(__dirname, '../app/views'));//++

//      set view_engine
//      todo ejs-locals
app.set('view engine', 'ejs');

// Attach middleware:
//      add is the instance of the Express application

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// # add static
app.use(express.static(path.join(__dirname,'../public')));

// ### Routing - 1 ### ==> generated
// http://localhost:1337/express
// http://localhost:1337/express/users
app.use('/express', routes);
app.use('/express/users', users);

// ### Routing - 2 ###
// http://localhost:1337/
// wird als parameter an routes-Modul dann weitergereicht...
require('../app/routes/mean/index.server.routes.js')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('./generated/error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('./generated/error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;