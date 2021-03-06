var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var passport = require('../lib/auth');
var helpers = require('../lib/helpers');
function Games() {
  return knex('games');
}

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) {
      res.json({title: 'Error', errors: ['Email and/or password incorrect']})
    } else {
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        } else {
          return res.json({status: 'login', user: user});
        }
      });
    }
  })(req, res, next);
});

router.post('/register', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  knex('users').where('email', email)
    .then(function(data){
      // if email is in the database send an error
      if(data.length) {
        res.json({title: 'Error', errors: ['Email already exists']})
      } else {
        // hash and salt the password
        var hashedPassword = helpers.hashing(password);
        // if email is not in the database insert it
        knex('users').insert({
          email: email,
          password: hashedPassword
        })
        .then(function(data) {
          res.json({message: 'successfully registered, please login!', status: 200})
        })
        .catch(function(err) {
          return res.json('crap');
        });
      }
    })
    .catch(function(err){
      return next(err);
    });
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.status(200).json({status: 'Bye'});
});

router.get('/games', function(req, res, next) {
  Games().select()
  .then(function(games){
    res.json(games);
  })
});

router.get('/showpage/:id', function(req, res, next) {
  Games().where('id', req.params.id).first().then(function(game){
    res.json(game);
  })
});

router.post('/game', function(req, res, next) {
  console.log('hitting /game');
  console.log(req.body);
  Games().insert(req.body.game, 'id')
  .then(function(result){
    res.json({
      status: 200,
      message: 'Succesfully saved '+req.body.game
    });
  })
  .catch(function(err){
    console.log('errorrrrrrrrrr', err)
  })
})

router.delete('/showpage/:id', function(req, res, next){
  Games().where('id', req.params.id).del()
  .then(function(result){
    res.json(result);
  })
})


module.exports = router;
