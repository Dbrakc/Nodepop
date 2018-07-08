var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var i18n = require('i18n');


var app = express();

i18n.configure({
  locales:['en', 'es'],
  directory: __dirname + '/locales'
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Mongo connection
require('./lib/connectMongoose');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(i18n.init);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/apiv1/ads', require('./routes/apiv1/ads'));
app.use('/apiV1/users',require('./routes/apiv1/users'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  i18n.setLocale(i18n.getLocale(req));
  
  if(err.array ){
    //Validation error
    err.status = 422;
    const errInfo = err.array({onlyFirstError:true})[0];
    err.message = i18n.__('No valid'+errInfo.param + ' '+ errInfo.msg);
  }
  //Si es una petición al api respondo con un json

  if(isApi(req)){
    let errMessage = i18n.__(err.message);
    res.json({success: false, error : errMessage});
    return;

  }

  // render the error page
  res.status(err.status || 500);
  
  res.locals.message = i18n.__(err.message);
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  
  res.render('error');
});

function isApi(req){
  return req.originalUrl.indexOf('/apiv') === 0;
}

module.exports = app;
