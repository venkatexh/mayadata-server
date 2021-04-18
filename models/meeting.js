const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  attendance: {
    type: Number
  },

  date: {
    type: String,
    required: true
  },

  startTime: {
    type: String,
    required: true
  },

  endTime: {
    type: String,
    required: true
  }
})

const Meeting = mongoose.model('Meeting', meetingSchema);
module.exports = Meeting;