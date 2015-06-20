var express = require('express');
var router = express.Router();
var arr=new Array();

/* GET contacts */
router.get('/:id', function(req, res, next) {
	var id=req.params.id;
	res.send(arr[id]);
});

router.post('/', function(req, res, next) {
  	var c = req.body;
  	c.messages=new Array();
  	arr.push(c);
  	res.send(arr.length-1+"");
});

router.put('/:id', function(req, res, next) { //update
	var b=req.body;
  	var id=req.params.id;
  	var key=Object.keys(b);
  	arr[id][key]=b[key];
  	res.send(arr[id]);
});

router.post('/:contacts', function(req,res,next) {
	//console.log(contacts)
	var msg = req.body.message;
	var id = req.params.contacts;
	arr[id].messages.push(msg);
	res.send(arr[id].messages[arr[id].messages.length-1]);
});

router.put('/:contacts/:message', function(req, res, next) { //update Message
	var msg=req.body.message;
	var msgid=req.params.message;
	var id = req.params.contacts;
	arr[id].messages[msgid] = msg;
	//console.log()
	res.send(arr[id].messages[msgid]);
});



module.exports = router;


