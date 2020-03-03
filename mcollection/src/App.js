import React, { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.components.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  // Lifecycle Methods
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name='Johnny'><h1>Johnny</h1>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </CardList>
      </div>
    );
  }
}

export default App;
