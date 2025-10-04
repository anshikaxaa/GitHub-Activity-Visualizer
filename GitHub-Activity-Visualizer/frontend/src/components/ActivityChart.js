import React from 'react';

const ActivityChart = ({ activity }) => {
  if (!activity) return <div>Loading...</div>;

  const { weeks, colors } = activity;

  const getColor = (count) => {
    if (count === 0) return '#ebedf0';
    if (count < 5) return '#9be9a8';
    if (count < 10) return '#40c463';
    if (count < 20) return '#30a14e';
    return '#216e39';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Contribution Activity</h3>
      <div className="text-sm text-gray-600 mb-4">
        Total contributions: {activity.totalContributions}
      </div>
      <div className="overflow-x-auto">
        <div className="flex space-x-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col space-y-1">
              {week.contributionDays.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: getColor(day.contributionCount) }}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center mt-4 text-sm text-gray-600">
        <span>Less</span>
        <div className="flex ml-2 space-x-1">
          <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
          <div className="w-3 h-3 rounded-sm bg-green-200"></div>
          <div className="w-3 h-3 rounded-sm bg-green-400"></div>
          <div className="w-3 h-3 rounded-sm bg-green-600"></div>
          <div className="w-3 h-3 rounded-sm bg-green-800"></div>
        </div>
        <span className="ml-2">More</span>
      </div>
    </div>
  );
};

export default ActivityChart;
