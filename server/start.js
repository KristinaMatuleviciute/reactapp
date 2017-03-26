'use strict';

var Path = require('path');
var Express = require('express');
var BodyParser = require('body-parser');
var fs = require('fs');

var USER_FILE = Path.join(__dirname, 'users.json')

var port = process.env.PORT || '3010';
var app = Express();
app.use('/', Express.static(Path.join(__dirname, '../dist')));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
    extended: true
}));

app.post('/submit', function(req, res) {
    var body = req.body;
    console.log('server side:data', body);
    fs.readFile(USER_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var users = JSON.parse(data);
        var newUser = {
            user: body
        };
        console.log('server side:newuser', newUser);
        users.push(newUser);
        fs.writeFile(USER_FILE, JSON.stringify(users, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(users);
            console.log('server side:users', users);
        });
    });
});

app.get('/getlist', function(req, res) {
    fs.readFile(USER_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
        console.log('server side2:' + JSON.parse(data))
        console.log('server side3:' + JSON.stringify(JSON.parse(data)))
    });
});

var server = app.listen(port);
console.log('Server listening on port localhost:' + port);
