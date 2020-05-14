const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateUserUpdate = require('../../validation/update_user');

//test route for users
router.get("/test", (req, res) => res.json({ msg: "This is the users test route" }));

//route for user register
//route for user register
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log(req.body)
    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          // Throw a 400 error if the email address already exists
          return res.status(400).json({email: "A user has already registered with this address"})
        } else {
          // Otherwise create a new user
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
          })

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
          })
        }
      })
})

// route for user login
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  console.log(errors);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if (!user) {
        return res.status(404).json({email: 'This user does not exist'});
      }

      bcrypt.compare(password, user.password)
      .then(isMatch => {
          if (isMatch) {
          const payload = {
            id: user.id, 
            username: user.username, 
            location: user.location,
            bio: user.bio,
            sports: user.sports,
            picture: user.picture
          };

          jwt.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              {expiresIn: 3600},
              (err, token) => {
              if (err) res.json(err);
              res.json({
                  success: true,
                  token: 'Bearer ' + token
              });
            });
          } else {
              return res.status(400).json({password: 'Incorrect password'});
          }
      })
    })
})


// router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
//   console.log(req)
//   res.json({
//     id: req.user.id,
//     username: req.user.username,
//     email: req.user.email,
//     location: user.location,
//     bio: user.bio,
//     sports: user.sports,
//     picture: user.picture
//   });
// })

// update user's info
router.patch("/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateUserUpdate(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  let filter = {_id: req.user._id};
  let update = req.body;

  User.findOneAndUpdate(filter, update, {new: true})
    .then(user => {
      // console.log(user)
      let updateUser = {
        id: user._id,
        username: user.username,
        picture: user.picture,
        location: user.location,
        bio: user.bio,
        sports: user.sports
      }
      res.json(updateUser)
    })
    .catch(err => 
      res.status(400).json(err))

});

router.get("/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      console.log(user)
      let returnedUser = {
        id: user._id,
        username: user.username,
        picture: user.picture,
        location: user.location,
        bio: user.bio,
        sports: user.sports
      }
      res.json(returnedUser)
    })
    .catch(err =>
      res.status(400).json(err))

});

module.exports = router;