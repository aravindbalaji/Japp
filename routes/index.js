var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;



/* GET home page. */
router.get('/', function(req, res, next) {

	MongoClient.connect('mongodb://localhost:27017/jai', function(err, db) {
		if (err) {
			throw err;
		}
		

		// db.collection('users').insert({name: "Aravind Balaji"});

		db.collection('users').find().toArray(function(err, result) {
			if (err) {
				throw err;
			}
			console.log(result);
		});
	});

	
	res.render('index', { title: 'Express' });
});

module.exports = router;
