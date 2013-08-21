var express = require('express'),
	wines = require('./routes/wines');
 
var app = express();
 
app.get('/', function (req, res) {
	res.send('Nodecellar Application');
});
app.get('/wines/', wines.findAll);
app.get('/wines/:id', wines.findById);
// app.get('/wines', function(req, res) {
//     res.send([{name:'wine1'}, {name:'wine2'}]);
// });
// app.get('/wines/:id', function(req, res) {
//     res.send({id:req.params.id, name: "The Name", description: "description"});
// });
 
app.listen(3000);
console.log('Listening on port 3000...');