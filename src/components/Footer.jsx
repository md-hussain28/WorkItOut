// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="font-bold text-lg">WorkItOut</h3>
            <p>© 2024 All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
           
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-2">Follow Us</h3>
              <div className="flex justify-center md:justify-start">
                <a href="https://facebook.com" className="mx-2 text-cyan-400">Facebook</a>
                <a href="https://twitter.com" className="mx-2 text-cyan-400">Twitter</a>
                <a href="https://instagram.com" className="mx-2 text-cyan-400">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p>Designed and Developed by Vega</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
