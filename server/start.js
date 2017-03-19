'use strict';

var Path = require('path');
var Express = require('express');
var BodyParser = require('body-parser');

var port = process.env.PORT || '3010';
var app = Express();
app.use('/', Express.static(Path.join(__dirname, '../dist')));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));


var server = app.listen(port);
console.log('Server listening on port localhost:' + port);
