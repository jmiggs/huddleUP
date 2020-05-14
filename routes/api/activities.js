const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Activity = require('../../models/Activity');
const validateActivityInput = require('../../validation/activity');


router.get("/test", (req, res) => res.json({ msg: "This is the activity test route" }));

//user hosting an activity
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
      // console.log(req)
      const { errors, isValid } = validateActivityInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }

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

  // if there are no filters in the request, use the first .find() to query all activities
  // if there are filters in the request, use the second .find and apply the filters
  // NOTE: will need to add more $and conditions as we implement more filters..
  if (!req.query.filters) {
    Activity.find()
      .sort({ date: -1 })
      .then(activities => res.json(activities))
      .catch(err => res.status(404).json({ noactivities: 'No activities found' }));
  } else {

    // formatting/deconstructing bounds passed from front end component
    let boundsObj = JSON.parse(req.query.filters);
    let { bounds } = boundsObj;
  
    // applying filters to select activities
    Activity.find({
      $and: [
        { lat: {$lt: bounds.northEast.lat } },
        { lng: {$lt: bounds.northEast.lng } },
        { lat: {$gt: bounds.southWest.lat } },
        { lng: {$gt: bounds.southWest.lng } }
      ]}).
      then(activities => {res.json(activities)}).
      catch( err => res.status(404).json({ noactivities: 'No activities found' }));
  }
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
// pls enforce duplicate sign up error in frontend 
router.post('/:activityid',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {

    Activity.findOneAndUpdate(
        {_id: req.params.activityid},
        { $addToSet: { participants: req.user._id} },
      ).
      then( activity => {res.json(activity)}).
      catch(err =>
        res.status(404).json({ noactivityfound: 'Cant Join Activity' })
      ); 
   
    // activity.save().then(activity => res.json(activity))
 
  });


module.exports = router;

