import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="mt-auto bg-gray-800 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-medium">About EventShare</h3>
          <ul className="mt-4">
            <li className="my-2">
              <button>How EventShare works</button>
            </li>
            <li className="my-2">
              <button>Newsroom</button>
            </li>
            <li className="my-2">
              <button>Investors</button>
            </li>
            <li className="my-2">
              <button>EventShare Plus</button>
            </li>
            <li className="my-2">
              <button>EventShare Luxe</button>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-medium">Community</h3>
          <ul className="mt-4">
            <li className="my-2">
              <button>Diversity & Belonging</button>
            </li>
            <li className="my-2">
              <button>Accessibility</button>
            </li>
            <li className="my-2">
              <button>EventShare Associates</button>
            </li>
            <li className="my-2">
              <button>Frontline Stays</button>
            </li>
            <li className="my-2">
              <button>Referrals</button>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-medium">Events</h3>
          <ul className="mt-4">
            <li className="my-2">
              <button>Check out new Events</button>
            </li>
            <li className="my-2">
              <button>Store your events</button>
            </li>
            <li className="my-2">
              <button>EventShare for Work</button>
            </li>
            <li className="my-2">
              <button>Invite friends</button>
            </li>
            <li className="my-2">
              <button>EventShare Events</button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">Connect with us</h3>
          <ul className="mt-4 flex space-x-4">
            <li>
              <button>
                <FaFacebookF className="w-6 h-6" />
              </button>
            </li>
            <li>
              <button>
                <FaTwitter className="w-6 h-6" />
              </button>
            </li>
            <li>
              <button>
                <FaInstagram className="w-6 h-6" />
              </button>
            </li>
            <li>
              <button>
                <FaYoutube className="w-6 h-6" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800  py-4 text-center">
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} EventShare, Inc. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;