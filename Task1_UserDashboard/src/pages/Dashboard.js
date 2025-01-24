// src/components/DashboardSummary.js
import React from "react";

const DashboardSummary = ({ users }) => {
  const totalGoals = users.reduce((sum, user) => sum + user.goals.length, 0);
  const completedGoals = users.reduce(
    (sum, user) =>
      sum + user.goals.filter((goal) => goal.status === "Completed").length,
    0
  );
  const percentageCompleted = totalGoals
    ? ((completedGoals / totalGoals) * 100).toFixed(2)
    : 0;

  return (
    <div>
      <h2>Dashboard Summary</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Completed Goals: {completedGoals}</p>
      <p>Completion Rate: {percentageCompleted}%</p>
    </div>
  );
};

export default DashboardSummary;
