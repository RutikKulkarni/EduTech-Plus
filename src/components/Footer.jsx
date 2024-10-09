import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} EduTech+. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a to="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a to="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
