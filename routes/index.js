var express = require('express');
var router = express.Router();

const Title = require('../models/title')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

// Respond with all titles
router.get('/all', (req, res, next) => {
  Title.find({})
    .then(titles => res.json(titles.filter(title => title.TitleName !== title.TitleNameSortable)))
})

// Get title by Name
router.get('/search/:query', (req, res, next) => {
  let query = req.params.name
  Title.find({ 'TitleName' : { '$regex': req.params.query, '$options': 'i' } })
    .then(titles => res.json(titles))
})

// Get title by ID
router.get('/id/:id', (req, res, next) => {
  Title.find({"TitleId" : req.params.id})
    .then(title => res.json(title))
})

// Sanity Checker
router.get('/sanity', (req, res, next) => {
  Title.find({"TitleName" : 'Cavalcade'})
    .then( title => {
      console.log(title)
      res.json(title)
    })
})

module.exports = router;
