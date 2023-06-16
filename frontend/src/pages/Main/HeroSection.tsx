import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-32 py-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2 lg:w-2/3">
          <h1 className="text-black text-3xl sm:text-5xl font-bold">
            Discover Diverse Events, One Platform
          </h1>
          <p className="text-lg my-8">
            Explore diverse events from multiple websites in one place. Discover social gatherings, professional meetups, and exciting activities. Connect, expand, and make memories effortlessly.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
            Join Now
          </button>
        </div>
        <div className="md:w-1/2 lg:w-1/3">
          <img
            src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080"
            alt="Meetup Image"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;