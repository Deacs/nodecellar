var express = require('express'),
	wines = require('./routes/wines');
 
var app = express();

app.configure(function() {
	app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
	app.use(express.bodyParser());
});

app.get('/', function (req, res) {
	res.send('Nodecellar Application');
});

app.get('/wines/', wines.findAll);
app.get('/wines/:id', wines.findById);
app.post('/wines', wines.addWine);
app.put('/wines/:id', wines.updateWine);
// app.delete('/wines/:id', wines.deleteWine);

app.listen(3000);
console.log('Listening on port 3000...');