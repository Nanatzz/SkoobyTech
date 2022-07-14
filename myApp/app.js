const createError = require('http-errors');
const express = require('express');
const path = require('path');
const getInfoDatabase = require("./src/utils/getInfoDatabase")
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const productsRouter = require('./src/routes/productsRouter');
const coursesRouter = require('./src/routes/coursesRouter');
const homeRouter = require('./src/routes/homeRouter');
const internalProductRouter = require('./src/routes/internalProductRouter');
const profileUserRouter = require('./src/routes/profileuserRouter');
const checkoutRouter = require('./src/routes/checkoutRouter');
const loginRouter = require('./src/routes/loginRouter');
const cadastroRouter = require('./src/routes/cadastroRouter');
const carrinhoRouter = require('./src/routes/carrinhoRouter');
const playcourseRouter = require('./src/routes/playcourseRouter');
const methodOverride = require('method-override');
const logMiddleware = require('./src/middlewares/log');
const authMiddleware = require('./src/middlewares/auth');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users'); 
const auth = require('./src/middlewares/auth');

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
app.use('/users', usersRouter);
app.use('/', profileUserRouter)
app.get('/products', productsRouter);
app.get('/courses', coursesRouter);
app.get('/home', homeRouter);
app.get('/product/id', internalProductRouter);
app.get('/profileUser', profileUserRouter);
app.get('/checkout', checkoutRouter);
app.get('/login', loginRouter);
app.get('/cadastre', cadastroRouter);
app.get('/cart', carrinhoRouter);
app.get('/playcourse', playcourseRouter);



app.get('/', (req,res) => res.render('products'))
app.get('/', (req,res) => res.render('login'))


app.post('/login', authMiddleware)


app.post('/', (req, res)=> {
  const users = getInfoDatabase('courses')
  const {email, password} = req.body

  const userExists = users.find(user => {
    return user.email === email && user.password === password
  })

  if (!userExists) return res.redirect('/')

  return res.redirect('products')
});


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

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