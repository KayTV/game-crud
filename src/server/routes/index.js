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


module.exports = router;
