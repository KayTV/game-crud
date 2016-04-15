var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
function Games() {
  return knex('games');
}

router.get('/games', function(req, res, next) {
  Games().select()
  .then(function(games){
    res.json(games);
  })
});

router.get('/showpage/:id', function(req, res, next) {
  Games().where('id', req.params.id).first().then(function(movie){
    res.json(movie);
  });
})


module.exports = router;
