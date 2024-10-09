import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <section className="min-h-[600px] flex flex-col justify-center items-center text-center bg-blue-600 dark:bg-blue-800">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Welcome to EduTech+
        </h1>
        <p className="text-lg mb-8 text-white">
          Empowering your learning journey.
        </p>
        <Link to="/dashboard">
          <button className="px-6 py-3 rounded-full font-semibold bg-white text-blue-600 hover:bg-gray-200 transition duration-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Get Started
          </button>
        </Link>
      </section>

      <section className="flex flex-col items-center py-16">
        <h2 className="text-4xl font-bold mb-8 dark:text-white">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
          {[
            {
              title: "Personalized Learning",
              description: "Tailored learning experiences that fit your pace.",
            },
            {
              title: "Expert Instructors",
              description: "Learn from industry professionals and educators.",
            },
            {
              title: "Real-Time Analytics",
              description: "Track your progress and engagement in real-time.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg p-6 text-center bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
