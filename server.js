var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content={
     title:'article one',
   heading:'article one',
      date:'26 jan 2017',
   content:`'  
           <p>
                this is the artical i have writen for the first time with the help of the imad tech. This artical is not to shoe you, its for me to examine This artical is not to shoe you, its for me to examine This artical is not to shoe you, its for me to examine 
            </p>
            <p>
                this is the artical i have writen for the first time with the help of the imad tech. This artical is not to shoe you, its for me to examine This artical is not to shoe you, its for me to examine 
            </p>
            <p>
                this is the artical i have writen for the first time with the help of the imad tech. This artical is not to shoe you, its for me to examine
           </p>'`
};



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/article.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article.html'));
});
app.get('/artical-two.html', function(req,res){
   res.send('request is made for the artical-two to be display'); 
});
app.get('/artical-three.html', function(req,res){
   res.send('request is made for the artical-three to be display'); 
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
