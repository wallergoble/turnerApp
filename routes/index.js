var express = require('express');
var router = express.Router();

const Title = require('../models/title');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Respond with all titles
router.get('/all', (req, res, next) => {
  Title.find({}).then(titles => res.json(titles));
});

// Get title by Name
router.get('/search/:query', (req, res, next) => {
  let query = req.params.name;
  Title.find({ TitleName: { $regex: req.params.query, $options: 'i' } })
    .then(titles => res.json(titles))
    .catch(err => console.error(err));
});

// Get title by ID
router.get('/id/:id', (req, res, next) => {
  Title.find({ TitleId: req.params.id })
    .then(title => res.json(title))
    .catch(err => console.error(err));
});

// Get title by date
router.get('/title/:date', (req, res, next) => {
  Title.find({ ReleaseYear: req.params.date })
    .then(titles => res.json(titles))
    .catch(err => console.error(err));
});

module.exports = router;
