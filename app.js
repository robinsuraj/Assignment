/**
 * Created by Suraj on 04/03/2021.
 */
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


//enabling cors
var cors = function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "accept, content-type, x-access-token, x-requested-with");
	next();
};
  
app.use(cors);
app.disable('etag');

app.use('/api/', require('./app/routes/routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send(err.message);
});



module.exports = app;
