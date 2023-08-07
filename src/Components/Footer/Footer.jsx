// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel odio vel erat placerat feugiat.
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Service 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Service 2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Service 3
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <p>Stay informed about our latest updates and promotions.</p>
            <form className="mt-4">
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-700 px-3 py-2 w-full text-white rounded-l focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-red-500 px-5 py-2 rounded-r hover:bg-red-600 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p>
            Made with <i className="fas fa-heart text-red-500"></i> by{' '}
            <a href="#" className="text-red-500 hover:underline">
              Your Name
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
