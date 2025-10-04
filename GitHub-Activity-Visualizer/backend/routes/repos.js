const express = require('express');
const { getRepos } = require('../controllers/reposController');

const router = express.Router();

router.get('/:username', getRepos);

module.exports = router;
