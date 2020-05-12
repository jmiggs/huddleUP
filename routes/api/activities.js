const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Activity = require('../../models/Activity');


router.get("/test", (req, res) => res.json({ msg: "This is the activity test route" }));

//user hosting an activity
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
      // console.log(req)
      // const { errors, isValid } = validateTweetInput(req.body);
        
      // if (!isValid) {
      //   return res.status(400).json(errors);
      // }

    const newActivity = new Activity({
      title: req.body.title,
      location: req.body.location,
      sport: req.body.sport,
      description: req.body.description,
      numplayersneed: req.body.numplayersneed,
      host: req.user.id,
      participants: [req.user.id]

    });
      
    newActivity.save().then(activity => res.json(activity));
  }
);

// fetch all events in database
router.get('/', (req, res) => {
  Activity.find()
    .sort({ date: -1 })
    .then(activities => res.json(activities))
    .catch(err => res.status(404).json({ noactivities: 'No activities found' }));
});

// get activity by ID
router.get('/:id', (req, res) => {
  Activity.findById(req.params.id)
    .then(activity => res.json(activity))
    .catch(err =>
        res.status(404).json({ noactivityfound: 'No Activity found with that ID' })
    );
});

// user sign up to activity
router.post('/:activityid',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Activity.findOneAndUpdate(
        {_id: req.params.id},
        { $push: { participants: req.user._id} },
      ).
      then( activity => res.json(activity)).
      catch(err =>
        res.status(404).json({ noactivityfound: 'Cant Join Activity' })
      ); 
   
    // activity.save().then(activity => res.json(activity))
 
  });


module.exports = router;

