const db = require('../models');

exports.createMeeting = async (req, res, next) => {
  try {
    let createdMeeting = await db.Meeting.create({
      name: req.body.name,
      attendance: req.body.attendance,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    });

    let returnMeeting = await db.Meeting.findById(createdMeeting.id);
    res.status(200).json(returnMeeting);
  } catch(err) {
    return next(err);
  }
}

exports.getAllMeetings = async(req, res, next) => {
  try{
    let meetings = await db.Meeting.find({});
    return res.status(200).json(meetings);
  } catch(err) {
    return next(err);
  }
}


exports.deleteMeeting = async (req, res, next) => {
  try {
    let deletedMeeting = await db.Meeting.findByIdAndRemove(req.params.meeting_id);
    return res.status(200).json(deletedMeeting);
  } catch(err) {
    return next(err);
  }
}