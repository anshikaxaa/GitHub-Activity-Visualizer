import React from 'react';

const UserCard = ({ user }) => {
  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-600">@{user.login}</p>
          {user.bio && <p className="text-gray-700 mt-2">{user.bio}</p>}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-600">{user.followers}</div>
          <div className="text-sm text-gray-600">Followers</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-600">{user.following}</div>
          <div className="text-sm text-gray-600">Following</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-600">{user.public_repos}</div>
          <div className="text-sm text-gray-600">Repos</div>
        </div>
      </div>
      <div className="mt-4">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default UserCard;
