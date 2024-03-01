import { useState } from "react";

const employeesData = [
  {
    id: 1,
    fullName: "Joane Doe",
    age: 36,
    occupation: "Software Engineer",
    gender: "Male",
  },
  {
    id: 2,
    fullName: "Kevin Willison",
    age: 22,
    occupation: "flutter Engineer",
    gender: "Male",
  },

  {
    id: 3,
    fullName: "Rosey Smith",
    age: 25,
    occupation: "Backend Engineer",
    gender: "Female",
  },

  {
    id: 4,
    fullName: "Daniel Gillies",
    age: 27,
    occupation: "UI/UX",
    gender: "Male",
  },

  {
    id: 5,
    fullName: "Marry Anne",
    age: 23,
    occupation: "Graphics Designer",
    gender: "Female",
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const data = employeesData
    .slice()
    .filter((employee) =>
      employee.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="App">
      <EmployeesList
        onSearchInput={handleChange}
        searchTerm={searchTerm}
        data={data}
      />
    </div>
  );
}

const EmployeesList = ({ onSearchInput, searchTerm, data }) => {
  const [sortBy, setSortBy] = useState("input");

  let filteredEmployees = data;

  if (sortBy === "sortByName")
    filteredEmployees = filteredEmployees
      .slice()
      .sort((a, b) => a.fullName.localeCompare(b.fullName));

  if (sortBy === "age")
    filteredEmployees = filteredEmployees
      .slice()
      .sort((a, b) => Number(a.age) - Number(b.age));

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="main--container">
      <div className="searchBar">
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchInput}
          placeholder="Search..."
        />

        <select value={sortBy} onChange={handleSort}>
          <option value="input">Sort by input</option>
          <option value="age">Sort by age</option>
          <option value="sortByName">Sort by name</option>
        </select>
      </div>

      <div className="article">
        {filteredEmployees.map((employee) => (
          <EmployeeList key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

const EmployeeList = ({ employee }) => {
  return (
    <div className="card">
      <p>Name: {employee.fullName}</p>
      <p>Occupation: {employee.occupation}</p>
      <p>Age: {employee.age}</p>
      <p>gender: {employee.gender}</p>
    </div>
  );
};
