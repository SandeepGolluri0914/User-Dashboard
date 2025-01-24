// src/components/UserList.js
import React, { useState } from "react";

const UserList = ({ users, onUserSelect }) => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSortAsc(!sortAsc)}>
        Sort by Name {sortAsc ? "⬆️" : "⬇️"}
      </button>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} onClick={() => onUserSelect(user)}>
            {user.name} ({user.email}) - {user.goals.length} goals
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
