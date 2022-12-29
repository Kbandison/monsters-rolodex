import "./App.css";
import React from "react";
import CardList from "./components/card-list/card-list.component";

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
        <input
          className="search-box"
          type="search"
          placeholder="Search for Monster"
          onChange={onSearch}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}

        <CardList />
      </div>
    );
  }
}

export default App;
