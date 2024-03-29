var express = require('express');
var router = require('./routes/routes.js');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds001.mlab.com:001/db101');
app.use('/', router);
module.exports=app;