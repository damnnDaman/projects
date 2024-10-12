var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const passport = require('passport');
const localStrategy = require("passport-local");
var app = express();

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport to use the local strategy
passport.use(new localStrategy(usersRouter.authenticate()));

// Configure Passport to serialize and deserialize user instances
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
