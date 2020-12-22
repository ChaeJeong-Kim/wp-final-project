const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const createError = require('http-errors');
const pageRouter = require('./routes/page.router');

const app = express();
const PORT = process.env.PORT

nunjucks.configure('views', {
    express: app,
    watch: true
});
app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', pageRouter);

app.use('/public', express.static(path.join(__dirname, 'images' )));

app.use((req, res, next) => {
    next(createError(404));
});
app.use((err, req, res, next) => {
    res.locals.message = err.message; 
    res.locals.status = err.status;
    res.render('error');
});

app.listen(PORT, () => console.log('Server running'));
