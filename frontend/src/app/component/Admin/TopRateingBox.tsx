import React from 'react';

const TopRateingBox = () => {
  const ratings = [
    { user: 'user1', rating: 5 },
    { user: 'user2', rating: 5 },
    { user: 'user3', rating: 5 },
    { user: 'user4', rating: 4 },
    { user: 'user5', rating: 4 },
    { user: 'user6', rating: 3 },
    { user: 'user7', rating: 3 },
    { user: 'user8', rating: 2 },
    { user: 'user9', rating: 2 },
    // { user: 'user10', rating: 1 },
  ];

  return (
    <div className="w-[300px] h-[790px] bg-white rounded-xl shadow-xl m-6 mt-[30px] p-3 flex flex-col">
      <div className="flex justify-between items-center mb-6 mt-3">
        <h2 className="text-xl font-bold text-gray-800">User Ratings</h2>
        <button className="border border-gray-300 bg-gray-100 text-sm rounded-lg px-3 py-1 hover:bg-gray-200 transition">
          View all
        </button>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto pr-2">
        {ratings.map(({ user, rating }, index) => {
          const color =
            rating === 5
              ? 'bg-green-500 text-white'
              : rating >= 3
              ? 'bg-yellow-400 text-black'
              : 'bg-red-400 text-white';

          return (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl hover:scale-[1.01] hover:shadow transition-all bg-gray-50"
            >
              <span className="font-medium text-gray-700">{user}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full ${color}`}>
                  {rating}★
                </span>
                <div className="text-yellow-400 text-base animate-pulse">
                  {'★'.repeat(rating)}
                  <span className="text-gray-300">{'★'.repeat(5 - rating)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRateingBox;
