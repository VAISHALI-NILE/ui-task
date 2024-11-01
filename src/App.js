import React, { useState } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const employees = [
    {
      name: "John Doe",
      role: "Software Engineer",
      email: "john.doe@example.com",
      status: "active",
      img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      email: "jane.smith@example.com",
      status: "inactive",
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Alice Johnson",
      role: "UX Designer",
      email: "alice.johnson@example.com",
      status: "active",
      img: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bob Brown",
      role: "Data Scientist",
      email: "bob.brown@example.com",
      status: "inactive",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Charlie Davis",
      role: "Product Manager",
      email: "charlie.davis@example.com",
      status: "active",
      img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Emma Wilson",
      role: "Marketing Specialist",
      email: "emma.wilson@example.com",
      status: "active",
      img: "https://plus.unsplash.com/premium_photo-1661726660137-61b182d93809?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const filteredEmployees = employees.filter((employee) => {
    const matchesFilter = filter === "all" || employee.status === filter;
    const matchesSearch =
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container">
      <div className="top">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Profile />
      </div>
      <Header setFilter={setFilter} filter={filter} />
      <div className="card-container">
        {filteredEmployees.map((employee, index) => (
          <Card
            key={index}
            name={employee.name}
            role={employee.role}
            email={employee.email}
            profile={employee.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
