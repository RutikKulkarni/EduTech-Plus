import React from "react";

const Courses = ({ courses }) => {
  return (
    <section className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="mb-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{course.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
