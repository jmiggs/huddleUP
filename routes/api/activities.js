const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Activity = require('../../models/Activity');
const User = require('../../models/User');
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
      participants: [req.user.id],


      lat: req.body.lat,
      lng: req.body.lng,
      day: req.body.day,
      time: req.body.time
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
    // console.log(boundsObj)
    // applying filters to select activities
    Activity.find({
      $and: [
        { lat: {$lt: bounds.northEast.lat } },
        { lng: {$lt: bounds.northEast.lng } },
        { lat: {$gt: bounds.southWest.lat } },
        { lng: {$gt: bounds.southWest.lng } },
        { sport: boundsObj.sport },
        { time: {$in: boundsObj.time } },
        { day: {$in: boundsObj.day } },
        { location: boundsObj.location }
      ]}).
      then(activities => {res.json(activities);}).
      catch( err => res.status(404).json({ noactivities: 'No activities found' }));
  }

});

// get activity by ID
router.get('/:id', (req, res) => {
  // console.log(res) // My console logs don't work (Dorian)
  Activity.findById(req.params.id)
    .then(activity => res.json(activity)) 
    .catch(err =>
        res.status(404).json({ noactivityfound: 'No Activity found with that ID' })
    );
});

// update activity by ID
router.patch("/:id", (req, res) => {
  // console.log(req)

  let filter = { _id: req.params.id };
  let update = req.body;

  Activity.findOneAndUpdate(filter, update, { new: true })
    .then(activity => {
      // console.log(user)
      let updateActivity = {
        id: activity._id,
        title: activity.title,
        location: activity.location,
        lat: activity.lat,
        lng: activity.lng,
        sport: activity.sport,
        day: activity.day,
        time: activity.time,
        date: activity.date,
        description: activity.description,
        numplayersneed: activity.numplayersneed,
        participants: activity.participants,
        host: activity.host
      }
      res.json(updateActivity)
    })
    .catch(err =>
      res.status(400).json(err))
});

//get activities that a user is attending
router.get('/users/:id', (req, res) => {
  // console.log(req)
  Activity.find( {participants: req.params.id} )
    .then(activities => {res.json(activities);})
    .catch(err =>
        res.status(404).json({ noactivityfound: 'No Activity found with that ID' })
    );
});


// get activity by sport
router.get('/sport/:sport', (req, res) => {

  // console.log(req) 
  Activity.find( { sport: req.params.sport } )
    .then(activities => res.json(activities))
    .catch(err =>
        res.status(404).json({ noactivityfound: 'No Activity found' })
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

    User.findOneAndUpdate(
        {_id: req.user._id},
        { $addToSet: { attending: req.params.activityid } },
      ).
      catch( err =>
        res.status(404).json({ noactivityfound: 'Cant Join Activity' })
    ) 
    // activity.save().then(activity => res.json(activity))
 
  });

//  unsubscribe to event
router.patch('/unsubscribe/:activityid', 
  passport.authenticate('jwt', {session: false}), 
  (req, res) => {

    Activity.findOneAndUpdate(
        {_id: req.params.activityid},
        { $pull: { participants: req.user._id} },
      ).
      then( activity => {res.json(activity)}).
      catch(err =>
        res.status(404).json({ noactivityfound: 'Cant Unjoin Activity' })
  );

    User.findOneAndUpdate(
        {_id: req.user._id},
        { $pull: { attending: req.params.activityid } },
      ).
      catch( err =>
        res.status(404).json({ noactivityfound: 'Cant Unjoin Activity' })
  ) 
  // activity.save().then(activity => res.json(activity))
});


module.exports = router;

