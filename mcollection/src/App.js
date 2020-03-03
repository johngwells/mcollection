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
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
