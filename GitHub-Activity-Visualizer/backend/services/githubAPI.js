const axios = require('axios');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes TTL

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

class GitHubAPI {
  constructor() {
    this.token = process.env.GITHUB_TOKEN;
    this.client = axios.create({
      baseURL: GITHUB_API_BASE,
      headers: {
        'Authorization': this.token ? `token ${this.token}` : undefined,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    this.graphqlClient = axios.create({
      url: GITHUB_GRAPHQL_URL,
      method: 'post',
      headers: {
        'Authorization': this.token ? `bearer ${this.token}` : undefined,
        'Content-Type': 'application/json'
      }
    });
  }

  async getUser(username) {
    const cacheKey = `user_${username}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await this.client.get(`/users/${username}`);
      const userData = {
        login: response.data.login,
        name: response.data.name,
        avatar_url: response.data.avatar_url,
        bio: response.data.bio,
        followers: response.data.followers,
        following: response.data.following,
        public_repos: response.data.public_repos,
        html_url: response.data.html_url
      };
      cache.set(cacheKey, userData);
      return userData;
    } catch (error) {
      throw new Error(`Failed to fetch user data: ${error.message}`);
    }
  }

  async getUserRepos(username) {
    const cacheKey = `repos_${username}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
      const response = await this.client.get(`/users/${username}/repos`, {
        params: {
          sort: 'updated',
          per_page: 100
        }
      });
      const reposData = response.data.map(repo => ({
        name: repo.name,
        full_name: repo.full_name,
        html_url: repo.html_url,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at
      }));
      cache.set(cacheKey, reposData);
      return reposData;
    } catch (error) {
      throw new Error(`Failed to fetch repos: ${error.message}`);
    }
  }

  async getUserActivity(username) {
    const cacheKey = `activity_${username}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
      const query = `
        query($userName: String!) {
          user(login: $userName) {
            contributionsCollection {
              contributionCalendar {
                colors
                totalContributions
                weeks {
                  contributionDays {
                    color
                    contributionCount
                    date
                    weekday
                  }
                  firstDay
                }
              }
            }
          }
        }
      `;
      const response = await this.graphqlClient({
        data: {
          query,
          variables: { userName: username }
        }
      });
      const activityData = response.data.data.user.contributionsCollection.contributionCalendar;
      cache.set(cacheKey, activityData);
      return activityData;
    } catch (error) {
      throw new Error(`Failed to fetch activity: ${error.message}`);
    }
  }
}

module.exports = new GitHubAPI();
