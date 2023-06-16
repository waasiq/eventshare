import React from 'react';
import { motion } from 'framer-motion';
import SingleTestimonial from './SingleTestimonial';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <p className="text-gray-600">Here's what our customers are saying about us.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SingleTestimonial
              imgSrc="https://www.clipartmax.com/png/small/314-3143701_profile-clipart-john-doe-profile-clipart-john-doe.png"
              description="Finally a place where I can find all the events I want to attend in one place!"
              name="John Doe"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SingleTestimonial
              imgSrc="https://www.clipartmax.com/png/small/314-3143701_profile-clipart-john-doe-profile-clipart-john-doe.png"
              description="Just another amazing testimonial that will make you look good and trustworthy!"
              name="Jane Smith"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SingleTestimonial
              imgSrc="https://www.clipartmax.com/png/small/314-3143701_profile-clipart-john-doe-profile-clipart-john-doe.png"
              description="This is a great place to find all the events I want to attend in one place!"
              name="James Johnson"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;