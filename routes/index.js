var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/versao', function(req, res, next) {
  res.json({status: "funcionando", versao: "0.0.3"})
});

module.exports = router;
