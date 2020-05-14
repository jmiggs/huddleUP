const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ActivitySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  sport: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  },
  numplayersneed: {
    type: Number,
    required: true
  },
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  host: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

})

module.exports = Activity = mongoose.model('Activity', ActivitySchema);
