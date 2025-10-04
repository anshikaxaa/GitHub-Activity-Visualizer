const githubAPI = require('../services/githubAPI');

const getRepos = async (req, res) => {
  try {
    const { username } = req.params;
    const reposData = await githubAPI.getUserRepos(username);
    res.json(reposData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getRepos
};
