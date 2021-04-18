const express = require('express');
const router = express.Router({mergeParams: true});
const { getAllMeetings, createMeeting, deleteMeeting } = require('../handlers/meeting');

router.route('/')
  .get(getAllMeetings)
  .post(createMeeting)

router.route('/:meeting_id')
  .delete(deleteMeeting)

module.exports = router;