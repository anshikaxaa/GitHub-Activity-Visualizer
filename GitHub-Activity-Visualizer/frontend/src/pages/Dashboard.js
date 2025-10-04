import React from 'react';
import { motion } from 'framer-motion';
import UserCard from '../components/UserCard';
import RepoList from '../components/RepoList';
import ActivityChart from '../components/ActivityChart';
import LanguageChart from '../components/LanguageChart';

const Dashboard = ({ user, repos, activity }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gray-50 p-6"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div variants={itemVariants}>
          <UserCard user={user} />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <RepoList repos={repos} />
          <LanguageChart repos={repos} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ActivityChart activity={activity} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
