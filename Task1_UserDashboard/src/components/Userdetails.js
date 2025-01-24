// src/components/UserDetails.js
import React from "react";

const UserDetails = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal">
      <h2>{user.name}'s Goals</h2>
      <ul>
        {user.goals.map((goal, index) => (
          <li key={index}>
            <strong>{goal.title}</strong> - {goal.deadline} ({goal.status})
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default UserDetails;
