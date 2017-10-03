var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user: 'mdasifmdasif10',
    database: 'mdasifmdasif10',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input, salt) {
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}
app.get('/hash/:input', function(req, res) {
    var hashstring = hash(req.params.input, 'this-is-some-ramdon-string')
    res.send(hashstring)
});
app.get('/create-user', function(req, res) {
    var salt = crypton.getRandomBytes(128).toString('hex');
    var dbstring = hash(password, salt);
    Pool.query('INSERT INTO "users" (username,password) VALUE ($1,$2)' [username, dbstring], function(err, result) {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                res.send(JSON.stringify(result.rows));
            }
        }
    })
});

app.get('/ui/image.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'image.jpg'));
});
var naams = [];
app.get('/submit-naam', function(req, res) {
    var naam = req.param.naam;
    naams.push(naam);
    res.send(naams);
});

app.get('/ui/article.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article.html'));
});
app.get('/artical-two.html', function(req, res) {
    res.send('request is made for the artical-two to be display');
});
app.get('/artical-three.html', function(req, res) {
    res.send('request is made for the artical-three to be display');
});
app.get('/ui/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function() {
    console.log(`
        IMAD course app listening on port $ { port }!`);
});