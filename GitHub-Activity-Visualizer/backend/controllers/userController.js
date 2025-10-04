const githubAPI = require('../services/githubAPI');

const getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const userData = await githubAPI.getUser(username);
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser
};
