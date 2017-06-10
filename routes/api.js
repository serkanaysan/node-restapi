var express = require('express');
var db = require('../db');

var router = express.Router();


router.get('/get', function(req, res){
	db.query("Select * From user", [], function(err, result){
		if(err){
			return res.status(400).send("Select Error: " + err);
		}

		res.status(200).send({result});
	});
});

router.post('/post', function(req, res, next){
	db.query("Insert Into user (name, rank, available) Values (?, ?, ?)", [req.body.name, req.body.rank, req.body.available], function(err, result){
		if(err){
			return res.status(400).send('Insert Error: ' + err);
		}

		res.status(200).send({result});

	});
	
});

router.put('/put/:id', function(req, res){
	db.query("Update user Set name = ?, rank = ?, available = ? Where id = ?",[req.body.name, req.body.rank, req.body.available, req.params.id], function(err, result){
		if(err){
			return res.status(400).send("Update Error: " + err);
		}

		res.status(200).send({result});
	});
});

router.delete('/delete/:id', function(req, res){
	db.query("Delete From user where id=?", [req.params.id], function(err, result){
		if(err){
			return res.status(400).send('Delete Error: ' + err);
		}

		res.status(200).send({result});
	});
});

module.exports = router;