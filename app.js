var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require("connect-flash")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require("mongoose");
const expressSession = require("express-session");
const passport = require('passport');
const localStrategy = require("passport-local")
const user=  require("./routes/users")
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

async function connectDB(){
  await mongoose.connect("mongodb+srv://talhadbuser:talha456db@alashrafsociety.oeuih.mongodb.net/?retryWrites=true&w=majority&appName=AlAshrafSociety");}
app.use(flash());


app.use(expressSession({
  resave:false,
  saveUninitialized:false,
  secret:"jo man kare likhdo"
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
connectDB().then(()=>{
  app.listen(3000, () => {
    console.log("App listening of port ", 3000)
  });
  });
module.exports = app;