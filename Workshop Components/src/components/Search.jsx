import { useState } from "react";

export default function Search({ users, setFilteredUsers }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  function clearSearchHandler(event, setFilteredUsers, users) {
    event.preventDefault();
    setSearchValue("");
    setSelectedOption("");
    setFilteredUsers(users);
  }

  const options = [
    {
      name: "Not selected",
      value: ""
    },
    {
      name: "First Name",
      value: "firstName"
    },
    {
      name: "Last Name",
      value: "lastName"
    },
    {
      name: "Email",
      value: "email"
    },
    {
      name: "Phone",
      value: "phoneNumber"
    }
  ] 

  const getOptions = () => {
    return (
      options.map(option => <option key={option.name} value={option.value}>{option.name}</option>)
    )
  }

  return (
    <form onSubmit={(event) => searchSubmitHandler(event, setFilteredUsers)} className="search-form">
      <h2>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user"
          className="svg-inline--fa fa-user SearchBar_icon__cXpTg" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
          </path>
        </svg>
        <span>Users</span>
      </h2>
      <div className="search-input-container">
        <input type="text"
          placeholder="Please, select the search criteria"
          name="search"
          onChange={handleChange}
          value={searchValue}
        />

        <button onClick={(event) => clearSearchHandler(event, setFilteredUsers, users)} className="btn close-btn">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <button className="btn" title="Please, select the search criteria">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="filter">
        <span>Search Criteria:</span>
        <select name="criteria" 
          className="criteria"
          value={selectedOption} 
          onChange={(event) => setSelectedOption(event.target.value)}>
          {getOptions()}
        </select>
      </div>
    </form>
  )
}


function searchSubmitHandler(event, setFilteredUsers) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  const { search, criteria } = Object.fromEntries(data);

  if (criteria === "") {
    return alert("Select Search criteria!");
  }

  if (search === "") {
    setFilteredUsers([]);

  } else {
    setFilteredUsers(users => users.filter(u => u[criteria].toLowerCase().includes(search.toLowerCase())));
  }
}


