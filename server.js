const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const routes = require('./routes');
const dbtype = process.env.DATABASENAME;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/api', express.static(path.join(__dirname, '/static/api')));
app.use('/', express.static(path.join(__dirname, '/static')));

app.use(function (req, res, next) {
    res.locals.title = 'Daniel Richman'
    res.locals.desc = 'I’m a digital designer in love with photography, painting and discovering new worlds and cultures.'
    next();
});

app.use('/api', routes(dbtype));


/*app.use(function (req, res, next) {
    res.status(404);
    next();
}); */


app.use(function (err, req, res, next) {
    err = 'The page is not found';
    res.status(err.status || 500);
    res.render('error', {
        error: err
    });

})


app.listen(PORT, () => {

    console.log(`app listening to ${PORT}`);
});