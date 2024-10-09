import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

const Dashboard = () => {
  const { userId } = useAuth();

  return (
    <div className="flex">
      <main className="flex-1 p-4">
        <h1 className="text-2xl">Welcome to Your Dashboard!</h1>
      </main>
    </div>
  );
};

export default Dashboard;
