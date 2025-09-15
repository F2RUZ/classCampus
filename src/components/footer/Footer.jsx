import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">⚡ Classcamp</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-2">PRODUCT</h3>
            <ul className="space-y-1">
              <li>Create a course</li>
              <li>Find a course</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">COMPANY</h3>
            <ul className="space-y-1">
              <li>For Creators</li>
              <li>About us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">RESOURCES</h3>
            <ul className="space-y-1">
              <li>FAQ</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Impressum</li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-gray-400">🎥</a>
          <a href="#" className="text-white hover:text-gray-400">📸</a>
          <a href="#" className="text-white hover:text-gray-400">🐦</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;