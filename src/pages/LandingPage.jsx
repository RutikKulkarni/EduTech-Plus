import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative w-full min-h-[400px] bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 text-center flex items-center justify-center"
          id="home"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-extrabold text-white dark:text-gray-100">
              Welcome to EduTech+
            </h1>
            <p className="mt-4 text-lg text-white dark:text-gray-300 opacity-90">
              Empowering learners with cutting-edge educational technology.
            </p>
            <button className="mt-6 bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200">
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="w-full py-16 bg-gray-100 dark:bg-gray-800"
          id="features"
        >
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Extensive Course Library",
                  description:
                    "Access a wide range of courses across various disciplines.",
                },
                {
                  title: "Interactive Learning",
                  description:
                    "Engage with peers and instructors in real-time.",
                },
                {
                  title: "Progress Tracking",
                  description:
                    "Monitor your learning journey with detailed analytics.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
