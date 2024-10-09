import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import Sidebar from "../components/sidebar";
import Analytics from "../components/Analytics";
import Courses from "../components/Courses";
import axios from "axios";

const Dashboard = () => {
  const { userId } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setCourses(response.data.slice(0, 5));
    };
    fetchCourses();
  }, []);

  if (!userId) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to your Dashboard!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Courses courses={courses} />
          <Analytics />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
