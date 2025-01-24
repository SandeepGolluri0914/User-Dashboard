// src/App.js
import React, { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UserDetails from "./components/Userdetails";
import DashboardSummary from "./pages/Dashboard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <AddUser onAddUser={handleAddUser} />
      <DashboardSummary users={users} />
      <UserList users={users} onUserSelect={handleUserSelect} />
      <UserDetails user={selectedUser} onClose={handleCloseDetails} />
    </div>
  );
};

export default App;
