import React from 'react';
import { motion } from 'framer-motion';
import SubFeature from './SubFeature';

const FeaturedEventsSection: React.FC = () => {
  return (
    <motion.div
      className="p-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h1 className="text-left sm:text-center text-2xl sm:text-3xl font-semibold mb-2">
          How Eventshare Works
        </h1>
        <p className="text-left sm:text-center w-full sm:w-2/3 lg:w-1/2 mb-10 mx-auto">
          Meet new people who share your interests through online and in-person events. It's free to create an account.
        </p>
      </div>
      <motion.div className="flex flex-row justify-center">
        <SubFeature
          imgSrc={'https://secure.meetupstatic.com/next/images/shared/handsUp.svg'}
          title={'See events from different websites'}
          description={'Find events hosted by people on other websites where you can meet new people, or create your own events and invite others to join.'}
        />
        <SubFeature
          imgSrc={'https://secure.meetupstatic.com/next/images/shared/ticket.svg?w=384'}
          title={"Save events you're interested in"}
          description={"Sign up for a free account, and whenever you find an event you like, click on the 'Save' button. You'll have a list of all the events you're interested in on your account's homepage."}
        />
        <SubFeature
          imgSrc={'https://secure.meetupstatic.com/next/images/shared/joinGroup.svg?w=384'}
          title={"Your own event manager"}
          description={"Keep track of all the events you're attending, have attended, and are interested in attending. Rate the attended events."}
        />
      </motion.div>
    </motion.div>
  );
};

export default FeaturedEventsSection;
