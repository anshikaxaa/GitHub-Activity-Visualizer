const express = require('express');
const { getActivity } = require('../controllers/activityController');

const router = express.Router();

router.get('/:username', getActivity);

module.exports = router;
