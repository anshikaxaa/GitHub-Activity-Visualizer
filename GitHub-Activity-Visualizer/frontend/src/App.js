import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Loading from './components/Loading';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchData = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const [userRes, reposRes, activityRes] = await Promise.all([
        axios.get(`/api/user/${username}`),
        axios.get(`/api/repos/${username}`),
        axios.get(`/api/activity/${username}`)
      ]);

      setUser(userRes.data);
      setRepos(reposRes.data);
      setActivity(activityRes.data);

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home onSearch={fetchData} />} />
      <Route
        path="/dashboard"
        element={
          loading ? (
            <Loading />
          ) : error ? (
            <div className="text-center mt-20 text-red-600">{error}</div>
          ) : (
            <Dashboard user={user} repos={repos} activity={activity} />
          )
        }
      />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
