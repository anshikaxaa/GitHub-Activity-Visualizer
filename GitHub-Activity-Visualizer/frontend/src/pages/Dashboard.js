import React from 'react';
import UserCard from '../components/UserCard';
import RepoList from '../components/RepoList';
import ActivityChart from '../components/ActivityChart';
import LanguageChart from '../components/LanguageChart';

const Dashboard = ({ user, repos, activity }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <UserCard user={user} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RepoList repos={repos} />
          <LanguageChart repos={repos} />
        </div>
        <ActivityChart activity={activity} />
      </div>
    </div>
  );
};

export default Dashboard;
