var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const productsRouter = require('./src/routes/productsRouter')
const homeRouter = require('./src/routes/homeRouter')
const internalProductRouter = require("./src/routes/internalProductRouter")
const profileUserRouter = require("./src/routes/profileuserRouter")

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'src','views'));

app.get('/', function (req,res) {
  res.render('home')
})

app.get('/categorias', function (req,res) {
  res.render('products')
})

app.get('/finalizacao', function (req,res) {
  res.render('checkout')
})

app.get('/curso', function (req,res) {
  res.render('internalProduct')
})

app.get('/profileuser', function (req,res) {
  res.render('profileUser')
})

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/products', productsRouter)
app.get("/home", homeRouter)
app.get("/internalProduct", internalProductRouter);
app.get("/profileUser", profileUserRouter);

app.get('/', (req,res) => res.render('/products'))

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


module.exports = app;
