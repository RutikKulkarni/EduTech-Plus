import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} EduTech+. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-2">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out"
          >
            Privacy Policy
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="/terms"
            className="text-gray-400 hover:text-gray-200 transition duration-200 ease-in-out"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
