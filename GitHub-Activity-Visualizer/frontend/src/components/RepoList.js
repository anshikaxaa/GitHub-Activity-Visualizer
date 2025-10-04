import React from 'react';

const RepoList = ({ repos }) => {
  if (!repos) return <div>Loading...</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Repositories</h3>
      <div className="space-y-4">
        {repos.map((repo) => (
          <div key={repo.id} className="border-b border-gray-200 pb-4 last:border-b-0">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-blue-600 hover:underline">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h4>
                {repo.description && (
                  <p className="text-gray-700 mt-1">{repo.description}</p>
                )}
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                  {repo.language && (
                    <span className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                      {repo.language}
                    </span>
                  )}
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Updated {new Date(repo.updated_at).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
