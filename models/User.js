const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  bio: {
    type: String
  },
  location: {
    type: String
  },
  sports: {
    type: [String]
  },
  profile: {
    type: String
  },
  hosting: [{
    type: Schema.Types.ObjectId,
    ref: 'Activity'
  }],
  attending: [{
    type: Schema.Types.ObjectId,
    ref: 'Activity'
  }]
})

module.exports = User = mongoose.model('User', UserSchema);
