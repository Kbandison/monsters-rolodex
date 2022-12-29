import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box";

const App = () => {
  let [searchField, setSearchField] = useState("");
  let [monsters, setMonsters] = useState([]);
  let [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    let newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  let onSearch = (event) => {
    let searchFieldString = event.target.value.toLowerCase();

    setSearchField(searchFieldString);
  };

  filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="title">Monster Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        type="search"
        placeholder="Search for Monster"
        onChange={onSearch}
      />
      <div className="card-list">
        {filteredMonsters.map((monster) => {
          return (
            <CardList
              key={monster.id}
              id={monster.id}
              name={monster.name}
              username={monster.username}
              email={monster.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
