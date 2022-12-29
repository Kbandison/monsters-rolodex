import "./App.css";
import React from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  onSearch = (event) => {
    let searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    this.setState(() => {
      return { monsters: users };
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearch } = this;

    let filteredMonsters = monsters.filter((monster) => {
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
                // className="card"
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
  }
}

export default App;
