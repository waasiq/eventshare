import React from 'react';
import { Link } from 'react-router-dom';

const FeedHero: React.FC = () => {
  return (
    <div className="bg-blue-500 py-10 rounded-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Search new events</h1>
          <Link to="/search-events">
            <button className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white py-2 px-6 rounded-full font-bold">
              Browse Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedHero;
