const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const getInfoDatabase = require("./src/utils/getInfoDatabase")
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const conn = require('./src/database/conn');

const productsRouter = require('./src/routes/productsRouter');
const coursesRouter = require('./src/routes/coursesRouter');
const homeRouter = require('./src/routes/homeRouter');
const internalProductRouter = require('./src/routes/internalProductRouter');
const profileUserRouter = require('./src/routes/profileuserRouter');
const checkoutRouter = require('./src/routes/checkoutRouter');
const loginRouter = require('./src/routes/loginRouter');
const cadastroRouter = require('./src/routes/cadastroRouter');
const cartRouter = require('./src/routes/cartRouter');
const playcourseRouter = require('./src/routes/playcourseRouter');
const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users'); 

const methodOverride = require('method-override');
const logMiddleware = require('./src/middlewares/log');
const authMiddleware = require('./src/middlewares/auth');
const auth = require('./src/middlewares/auth');
const { appendFileSync } = require('fs');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'src','views'));
app.use(methodOverride('_method'));
app.use(logMiddleware);

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', profileUserRouter)
app.use('/', productsRouter);
app.use('/', coursesRouter);
app.use('/', homeRouter);
app.use('/', profileUserRouter);
app.use('/', checkoutRouter);
app.use('/', loginRouter);
app.use('/', cadastroRouter);
app.use('/', cartRouter);
app.use('/', playcourseRouter);

conn 
 .sync()
 .then(() => {
  app.listen(3000);
 })
 .catch((err) => console.log(err));

module.exports = app;