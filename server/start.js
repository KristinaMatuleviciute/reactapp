'use strict';

var Path = require('path');
var Express = require('express');
var BodyParser = require('body-parser');
var fs = require('fs');
var _ = require('lodash');

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
    fs.readFile(USER_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var users = JSON.parse(data);
        var newUser = {
            user: body
        };
        users.push(newUser);
        fs.writeFile(USER_FILE, JSON.stringify(users, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(users);
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
    });
});

app.delete('/delete/:id', function(req, res) {
    var id = req.params.id;
    //console.log('id', id);
    fs.readFile(USER_FILE, function(err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        var myArray = JSON.parse(data);
        myArray =
            myArray.filter(function(el) {
                return el.user.id != id;
            });
        fs.writeFile(USER_FILE, JSON.stringify(myArray, null, 4), function(err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json(myArray);
        });

    });
});



var server = app.listen(port);
console.log('Server listening on port localhost:' + port);
