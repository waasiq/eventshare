import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="px-32 py-36">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2 lg:w-2/3 px-24">
          <h1 className="text-black text-3xl sm:text-5xl font-bold">
            Discover Diverse Events, One Platform
          </h1>
          <p className="text-lg my-8 text-justify">
            Explore diverse events from multiple websites in one place. Discover social gatherings, professional meetups, and exciting activities. Connect, expand, and make memories effortlessly.
          </p>
          
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded">
              Join Now
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <img
            src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080"
            alt="Meetup Image"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;