const githubAPI = require('../services/githubAPI');

const getActivity = async (req, res) => {
  try {
    const { username } = req.params;
    const activityData = await githubAPI.getUserActivity(username);
    res.json(activityData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getActivity
};
