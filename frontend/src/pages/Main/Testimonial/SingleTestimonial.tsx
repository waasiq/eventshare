import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  imgSrc: string;
  description: string;
  name: string;
}

const SingleTestimonial: React.FC<Props> = ({ imgSrc, description, name }) => {
  return (
    <motion.div
      className="bg-white overflow-hidden shadow rounded-lg flex"
      initial={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <p className="text-gray-800 text-lg mb-4">{description}</p>
        <div className="flex items-center">
          <motion.img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={imgSrc}
            alt="icon"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleTestimonial;