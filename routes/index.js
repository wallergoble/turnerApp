var express = require('express');
var router = express.Router();

const Title = require('../models/title')

/* GET home page. */
router.get('/', function(req, res, next) {
  Title.find({"TitleName" : 'Cavalcade'})
    .then( title => res.json(title))
});

module.exports = router;
